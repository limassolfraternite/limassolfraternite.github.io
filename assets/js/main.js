/* =============================================================================
   LIMASSOL FRATERNITÉ LIONS CLUB — behaviour
   No dependencies. Everything degrades gracefully.

   Loaded after data/i18n.js (translations) and data/content.js (club content).

   Structure
     1. helpers + language resolution
     2. applyI18n()  — translates the fixed HTML
     3. render*()    — builds every dynamic section from CONTENT
     4. setLang()    — swaps language and re-runs 2 and 3
     5. one-time interaction wiring (nav, lightbox, form, scroll effects)
   ============================================================================= */
(function () {
  'use strict';

  /* ------------------------------------------------------------- HELPERS --- */
  var C = (typeof CONTENT !== 'undefined' && CONTENT) ? CONTENT : {};
  var STRINGS = (typeof I18N !== 'undefined' && I18N) ? I18N : {};
  var LANGUAGES = (typeof LANGS !== 'undefined' && LANGS)
    ? LANGS : [{ code: 'en', label: 'EN', name: 'English' }];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (t, c, h) {
    var n = document.createElement(t);
    if (c) n.className = c;
    if (h != null) n.innerHTML = h;
    return n;
  };
  /* escape content so a stray < in a content file can never break the page */
  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };

  /* ------------------------------------------------------------ LANGUAGE --- */
  var LS_KEY = 'lfl-lang';
  var DEFAULT_LANG = 'en';
  var codes = LANGUAGES.map(function (l) { return l.code; });

  /* Priority: ?lang= in the URL (so a link can be shared in a chosen language)
     > a previously saved choice > the visitor's browser language > English. */
  var pickLang = function () {
    var q = null;
    try { q = new URLSearchParams(window.location.search).get('lang'); } catch (e) {}
    if (q && codes.indexOf(q) > -1) return q;

    var saved = null;
    try { saved = localStorage.getItem(LS_KEY); } catch (e) {}   /* private mode */
    if (saved && codes.indexOf(saved) > -1) return saved;

    var nav = (navigator.languages || [navigator.language || '']).join(',').toLowerCase();
    for (var i = 0; i < codes.length; i++) {
      if (codes[i] !== 'en' && nav.indexOf(codes[i]) > -1) return codes[i];
    }
    return DEFAULT_LANG;
  };

  var lang = pickLang();

  /* UI string by key — falls back to English, then the key itself, so a missing
     translation degrades to readable text rather than an empty gap. */
  var t = function (key) {
    var e = STRINGS[key];
    if (!e) return key;
    return e[lang] || e[DEFAULT_LANG] || key;
  };

  /* Resolve a content value that may be a plain string OR a {en,el,fr} block. */
  var tr = function (v) {
    if (v == null) return '';
    if (typeof v === 'string' || typeof v === 'number') return v;
    return v[lang] || v[DEFAULT_LANG] || '';
  };

  /* Sub-pages (e.g. /projects/x/) set <html data-base="../../"> so that the
     relative asset paths written in content.js still resolve correctly. */
  var BASE = document.documentElement.getAttribute('data-base') || '';
  var url = function (p) {
    p = String(p || '');
    return (!p || /^(https?:|\/|data:|#|mailto:)/.test(p)) ? p : BASE + p;
  };
  /* Small copy of a gallery/poster photo (made by tools/build-thumbs.js) for
     tiles and cards; the full photo loads only in the viewer. If the small copy
     is missing, the image quietly falls back to the full one. */
  var thumb = function (p) {
    return /^assets\/img\/(gallery|posters)\/.+\.(webp|jpe?g|png)$/i.test(p)
      ? p.replace(/\.(webp|jpe?g|png)$/i, '-sm.webp') : p;
  };
  var imgSrc = function (p) {
    var small = thumb(p);
    return 'src="' + esc(url(small)) + '"' + (small !== p
      ? ' onerror="this.onerror=null;this.src=\'' + esc(url(p)) + '\'"' : '');
  };
  var limitOf = function (host) {
    var n = parseInt(host.getAttribute('data-limit'), 10);
    return n > 0 ? n : 0;
  };
  /* "See all (12)" link under a shortened list — only shown when needed */
  var moreLink = function (id, key, total, limit) {
    var a = $(id);
    if (!a) return;
    a.hidden = !(limit && total > limit);
    if (a.parentNode && a.parentNode.classList.contains('more')) a.parentNode.hidden = a.hidden;
    a.textContent = t(key) + ' (' + total + ') →';
  };
  var projectUrl = function (p) { return url('projects/' + p.slug + '/'); };
  /* "#contact" means the home page section — from a sub-page go back there */
  var hashHref = function (h) { return (BASE && h.charAt(0) === '#') ? BASE + h : h; };

  var CAT = function (k) { return t('cat.' + k) === 'cat.' + k ? k : t('cat.' + k); };
  var placeholder = function (label) {
    return '<div class="ph"><span>' + esc(label || t('gal.soonPhoto')) + '</span></div>';
  };

  /* ------------------------------------------------------------- REVEAL ---- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pending = [];
  var io = null;
  var firstRender = true;

  var show = function (n) {
    n.classList.add('in');
    if (io) io.unobserve(n);
    var i = pending.indexOf(n);
    if (i > -1) pending.splice(i, 1);
  };

  if ('IntersectionObserver' in window && !reduce) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) show(en.target); });
      /* threshold 0 (not a percentage) so elements taller than the viewport
         still trigger reliably; the negative bottom margin delays the reveal
         until the element is properly on screen. */
    }, { threshold: 0, rootMargin: '0px 0px -80px 0px' });
  }

  /* Backup sweep — IntersectionObserver samples at its own rate, so a very fast
     scroll can pass an element without delivering a callback. This guarantees
     nothing is ever left permanently invisible. */
  var sweep = function () {
    for (var i = pending.length - 1; i >= 0; i--) {
      if (pending[i].getBoundingClientRect().top < window.innerHeight - 80) show(pending[i]);
    }
  };
  var queued = false;
  window.addEventListener('scroll', function () {
    if (queued || !pending.length) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; sweep(); });
  }, { passive: true });

  var watch = function (root) {
    var nodes = (root || document).querySelectorAll('.reveal:not(.in)');
    /* After a language switch the reader is already mid-page — re-animating
       everything would be disorienting, so show it immediately instead. */
    if (!io || !firstRender) {
      [].forEach.call(nodes, function (n) { n.classList.add('in'); });
      return;
    }
    [].forEach.call(nodes, function (n, i) {
      if (n.dataset.watched) return;
      n.dataset.watched = '1';
      n.style.transitionDelay = Math.min(i % 8, 6) * 60 + 'ms';
      pending.push(n);
      io.observe(n);
    });
    sweep();
  };

  /* ==========================================================================
     TRANSLATE THE FIXED HTML
     data-i18n       -> textContent
     data-i18n-html  -> innerHTML (for text that contains markup)
     data-i18n-attr  -> "placeholder:key" or "aria-label:key,title:key2"
     ========================================================================== */
  function applyI18n() {
    document.documentElement.lang = lang;

    [].forEach.call(document.querySelectorAll('[data-i18n]'), function (n) {
      n.textContent = t(n.getAttribute('data-i18n'));
    });
    [].forEach.call(document.querySelectorAll('[data-i18n-html]'), function (n) {
      n.innerHTML = esc(t(n.getAttribute('data-i18n-html')));
    });
    [].forEach.call(document.querySelectorAll('[data-i18n-attr]'), function (n) {
      n.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length === 2) n.setAttribute(bits[0].trim(), t(bits[1].trim()));
      });
    });
  }

  /* ==========================================================================
     DYNAMIC SECTIONS
     ========================================================================== */
  var galleryItems = [];
  var activeFilter = 'all';

  /* -------------------------------------------------------------- STATS ---- */
  function renderStats() {
    var host = $('#statsGrid');
    if (!host || !C.stats) return;
    host.innerHTML = '';

    C.stats.forEach(function (s) {
      host.appendChild(el('div', 'stat reveal',
        '<b data-to="' + Number(s.value) + '" data-sfx="' + esc(s.suffix || '') + '"' +
          (s.plain ? ' data-plain="1"' : '') + '>0</b>' +
        '<u>' + esc(tr(s.label)) + '</u><i>' + esc(tr(s.note)) + '</i>'));
    });
    watch(host);   /* rebuilt cards must be revealed again after a language switch */

    /* `plain` skips thousands separators — years must read 1917, not 1,917 */
    var fmt = function (v, plain) { return plain ? String(v) : v.toLocaleString('en-GB'); };

    var count = function (node) {
      var to = +node.dataset.to, sfx = node.dataset.sfx || '';
      var plain = node.dataset.plain === '1';
      if (reduce || !firstRender) { node.textContent = fmt(to, plain) + sfx; return; }
      var start = null, dur = 1600;
      var step = function (ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);                       /* easeOutCubic */
        node.textContent = fmt(Math.round(to * e), plain) + (p === 1 ? sfx : '');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    var nodes = host.querySelectorAll('b[data-to]');
    if ('IntersectionObserver' in window && firstRender) {
      var so = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { count(e.target); so.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
      [].forEach.call(nodes, function (b) { so.observe(b); });
    } else {
      [].forEach.call(nodes, count);
    }
  }

  /* ----------------------------------------------------------- PROJECTS ---- */
  /* Home page:      <div id="projects" data-limit="3">  → the 3 most recent
     /projects/ page: no limit, with category filters      → all of them      */
  var byDate = function (a, b) {
    if (!a.date || !b.date) return 0;
    return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
  };
  var newestFirst = function (a, b) { return byDate(b, a); };
  /* a photo is as recent as its project; photos with no project go last */
  var photoDate = function (g) {
    var p = (C.projects || []).filter(function (x) { return x.slug === g.project; })[0];
    return (p && p.date) || '';
  };

  function renderProjects() {
    var host = $('#projects'), bar = $('#filters'), empty = $('#projectsEmpty');
    if (!host || !C.projects) return;
    var limit = limitOf(host);

    var order = ['environment', 'health', 'youth', 'hunger', 'tech', 'community'];
    var present = ['all'].concat(order.filter(function (k) {
      return C.projects.some(function (p) { return p.category === k; });
    }));
    if (present.indexOf(activeFilter) === -1) activeFilter = 'all';

    if (bar) {
      bar.innerHTML = '';
      present.forEach(function (k) {
        var b = el('button', 'filter', k === 'all' ? esc(t('work.filterAll')) : esc(CAT(k)));
        b.type = 'button';
        b.setAttribute('aria-pressed', k === activeFilter ? 'true' : 'false');
        b.dataset.cat = k;
        bar.appendChild(b);
      });
    }

    host.innerHTML = '';
    var list = C.projects.filter(function (p) {
      return activeFilter === 'all' || p.category === activeFilter;
    });
    /* Newest first, even if entries are added to content.js out of order.
       Undated items keep their written position. */
    list = list.slice().sort(newestFirst);
    if (limit) list = list.slice(0, limit);
    if (empty) empty.hidden = list.length > 0;
    moreLink('#projectsMore', 'work.all', C.projects.length, limit);

    list.forEach(function (p) {
      var media = p.image
        ? '<img ' + imgSrc(p.image) + ' alt="' + esc(tr(p.alt) || tr(p.title)) +
          '" loading="lazy" decoding="async" width="640" height="400">'
        : placeholder(CAT(p.category));
      var title = p.slug
        ? '<a href="' + esc(projectUrl(p)) + '">' + esc(tr(p.title)) + '</a>'
        : esc(tr(p.title));

      host.appendChild(el('article', 'card reveal' + (p.slug ? ' card--link' : ''),
        '<div class="card__img">' + media + '</div>' +
        '<div class="card__body">' +
          '<div class="card__top">' +
            '<span class="tag tag--' + esc(p.status) + '">' + esc(t('status.' + p.status)) + '</span>' +
            '<span class="tag tag--cat">' + esc(CAT(p.category)) + '</span>' +
          '</div>' +
          '<h3>' + title + '</h3>' +
          '<p>' + esc(tr(p.summary)) + '</p>' +
          '<div class="card__foot">' +
            '<span class="card__impact">' + esc(tr(p.impact)) + '</span>' +
            '<span class="card__yr">' + esc(tr(p.year)) + '</span>' +
          '</div>' +
          (p.slug ? '<span class="card__more" aria-hidden="true">' + esc(t('proj.more')) + ' →</span>' : '') +
        '</div>'));
    });
    watch(host);
  }

  /* ------------------------------------------------------- PROJECT PAGE ---- */
  /* Translates the project's own page (/projects/<slug>/). The page is written
     in English at build time for search engines; this swaps in the visitor's
     language using the same content.js entry. */
  function renderProjectPage() {
    var page = $('[data-proj]');
    if (!page || !C.projects) return;
    var slug = page.getAttribute('data-proj');
    var list = C.projects.slice().sort(byDate);
    var i = -1;
    list.forEach(function (p, n) { if (p.slug === slug) i = n; });
    var p = list[i];
    if (!p) return;

    [].forEach.call(page.querySelectorAll('[data-pf]'), function (n) {
      n.textContent = tr(p[n.getAttribute('data-pf')]);
    });
    var img = page.querySelector('[data-pf-alt]');
    if (img) img.alt = tr(p.alt) || tr(p.title);
    var st = page.querySelector('[data-pstatus]');
    if (st) st.textContent = t('status.' + p.status);
    var cat = page.querySelector('[data-pcat]');
    if (cat) cat.textContent = CAT(p.category);

    var link = function (id, q) {
      var a = $(id);
      if (!a) return;
      a.hidden = !q;
      if (!q) return;
      a.href = projectUrl(q);
      var b = a.querySelector('b');
      if (b) b.textContent = tr(q.title);
    };
    link('#projPrev', list[i - 1]);
    link('#projNext', list[i + 1]);
    document.title = tr(p.title) + ' (' + tr(p.year) + ') — ' + ((C.club && C.club.name) || '');
  }

  /* ------------------------------------------------------------ GALLERY ---- */
  /* data-project="<slug>" → only that project's photos (its own page)
     data-limit="12"       → home page shows the first 12, rest on /gallery/ */
  function renderGallery() {
    var host = $('#gallery-grid');
    if (!host || !C.gallery) return;
    host.innerHTML = '';
    galleryItems = [];

    var only = host.getAttribute('data-project');
    var limit = limitOf(host);
    var items = C.gallery.filter(function (g) { return !only || g.project === only; })
      .map(function (g, n) { return { g: g, n: n, d: photoDate(g) }; })
      .sort(function (a, b) { return a.d < b.d ? 1 : a.d > b.d ? -1 : a.n - b.n; })
      .map(function (x) { return x.g; });
    moreLink('#galleryMore', 'gal.all', items.length, limit);
    if (limit) items = items.slice(0, limit);

    /* hide a project page's photo block when that project has no extra photos */
    var wrap = host.closest('[data-hide-empty]');
    if (wrap) wrap.hidden = !items.length;

    items.forEach(function (g, i) {
      galleryItems.push(g);
      var media = g.src
        ? '<img ' + imgSrc(g.src) + ' alt="' + esc(tr(g.alt)) + '" loading="lazy" decoding="async"' +
          (g.pos ? ' style="object-position:' + esc(g.pos) + '"' : '') + '>'
        : placeholder(t('gal.soonPhoto'));
      var cap = tr(g.caption) || tr(g.alt);
      var f = el('figure', 'gcell', media + '<figcaption>' + esc(cap) + '</figcaption>');
      f.tabIndex = 0;
      f.setAttribute('role', 'button');
      f.setAttribute('aria-label', t('gal.view') + ': ' + cap);
      f.dataset.i = i;
      host.appendChild(f);
    });
  }

  /* ------------------------------------------------------------- VIDEOS ---- */
  /* gold disc with a true-centred triangle (a text ▶ glyph sits off-centre) */
  var PLAY = '<span class="vid__play"><svg viewBox="0 0 64 64" aria-hidden="true">' +
    '<circle cx="32" cy="32" r="32" fill="#FFCB05"/><path d="M26 20.5v23L44 32z" fill="#0B0F1C"/></svg></span>';

  function renderVideos() {
    var host = $('#videos');
    if (!host || !C.videos) return;
    host.innerHTML = '';

    C.videos.forEach(function (v) {
      var title = tr(v.title);
      var frame;
      if (v.id) {
        /* YouTube facade: load only a thumbnail until clicked. Keeps the page
           fast and avoids YouTube cookies for visitors who never press play. */
        frame =
          '<button class="vid__lite" type="button" data-yt="' + esc(v.id) +
            '" aria-label="' + esc(t('gal.play') + ': ' + title) + '">' +
            '<img src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt="" loading="lazy" decoding="async">' +
            PLAY +
          '</button>';
      } else if (v.file) {
        /* Local file facade: nothing downloads until play is pressed, so a
           large video never affects the initial page load. */
        frame =
          '<button class="vid__lite vid__local" type="button" data-file="' + esc(url(v.file)) +
            (v.poster ? '" data-poster="' + esc(url(v.poster)) : '') +
            '" aria-label="' + esc(t('gal.play') + ': ' + title) + '">' +
            (v.poster
              ? '<img ' + imgSrc(v.poster) + ' alt="" loading="lazy" decoding="async">'
              : '<span class="vid__ph"></span>') +
            PLAY +
            (v.duration ? '<span class="vid__dur">' + esc(v.duration) + '</span>' : '') +
          '</button>';
      } else {
        frame = placeholder(t('gal.soonVideo'));
      }
      host.appendChild(el('article', 'vid reveal',
        '<div class="vid__frame">' + frame + '</div>' +
        '<div class="vid__meta"><b>' + esc(title) + '</b>' +
          (v.desc ? '<p>' + esc(tr(v.desc)) + '</p>' : '') + '</div>'));
    });
    watch(host);
  }

  /* ------------------------------------------------------------- VOICES ---- */
  function renderVoices() {
    var host = $('#voices');
    if (!host || !C.voices) return;
    host.innerHTML = '';
    C.voices.forEach(function (v) {
      host.appendChild(el('figure', 'voice reveal',
        '<blockquote>' + esc(tr(v.quote)) + '</blockquote>' +
        '<cite>' + esc(tr(v.name)) + '<br><small>' + esc(tr(v.role)) + '</small></cite>'));
    });
    watch(host);
  }

  /* ---------------------------------------------------------- LEADERS ---- */
  /* Hidden until real, permission-granted entries exist in content.js */
  function renderLeaders() {
    var sec = $('#leaders'), host = $('#leaders-list');
    if (!sec || !host) return;
    var list = C.leaders || [];
    sec.hidden = !list.length;
    host.innerHTML = '';
    list.forEach(function (p) {
      var initials = String(p.name || '').split(/\s+/).map(function (w) { return w.charAt(0); })
        .join('').slice(0, 2).toUpperCase();
      var face = p.photo
        ? '<img src="' + esc(url(p.photo)) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async" width="320" height="320">'
        : '<span class="leader__init" aria-hidden="true">' + esc(initials) + '</span>';
      host.appendChild(el('figure', 'leader reveal',
        '<div class="leader__face">' + face + '</div>' +
        '<figcaption><b>' + esc(p.name) + '</b><span>' + esc(tr(p.role)) + '</span></figcaption>'));
    });
    watch(host);
  }

  /* --------------------------------------------------------------- NEWS ---- */
  function renderNews() {
    var host = $('#news-list');
    if (!host || !C.announcements) return;
    host.innerHTML = '';

    var locales = { en: 'en-GB', el: 'el-GR', fr: 'fr-FR' };
    var fmt = function (iso) {
      var d = new Date(iso + 'T00:00:00');
      if (isNaN(d)) return iso;
      try {
        return d.toLocaleDateString(locales[lang] || 'en-GB',
          { day: 'numeric', month: 'long', year: 'numeric' });
      } catch (e) { return iso; }
    };

    var limit = limitOf(host);
    moreLink('#newsMore', 'news.all', C.announcements.length, limit);
    var items = C.announcements.slice()
      .sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    if (limit) items = items.slice(0, limit);
    items.forEach(function (a) {
        var label = a.cta ? tr(a.cta.label) : '';
        var cta = label
          ? '<a class="btn btn--ghost btn--sm" href="' + esc(hashHref((a.cta && a.cta.href) || '#contact')) + '">' +
            esc(label) + '</a>'
          : '<span></span>';
        var img = a.image
          ? '<img class="item__img" src="' + esc(url(a.image)) + '" alt="' + esc(tr(a.alt)) +
            '" loading="lazy" decoding="async" width="96" height="96">'
          : '';
        host.appendChild(el('article', 'item reveal' + (img ? ' item--img' : ''),
          '<div class="item__date">' +
            '<span class="tag tag--cat">' + esc(t('kind.' + a.type)) + '</span>' +
            '<time datetime="' + esc(a.date) + '">' + esc(fmt(a.date)) + '</time>' +
          '</div>' +
          '<div class="item__body">' + img +
            '<div><h3>' + esc(tr(a.title)) + '</h3><p>' + esc(tr(a.body)) + '</p></div></div>' + cta));
      });
    watch(host);
  }

  /* ---------------------------------------------------------------- FAQ ---- */
  function renderFaq() {
    var host = $('#faq-list');
    if (!host || !C.faq) return;
    host.innerHTML = '';

    C.faq.forEach(function (f, i) {
      var d = el('div', 'qa');
      var q = el('button', 'qa__q', esc(tr(f.q)));
      q.type = 'button';
      q.id = 'q' + i;
      q.setAttribute('aria-expanded', 'false');
      q.setAttribute('aria-controls', 'a' + i);

      var a = el('div', 'qa__a', '<p>' + esc(tr(f.a)) + '</p>');
      a.id = 'a' + i;
      a.setAttribute('role', 'region');
      a.setAttribute('aria-labelledby', 'q' + i);

      q.addEventListener('click', function () {
        if (d.hasAttribute('open')) {
          a.style.height = a.scrollHeight + 'px';
          requestAnimationFrame(function () { a.style.height = '0px'; });
          d.removeAttribute('open');
          q.setAttribute('aria-expanded', 'false');
        } else {
          d.setAttribute('open', '');
          q.setAttribute('aria-expanded', 'true');
          a.style.height = a.scrollHeight + 'px';
          setTimeout(function () { if (d.hasAttribute('open')) a.style.height = 'auto'; }, 360);
        }
      });

      d.appendChild(q); d.appendChild(a); host.appendChild(d);
    });

    /* Inject FAQ structured data (schema.org FAQPage) so Google can show the
       questions as rich results. Built from the same content, in the current
       language, so it never drifts out of sync with what's on the page. */
    var faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: C.faq.map(function (f) {
        return {
          '@type': 'Question',
          name: tr(f.q),
          acceptedAnswer: { '@type': 'Answer', text: tr(f.a) }
        };
      })
    };
    var old = document.getElementById('faq-schema');
    if (old) old.remove();
    var sc = document.createElement('script');
    sc.type = 'application/ld+json';
    sc.id = 'faq-schema';
    sc.textContent = JSON.stringify(faqLd);
    document.head.appendChild(sc);
  }

  /* --------------------------------------------------------------- CLUB ---- */
  function renderClub() {
    var c = C.club; if (!c) return;
    var set = function (id, v) { var n = $(id); if (n) n.textContent = v; };

    set('#m-when', tr(c.meetDay) + ' · ' + c.meetTime);
    set('#m-where', tr(c.venue));
    set('#m-addr', tr(c.address));
    /* The venue changes month to month; the address row and map button only
       appear once a fixed address is filled in (data/content.js). */
    var addrRow = $('#m-addr-row');
    if (addrRow) addrRow.hidden = !tr(c.address);
    set('#m-lang', tr(c.languages));
    set('#m-dist', tr(c.district));
    set('#f-dist', tr(c.district));
    set('#yr', new Date().getFullYear());

    var mail = $('#m-mail');
    if (mail) { mail.textContent = c.email; mail.href = 'mailto:' + c.email; }

    var map = $('#m-map');
    if (map) {
      map.hidden = !(c.mapQuery || tr(c.address));
      map.href = 'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(c.mapQuery || tr(c.address));
    }
    var ask = $('#m-ask');
    if (ask) ask.href = 'mailto:' + c.email + '?subject=' +
      encodeURIComponent(c.name + ' — ' + t('con.askSubject'));

    var soc = $('#social');
    if (soc && c.social) {
      soc.innerHTML = '';
      /* Simple line/solid icons drawn inline — no icon font or external request */
      var svg = function (body, solid) {
        return '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" ' +
          (solid ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.8" ' +
          'stroke-linecap="round" stroke-linejoin="round"') + '>' + body + '</svg>';
      };
      var ICON = {
        instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/>' +
          '<circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/>'),
        facebook: svg('<path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4' +
          'A21 21 0 0 0 14.4 4.3c-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21z"/>', true),
        tiktok: svg('<path d="M16.6 3h-3.1v12.2a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V9.4' +
          'a5.9 5.9 0 1 0 5 5.8V9a7.4 7.4 0 0 0 4.3 1.4V7.3A4.3 4.3 0 0 1 16.6 3z"/>', true),
        eclubhouse: svg('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v12h14V9"/><path d="M10 21v-6h4v6"/>'),
        lci: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/>' +
          '<path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>')
      };
      var TITLE = {
        instagram: 'Instagram', facebook: 'Facebook', tiktok: 'TikTok',
        eclubhouse: 'Lions e-Clubhouse', lci: 'Lions Clubs International'
      };
      Object.keys(c.social).forEach(function (k) {
        if (!c.social[k]) return;
        var a = el('a', 'soc', ICON[k] || esc(k.slice(0, 2).toUpperCase()));
        a.href = c.social[k];
        a.target = '_blank';
        a.rel = 'noopener';
        a.title = TITLE[k] || k;
        a.setAttribute('aria-label', TITLE[k] || k);
        soc.appendChild(a);
      });
    }
  }

  function renderAll() {
    renderStats();
    renderProjects();
    renderProjectPage();
    renderGallery();
    renderVideos();
    renderVoices();
    renderLeaders();
    renderNews();
    renderFaq();
    renderClub();
  }

  /* ==========================================================================
     LANGUAGE SWITCHER
     ========================================================================== */
  function setLang(next) {
    if (codes.indexOf(next) === -1 || next === lang) return;
    lang = next;
    try { localStorage.setItem(LS_KEY, lang); } catch (e) {}

    applyI18n();
    renderAll();
    syncSwitcher();

    /* keep ?lang= in the address bar honest so the URL can be shared */
    try {
      var u = new URL(window.location.href);
      u.searchParams.set('lang', lang);
      history.replaceState(null, '', u);
    } catch (e) {}
  }

  var switcher = null;
  function syncSwitcher() {
    if (!switcher) return;
    [].forEach.call(switcher.querySelectorAll('button'), function (b) {
      var on = b.dataset.lang === lang;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function buildSwitcher() {
    var host = $('.nav__in');
    if (!host || LANGUAGES.length < 2) return;

    switcher = el('div', 'langs');
    switcher.setAttribute('role', 'group');

    LANGUAGES.forEach(function (l) {
      var b = el('button', 'lang', esc(l.label));
      b.type = 'button';
      b.dataset.lang = l.code;
      b.lang = l.code;
      b.title = l.name;
      b.setAttribute('aria-label', l.name);
      b.addEventListener('click', function () { setLang(l.code); });
      switcher.appendChild(b);
    });

    host.insertBefore(switcher, $('#burger'));
    syncSwitcher();
  }

  /* ==========================================================================
     ONE-TIME INTERACTION WIRING
     ========================================================================== */

  /* ----------------------------------------------------------------- NAV --- */
  var nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');

  var onScroll = function () { nav.classList.toggle('nav--stuck', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('nav--open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? t('nav.close') : t('nav.open'));
  });
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      nav.classList.remove('nav--open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) burger.click();
  });

  /* ------------------------------------------------------ PROJECT FILTER --- */
  (function () {
    var bar = $('#filters');
    if (!bar) return;
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('.filter');
      if (!b) return;
      activeFilter = b.dataset.cat;
      renderProjects();
    });
  })();

  /* ----------------------------------------------------------- LIGHTBOX --- */
  var lightbox = (function () {
    var box = $('#lb'), host = $('#lbHost'), cap = $('#lbCap'), last = null, idx = 0;
    if (!box) return { open: function () {} };

    var draw = function () {
      var g = galleryItems[idx];
      if (!g) return;
      host.innerHTML = g.src
        ? '<img src="' + esc(url(g.src)) + '" alt="' + esc(tr(g.alt)) + '">'
        : placeholder(t('gal.soonPhoto'));
      cap.textContent = (tr(g.caption) || tr(g.alt) || '') +
        '  (' + (idx + 1) + ' ' + t('gal.of') + ' ' + galleryItems.length + ')';
    };
    var move = function (d) {
      if (!galleryItems.length) return;
      idx = (idx + d + galleryItems.length) % galleryItems.length;
      draw();
    };
    var close = function () {
      box.hidden = true;
      document.body.style.overflow = '';
      if (last) last.focus();
    };

    $('#lbClose').addEventListener('click', close);
    $('#lbPrev').addEventListener('click', function () { move(-1); });
    $('#lbNext').addEventListener('click', function () { move(1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
    });

    /* swipe left/right on touch devices */
    var x0 = null, y0 = null;
    box.addEventListener('touchstart', function (e) {
      x0 = e.changedTouches[0].clientX; y0 = e.changedTouches[0].clientY;
    }, { passive: true });
    box.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
      x0 = y0 = null;
    }, { passive: true });

    return {
      open: function (i) {
        last = document.activeElement;
        idx = i; draw();
        box.hidden = false;
        document.body.style.overflow = 'hidden';
        $('#lbClose').focus();
      }
    };
  })();

  (function () {
    var host = $('#gallery-grid');
    if (!host) return;
    var open = function (e) {
      var c = e.target.closest('.gcell');
      if (!c) return;
      if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      lightbox.open(+c.dataset.i);
    };
    host.addEventListener('click', open);
    host.addEventListener('keydown', open);
  })();

  /* --------------------------------------------------------- VIDEO PLAY --- */
  (function () {
    var host = $('#videos');
    if (!host) return;
    host.addEventListener('click', function (e) {
      var b = e.target.closest('.vid__lite');
      if (!b) return;

      if (b.dataset.file) {                                   /* local video file */
        var v = document.createElement('video');
        v.src = b.dataset.file;
        v.controls = true;
        v.autoplay = true;
        v.setAttribute('playsinline', '');                    /* no forced fullscreen on iOS */
        v.preload = 'auto';
        if (b.dataset.poster) v.poster = b.dataset.poster;
        b.replaceWith(v);
        v.play().catch(function () {});
        return;
      }

      var f = document.createElement('iframe');               /* YouTube */
      f.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.yt + '?autoplay=1&rel=0';
      f.title = 'Video player';
      f.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
      f.allowFullscreen = true;
      b.replaceWith(f);
    });
  })();

  /* --------------------------------------------------------------- FORM --- */
  (function () {
    var form = $('#contactForm'), note = $('#formNote');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var c = C.club || {};
      var d = new FormData(form);
      var name = (d.get('name') || '').trim();
      var mail = (d.get('email') || '').trim();

      note.className = 'form__note';
      if (!name || !mail || mail.indexOf('@') < 1) {
        note.textContent = t('form.err');
        note.classList.add('form__note--err');
        return;
      }

      var body = 'Name: ' + name + '\nEmail: ' + mail +
        '\nInterested in: ' + d.get('interest') + '\nLanguage: ' + lang +
        '\n\n' + (d.get('message') || '');

      /* Formspree route — set club.formEndpoint in data/content.js to enable */
      if (c.formEndpoint) {
        note.textContent = t('form.sending');
        fetch(c.formEndpoint, { method: 'POST', body: d, headers: { Accept: 'application/json' } })
          .then(function (r) {
            if (!r.ok) throw new Error('bad status');
            form.reset();
            note.textContent = t('form.ok');
            note.classList.add('form__note--ok');
          })
          .catch(function () {
            note.textContent = t('form.fail') + ' ' + c.email;
            note.classList.add('form__note--err');
          });
        return;
      }

      /* Default route — opens the visitor's mail app. Zero setup, zero cost. */
      window.location.href = 'mailto:' + (c.email || '') +
        '?subject=' + encodeURIComponent(t('form.subject') + ' — ' + d.get('interest')) +
        '&body=' + encodeURIComponent(body);
      note.textContent = t('form.mail') + ' ' + c.email;
      note.classList.add('form__note--ok');
    });
  })();

  /* ---------------------------------------------------- SCROLL PROGRESS --- */
  (function () {
    var bar = el('div', 'prog');
    document.body.appendChild(bar);
    var tick = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
    };
    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick, { passive: true });
    tick();
  })();

  /* ------------------------------------------------------- SCROLL SPY ----- */
  (function () {
    var navLinks = [].slice.call(document.querySelectorAll('.nav__links a[href^="#"]:not(.btn)'));
    if (!navLinks.length || !('IntersectionObserver' in window)) return;

    var map = {};
    navLinks.forEach(function (a) {
      var s = document.querySelector(a.getAttribute('href'));
      if (s) map[s.id] = a;
    });

    var visible = {};
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      var current = null;
      Object.keys(map).forEach(function (id) { if (visible[id] && !current) current = id; });
      navLinks.forEach(function (a) { a.classList.remove('is-here'); });
      if (current && map[current]) map[current].classList.add('is-here');
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    Object.keys(map).forEach(function (id) { spy.observe(document.getElementById(id)); });
  })();

  /* ------------------------------------------------------ BACK TO TOP ----- */
  (function () {
    var btn = el('button', 'totop', '<span aria-hidden="true">↑</span>');
    btn.type = 'button';
    btn.setAttribute('data-i18n-attr', 'aria-label:toTop');
    document.body.appendChild(btn);

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      var brand = $('.brand'); if (brand) brand.focus({ preventScroll: true });
    });

    var q = false;
    window.addEventListener('scroll', function () {
      if (q) return;
      q = true;
      requestAnimationFrame(function () {
        q = false;
        btn.classList.toggle('show', window.scrollY > window.innerHeight * 1.2);
      });
    }, { passive: true });
  })();

  /* --------------------------------------------------- COPY THE EMAIL ----- */
  (function () {
    var link = $('#m-mail');
    if (!link || !navigator.clipboard) return;

    var btn = el('button', 'copy');
    btn.type = 'button';
    btn.setAttribute('data-i18n', 'con.copy');
    btn.setAttribute('data-i18n-attr', 'aria-label:con.copyAria');
    link.insertAdjacentElement('afterend', btn);

    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(link.textContent.trim()).then(function () {
        btn.textContent = t('con.copied');
        btn.classList.add('copy--ok');
        setTimeout(function () {
          btn.textContent = t('con.copy');
          btn.classList.remove('copy--ok');
        }, 1800);
      }).catch(function () { btn.textContent = 'Ctrl+C'; });
    });
  })();

  /* ------------------------------------------------- ADD TO CALENDAR ------ */
  /* Builds a recurring .ics for the monthly meeting entirely in the browser,
     so someone interested at 1am can put it straight into their calendar. */
  (function () {
    var host = $('#m-ask');
    if (!host || !C.club) return;

    var btn = el('button', 'btn btn--ghost btn--sm');
    btn.type = 'button';
    btn.setAttribute('data-i18n', 'con.cal');
    host.insertAdjacentElement('afterend', btn);

    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var fourthMonday = function (y, m) {
      var d = new Date(y, m, 1);
      d.setDate(1 + ((8 - d.getDay()) % 7) + 21);           /* first Monday + 3 weeks */
      return d;
    };
    var stamp = function (d) {
      return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) +
             'T' + pad(d.getHours()) + pad(d.getMinutes()) + '00';
    };
    /* commas and semicolons are field separators in iCalendar and must be escaped */
    var ics = function (s) { return String(s).replace(/([,;\\])/g, '\\$1'); };

    btn.addEventListener('click', function () {
      var c = C.club;
      var hhmm = (c.meetTime || '19:30').split(':');
      var now = new Date();
      var first = fourthMonday(now.getFullYear(), now.getMonth());
      first.setHours(+hhmm[0] || 19, +hhmm[1] || 30, 0, 0);
      if (first < now) {
        first = fourthMonday(now.getFullYear(), now.getMonth() + 1);
        first.setHours(+hhmm[0] || 19, +hhmm[1] || 30, 0, 0);
      }
      var end = new Date(first.getTime() + 90 * 60000);

      var body = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Limassol Fraternite Lions Club//Website//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        'UID:monthly-meeting-' + stamp(first) + '@limassolfraternite',
        'DTSTAMP:' + stamp(new Date()),
        'DTSTART:' + stamp(first),
        'DTEND:' + stamp(end),
        'RRULE:FREQ=MONTHLY;BYDAY=4MO',
        'SUMMARY:' + ics(c.name + ' — ' + t('con.h2a')),
        'LOCATION:' + ics(tr(c.address) ? tr(c.venue) + ', ' + tr(c.address) : tr(c.venue)),
        'DESCRIPTION:' + ics(t('con.venueNote') + ' ' + c.email),
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      var url = URL.createObjectURL(new Blob([body], { type: 'text/calendar;charset=utf-8' }));
      var a = el('a');
      a.href = url;
      a.download = 'limassol-fraternite-lions-meeting.ics';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    });
  })();

  /* --------------------------------------------------------------- INIT --- */
  buildSwitcher();
  applyI18n();

  /* First load: build the sections one small task at a time instead of in a
     single long block, so the phone stays responsive and the banner (already
     in the HTML) paints immediately. A language switch later re-renders in
     one go via renderAll(). */
  var steps = [renderStats, renderProjects, renderProjectPage, renderGallery, renderVideos,
               renderVoices, renderLeaders, renderNews, renderFaq, renderClub];
  var next = function (i) {
    if (i < steps.length) {
      steps[i]();
      setTimeout(function () { next(i + 1); }, 0);
      return;
    }
    watch(document);
    firstRender = false;
    /* arrived on a link like /#faq: jump again now the section is built */
    if (location.hash.length > 1) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
  };
  next(0);
})();
