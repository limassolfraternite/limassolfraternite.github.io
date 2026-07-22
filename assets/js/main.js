/* =============================================================================
   LIMASSOL FRATERNITÉ LIONS CLUB — behaviour
   No dependencies. ~9KB unminified. Everything degrades gracefully.
   Content comes from data/content.js (loaded before this file).
   ============================================================================= */
(function () {
  'use strict';

  /* content.js declares `const CONTENT`, which does NOT become a window property.
     Read the binding directly, guarded in case the file failed to load. */
  var C = (typeof CONTENT !== 'undefined' && CONTENT) ? CONTENT : {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (t, c, h) {
    var n = document.createElement(t);
    if (c) n.className = c;
    if (h != null) n.innerHTML = h;
    return n;
  };
  /* escape user content so a stray < in content.js can never break the page */
  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };
  var placeholder = function (label) {
    return '<div class="ph"><span>' + esc(label || 'Photo coming soon') + '</span></div>';
  };

  var CATS = {
    environment: 'Environment', health: 'Health', youth: 'Youth',
    hunger: 'Hunger', tech: 'Technology', community: 'Community'
  };
  var STATUS = { live: 'Live now', complete: 'Completed', upcoming: 'Upcoming' };

  /* ---------------------------------------------------------------- NAV --- */
  var nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');

  var onScroll = function () {
    nav.classList.toggle('nav--stuck', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('nav--open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
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

  /* ------------------------------------------------------------- REVEAL --- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pending = [];          /* elements still waiting to be revealed */
  var io = null;

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
         until the element is properly on screen rather than clipping the edge. */
    }, { threshold: 0, rootMargin: '0px 0px -80px 0px' });
  }

  /* Backup sweep. IntersectionObserver samples at its own rate, so a very fast
     scroll can pass an element without ever delivering a callback for it. This
     guarantees nothing is ever left permanently invisible. */
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
    if (!io) { [].forEach.call(nodes, function (n) { n.classList.add('in'); }); return; }
    [].forEach.call(nodes, function (n, i) {
      if (n.dataset.watched) return;            /* watch() may cover a node twice */
      n.dataset.watched = '1';
      n.style.transitionDelay = Math.min(i % 8, 6) * 60 + 'ms';
      pending.push(n);
      io.observe(n);
    });
    sweep();
  };

  /* -------------------------------------------------------------- STATS --- */
  (function () {
    var host = $('#statsGrid');
    if (!host || !C.stats) return;
    C.stats.forEach(function (s) {
      var n = el('div', 'stat reveal',
        '<b data-to="' + Number(s.value) + '" data-sfx="' + esc(s.suffix || '') + '"' +
          (s.plain ? ' data-plain="1"' : '') + '>0</b>' +
        '<u>' + esc(s.label) + '</u><i>' + esc(s.note || '') + '</i>');
      host.appendChild(n);
    });

    /* `plain` stats skip thousands separators — years must read 1917, not 1,917 */
    var fmt = function (v, plain) {
      return plain ? String(v) : v.toLocaleString('en-GB');
    };

    var count = function (node) {
      var to = +node.dataset.to, sfx = node.dataset.sfx || '';
      var plain = node.dataset.plain === '1';
      if (reduce) { node.textContent = fmt(to, plain) + sfx; return; }
      var start = null, dur = 1600;
      var step = function (ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);                    /* easeOutCubic */
        node.textContent = fmt(Math.round(to * e), plain) + (p === 1 ? sfx : '');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      var so = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { count(e.target); so.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
      [].forEach.call(host.querySelectorAll('b[data-to]'), function (b) { so.observe(b); });
    } else {
      [].forEach.call(host.querySelectorAll('b[data-to]'), count);
    }
  })();

  /* ----------------------------------------------------------- PROJECTS --- */
  (function () {
    var host = $('#projects'), bar = $('#filters'), empty = $('#projectsEmpty');
    if (!host || !C.projects) return;

    var present = ['all'].concat(Object.keys(CATS).filter(function (k) {
      return C.projects.some(function (p) { return p.category === k; });
    }));

    present.forEach(function (k, i) {
      var b = el('button', 'filter', k === 'all' ? 'All projects' : CATS[k]);
      b.type = 'button';
      b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
      b.dataset.cat = k;
      bar.appendChild(b);
    });

    var render = function (cat) {
      host.innerHTML = '';
      var list = C.projects.filter(function (p) { return cat === 'all' || p.category === cat; });
      empty.hidden = list.length > 0;

      list.forEach(function (p) {
        var media = p.image
          ? '<img src="' + esc(p.image) + '" alt="' + esc(p.alt || p.title) + '" loading="lazy" decoding="async" width="640" height="400">'
          : placeholder(CATS[p.category] || 'Project');

        host.appendChild(el('article', 'card reveal',
          '<div class="card__img">' + media + '</div>' +
          '<div class="card__body">' +
            '<div class="card__top">' +
              '<span class="tag tag--' + esc(p.status) + '">' + esc(STATUS[p.status] || p.status) + '</span>' +
              '<span class="tag tag--cat">' + esc(CATS[p.category] || p.category) + '</span>' +
            '</div>' +
            '<h3>' + esc(p.title) + '</h3>' +
            '<p>' + esc(p.summary) + '</p>' +
            '<div class="card__foot">' +
              '<span class="card__impact">' + esc(p.impact || '') + '</span>' +
              '<span class="card__yr">' + esc(p.year || '') + '</span>' +
            '</div>' +
          '</div>'));
      });
      watch(host);
    };

    bar.addEventListener('click', function (e) {
      var b = e.target.closest('.filter');
      if (!b) return;
      [].forEach.call(bar.children, function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      render(b.dataset.cat);
    });

    render('all');
  })();

  /* ------------------------------------------------------------ GALLERY --- */
  var galleryItems = [];
  (function () {
    var host = $('#gallery-grid');
    if (!host || !C.gallery) return;

    C.gallery.forEach(function (g, i) {
      galleryItems.push(g);
      var media = g.src
        ? '<img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy" decoding="async">'
        : placeholder('Photo');
      var f = el('figure', 'gcell',
        media + '<figcaption>' + esc(g.caption || g.alt) + '</figcaption>');
      f.tabIndex = 0;
      f.setAttribute('role', 'button');
      f.setAttribute('aria-label', 'View: ' + (g.caption || g.alt));
      f.dataset.i = i;
      host.appendChild(f);
    });

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

  /* ------------------------------------------------------------- VIDEOS --- */
  (function () {
    var host = $('#videos');
    if (!host || !C.videos) return;

    C.videos.forEach(function (v) {
      var frame;
      if (v.id) {
        /* Facade: load only a thumbnail until clicked. Keeps the page fast and
           avoids YouTube setting cookies on visitors who never press play. */
        frame =
          '<button class="vid__lite" type="button" data-yt="' + esc(v.id) + '" aria-label="Play: ' + esc(v.title) + '">' +
            '<img src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt="" loading="lazy" decoding="async">' +
            '<span class="vid__play"><span>▶</span></span>' +
          '</button>';
      } else {
        frame = placeholder('Video coming soon');
      }
      host.appendChild(el('article', 'vid reveal',
        '<div class="vid__frame">' + frame + '</div>' +
        '<div class="vid__meta"><b>' + esc(v.title) + '</b><i>' + esc(v.duration || '') + '</i></div>'));
    });

    host.addEventListener('click', function (e) {
      var b = e.target.closest('.vid__lite');
      if (!b) return;
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.yt + '?autoplay=1&rel=0';
      f.title = 'Video player';
      f.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
      f.allowFullscreen = true;
      b.replaceWith(f);
    });
  })();

  /* ------------------------------------------------------------- VOICES --- */
  (function () {
    var host = $('#voices');
    if (!host || !C.voices) return;
    C.voices.forEach(function (v) {
      host.appendChild(el('figure', 'voice reveal',
        '<blockquote>' + esc(v.quote) + '</blockquote>' +
        '<cite>' + esc(v.name) + '<br><small>' + esc(v.role || '') + '</small></cite>'));
    });
  })();

  /* --------------------------------------------------------------- NEWS --- */
  (function () {
    var host = $('#news-list');
    if (!host || !C.announcements) return;

    var KIND = { event: 'Event', news: 'Club news', call: 'Volunteers needed' };
    var fmt = function (iso) {
      var d = new Date(iso + 'T00:00:00');
      return isNaN(d) ? iso : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    C.announcements
      .slice()
      .sort(function (a, b) { return a.date < b.date ? 1 : -1; })
      .forEach(function (a) {
        var cta = a.cta && a.cta.label
          ? '<a class="btn btn--ghost btn--sm" href="' + esc(a.cta.href || '#contact') + '">' + esc(a.cta.label) + '</a>'
          : '<span></span>';
        host.appendChild(el('article', 'item reveal',
          '<div class="item__date">' +
            '<span class="tag tag--cat">' + esc(KIND[a.type] || a.type) + '</span>' +
            '<time datetime="' + esc(a.date) + '">' + esc(fmt(a.date)) + '</time>' +
          '</div>' +
          '<div><h3>' + esc(a.title) + '</h3><p>' + esc(a.body) + '</p></div>' + cta));
      });
  })();

  /* ---------------------------------------------------------------- FAQ --- */
  (function () {
    var host = $('#faq-list');
    if (!host || !C.faq) return;

    C.faq.forEach(function (f, i) {
      var d = el('div', 'qa');
      var q = el('button', 'qa__q', esc(f.q));
      q.type = 'button';
      q.id = 'q' + i;
      q.setAttribute('aria-expanded', 'false');
      q.setAttribute('aria-controls', 'a' + i);
      var a = el('div', 'qa__a', '<p>' + esc(f.a) + '</p>');
      a.id = 'a' + i;
      a.setAttribute('role', 'region');
      a.setAttribute('aria-labelledby', 'q' + i);

      q.addEventListener('click', function () {
        var open = d.hasAttribute('open');
        if (open) {
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
  })();

  /* --------------------------------------------------------------- CLUB --- */
  (function () {
    var c = C.club; if (!c) return;
    var set = function (id, v) { var n = $(id); if (n) n.textContent = v; };

    set('#m-when', c.meetDay + ' · ' + c.meetTime);
    set('#m-where', c.venue);
    set('#m-addr', c.address);
    set('#m-lang', c.languages);
    set('#m-dist', c.district);
    set('#f-dist', c.district);
    set('#yr', new Date().getFullYear());

    var mail = $('#m-mail');
    if (mail) { mail.textContent = c.email; mail.href = 'mailto:' + c.email; }

    var map = $('#m-map');
    if (map) map.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(c.mapQuery || c.address);

    var soc = $('#social');
    if (soc && c.social) {
      var LABEL = { facebook: 'FB', instagram: 'IG', eclubhouse: 'CLUB', lci: 'LCI' };
      var TITLE = {
        facebook: 'Facebook', instagram: 'Instagram',
        eclubhouse: 'Our Lions e-Clubhouse page', lci: 'Lions Clubs International'
      };
      Object.keys(c.social).forEach(function (k) {
        if (!c.social[k]) return;
        var a = el('a', 'soc', LABEL[k] || k.slice(0, 2).toUpperCase());
        a.href = c.social[k];
        a.target = '_blank';
        a.rel = 'noopener';
        a.title = TITLE[k] || k;
        a.setAttribute('aria-label', TITLE[k] || k);
        soc.appendChild(a);
      });
    }
  })();

  /* --------------------------------------------------------------- FORM --- */
  (function () {
    var form = $('#contactForm'), note = $('#formNote');
    if (!form) return;
    var c = C.club || {};

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var name = (d.get('name') || '').trim();
      var mail = (d.get('email') || '').trim();

      note.className = 'form__note';
      if (!name || !mail || mail.indexOf('@') < 1) {
        note.textContent = 'Please add your name and a valid email address.';
        note.classList.add('form__note--err');
        return;
      }

      var body =
        'Name: ' + name + '\nEmail: ' + mail +
        '\nInterested in: ' + d.get('interest') +
        '\n\n' + (d.get('message') || '');

      /* Formspree route — set club.formEndpoint in data/content.js to enable */
      if (c.formEndpoint) {
        note.textContent = 'Sending…';
        fetch(c.formEndpoint, {
          method: 'POST', body: d, headers: { Accept: 'application/json' }
        }).then(function (r) {
          if (!r.ok) throw new Error('bad status');
          form.reset();
          note.textContent = 'Thank you — we have your message and will reply soon.';
          note.classList.add('form__note--ok');
        }).catch(function () {
          note.textContent = 'Something went wrong. Please email us directly at ' + c.email;
          note.classList.add('form__note--err');
        });
        return;
      }

      /* Default route — opens the visitor's mail app. Zero setup, zero cost. */
      window.location.href = 'mailto:' + (c.email || '') +
        '?subject=' + encodeURIComponent('Website enquiry — ' + d.get('interest')) +
        '&body=' + encodeURIComponent(body);
      note.textContent = 'Opening your email app… if nothing happens, write to ' + c.email;
      note.classList.add('form__note--ok');
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
        ? '<img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '">'
        : placeholder('Photo coming soon');
      cap.textContent = (g.caption || g.alt || '') +
        '  (' + (idx + 1) + ' of ' + galleryItems.length + ')';
    };
    var move = function (d) {
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

  /* ----------------------------------------------------- SCROLL PROGRESS --- */
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

  /* ------------------------------------------------- HERO MOUSE PARALLAX --- */
  (function () {
    var bg = $('.hero__bg');
    if (!bg || reduce || !window.matchMedia('(pointer:fine)').matches) return;
    var blobs = bg.querySelectorAll('i'), raf = null, mx = 0, my = 0;

    $('.hero').addEventListener('mousemove', function (e) {
      mx = (e.clientX / window.innerWidth - 0.5);
      my = (e.clientY / window.innerHeight - 0.5);
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null;
        [].forEach.call(blobs, function (b, i) {
          var d = (i + 1) * 26;
          b.style.translate = (mx * d) + 'px ' + (my * d) + 'px';
        });
      });
    });
  })();

  /* ------------------------------------------------ HERO WORD ENTRANCE ---- */
  (function () {
    var h = $('.hero__h');
    if (!h || reduce) return;
    /* wrap each top-level word in a span so it can rise into place */
    /* snapshot first — childNodes is live and we are replacing nodes inside it */
    [].slice.call(h.childNodes).forEach(function (node) {
      if (node.nodeType !== 3 || !node.textContent.trim()) return;
      var frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(function (w) {
        if (!w.trim()) { frag.appendChild(document.createTextNode(w)); return; }
        var s = el('span', 'word', esc(w));
        frag.appendChild(s);
      });
      node.replaceWith(frag);
    });
    var words = h.querySelectorAll('.word, .strike, .gold');
    [].forEach.call(words, function (w, i) {
      w.style.animationDelay = (120 + i * 85) + 'ms';
      w.classList.add('rise');
    });
  })();

  /* ------------------------------------------------------- SCROLL SPY ----- */
  /* Highlights the nav link for whatever section you are currently reading,
     so you always know where you are in a long page. */
  (function () {
    var links = [].slice.call(document.querySelectorAll('.nav__links a[href^="#"]:not(.btn)'));
    if (!links.length || !('IntersectionObserver' in window)) return;

    var map = {};
    links.forEach(function (a) {
      var s = document.querySelector(a.getAttribute('href'));
      if (s) map[s.id] = a;
    });

    var visible = {};
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      var current = null;
      Object.keys(map).forEach(function (id) {
        if (visible[id] && !current) current = id;
      });
      links.forEach(function (a) { a.classList.remove('is-here'); });
      if (current && map[current]) map[current].classList.add('is-here');
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    Object.keys(map).forEach(function (id) { spy.observe(document.getElementById(id)); });
  })();

  /* ------------------------------------------------------ BACK TO TOP ----- */
  (function () {
    var btn = el('button', 'totop', '<span aria-hidden="true">↑</span>');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      var brand = $('.brand'); if (brand) brand.focus({ preventScroll: true });
    });

    var t = false;
    window.addEventListener('scroll', function () {
      if (t) return;
      t = true;
      requestAnimationFrame(function () {
        t = false;
        btn.classList.toggle('show', window.scrollY > window.innerHeight * 1.2);
      });
    }, { passive: true });
  })();

  /* --------------------------------------------------- COPY THE EMAIL ----- */
  (function () {
    var link = $('#m-mail');
    if (!link || !navigator.clipboard) return;

    var btn = el('button', 'copy', 'Copy');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Copy email address');
    link.insertAdjacentElement('afterend', btn);

    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(link.textContent.trim()).then(function () {
        btn.textContent = 'Copied';
        btn.classList.add('copy--ok');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('copy--ok');
        }, 1800);
      }).catch(function () { btn.textContent = 'Press Ctrl+C'; });
    });
  })();

  /* ------------------------------------------------- ADD TO CALENDAR ------ */
  /* Builds a recurring .ics for the monthly meeting entirely in the browser.
     Someone who is interested at 1am can put it in their calendar instantly
     instead of trying to remember "last Friday, sometime". */
  (function () {
    var host = $('#m-map');
    var c = C.club;
    if (!host || !c) return;

    var pad = function (n) { return (n < 10 ? '0' : '') + n; };

    /* first occurrence: the next last-Friday-of-the-month at the meeting time */
    var lastFriday = function (y, m) {
      var d = new Date(y, m + 1, 0);                       /* last day of month */
      d.setDate(d.getDate() - ((d.getDay() + 2) % 7));     /* walk back to Friday */
      return d;
    };
    var hhmm = (c.meetTime || '19:30').split(':');
    var now = new Date();
    var first = lastFriday(now.getFullYear(), now.getMonth());
    first.setHours(+hhmm[0] || 19, +hhmm[1] || 30, 0, 0);
    if (first < now) first = lastFriday(now.getFullYear(), now.getMonth() + 1);
    first.setHours(+hhmm[0] || 19, +hhmm[1] || 30, 0, 0);

    var stamp = function (d) {
      return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) +
             'T' + pad(d.getHours()) + pad(d.getMinutes()) + '00';
    };
    var end = new Date(first.getTime() + 90 * 60000);
    /* commas and semicolons are field separators in iCalendar and must be escaped */
    var ics = function (s) { return String(s).replace(/([,;\\])/g, '\\$1'); };

    var btn = el('button', 'btn btn--ghost btn--sm', 'Add to calendar');
    btn.type = 'button';
    host.insertAdjacentElement('afterend', btn);

    btn.addEventListener('click', function () {
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
        'RRULE:FREQ=MONTHLY;BYDAY=-1FR',
        'SUMMARY:' + ics(c.name + ' — monthly meeting'),
        'LOCATION:' + ics(c.venue + ', ' + c.address),
        'DESCRIPTION:' + ics('Visitors are welcome. Meetings run in English. ' +
          'No obligation and nothing to prepare. Questions: ' + c.email),
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

  /* ------------------------------------------------ LIGHTBOX SWIPE -------- */
  (function () {
    var box = $('#lb');
    if (!box) return;
    var x0 = null, y0 = null;

    box.addEventListener('touchstart', function (e) {
      x0 = e.changedTouches[0].clientX;
      y0 = e.changedTouches[0].clientY;
    }, { passive: true });

    box.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      /* only treat it as a swipe if it is clearly horizontal */
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        $(dx < 0 ? '#lbNext' : '#lbPrev').click();
      }
      x0 = y0 = null;
    }, { passive: true });
  })();

  /* --------------------------------------------------------------- INIT --- */
  watch(document);
})();
