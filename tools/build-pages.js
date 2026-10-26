/* =============================================================================
   build-pages.js  —  builds the website's extra pages from data/content.js
   =============================================================================
   Creates, from the same content file the home page uses:

     projects/index.html          every project, with category filters
     projects/<slug>/index.html   one page per project (own title, photos,
                                  Google listing and social-share preview)
     news/index.html              every announcement
     gallery/index.html           every photo

   The header and footer are copied from index.html, so menus stay identical
   on every page. Pages are written in English for search engines; the
   visitor's language (EN / ΕΛ / FR) is applied in the browser by main.js.

   YOU DO NOT RUN THIS BY HAND. The deploy workflow runs it on every push.
   (To preview locally: `node tools/build-pages.js`.)
   ============================================================================= */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://limassolfraternite.github.io/';

function load(file, name) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  // eslint-disable-next-line no-new-func
  return new Function(src + '\nreturn typeof ' + name + ' !== "undefined" ? ' + name + ' : null;')();
}
const CONTENT = load('data/content.js', 'CONTENT') || {};
const I18N = load('data/i18n.js', 'I18N') || {};
const CLUB = CONTENT.club || {};

const en = (v) => (v == null ? '' : typeof v === 'string' ? v : v.en || v.el || v.fr || '');
const t = (k) => en(I18N[k]) || k;
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const abs = (p) => (/^https?:/.test(p) ? p : SITE + String(p).replace(/^\//, ''));
/* small copy made by tools/build-thumbs.js, if it exists */
const sm = (p) => {
  const small = String(p).replace(/\.(webp|jpe?g|png)$/i, '-sm.webp');
  return /^assets\/img\/(gallery|posters)\//.test(p) && fs.existsSync(path.join(ROOT, small)) ? small : p;
};
const byDate = (a, b) => (!a.date || !b.date ? 0 : a.date < b.date ? -1 : a.date > b.date ? 1 : 0);

/* ---------------------------------------------------------- shared chrome -- */
const home = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const grab = (re, what) => {
  const m = home.match(re);
  if (!m) throw new Error('build-pages: could not find the ' + what + ' in index.html');
  return m[0];
};
const HEADER = grab(/<header class="nav"[\s\S]*?<\/header>/, 'header');
const FOOTER = grab(/<footer class="foot">[\s\S]*?<\/footer>/, 'footer');
const LIGHTBOX = grab(/<div class="lb" id="lb"[\s\S]*?<\/figure>[\s\S]*?<\/div>/, 'lightbox');

/* Point the home page's links and assets back to the site root from a page
   that sits `depth` folders down. "#work" → "../#work", "assets/x" → "../assets/x". */
const rebase = (html, base) => html
  .replace(/href="#top"/g, 'href="' + (base || './') + '"')
  .replace(/href="#/g, 'href="' + base + '#')
  .replace(/(href|src)="(?!https?:|\/|#|mailto:|data:)([^"]+)"/g, (m, a, p) =>
    p.startsWith(base) && base ? m : a + '="' + base + p + '"');

function page({ dir, base, title, desc, image, imageAlt, bodyClass, main, jsonld }) {
  const urlPath = dir.replace(/\\/g, '/') + '/';
  const canonical = SITE + urlPath;
  const img = abs(image || 'assets/img/og-cover.jpg');
  const html = `<!DOCTYPE html>
<html lang="en" data-base="${base}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#0B0F1C">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="en" href="${canonical}?lang=en">
<link rel="alternate" hreflang="el" href="${canonical}?lang=el">
<link rel="alternate" hreflang="fr" href="${canonical}?lang=fr">
<link rel="alternate" hreflang="x-default" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(CLUB.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(img)}">
<meta property="og:image:alt" content="${esc(imageAlt || title)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(img)}">
<link rel="icon" type="image/png" sizes="64x64" href="${base}assets/img/favicon.png?v=__V__">
<link rel="icon" type="image/png" sizes="32x32" href="${base}assets/img/favicon-32.png?v=__V__">
<link rel="apple-touch-icon" href="${base}assets/img/logo-180.png?v=__V__">
<link rel="stylesheet" href="${base}assets/css/style.css?v=__V__">
<noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>
${jsonld ? '<script type="application/ld+json">\n' + JSON.stringify(jsonld, null, 1) + '\n</script>\n' : ''}</head>

<body class="${bodyClass || ''}">
<!-- Generated by tools/build-pages.js from data/content.js — do not edit by hand -->
<a class="skip" href="#main" data-i18n="skip">Skip to content</a>

${rebase(HEADER, base)}

<main id="main">
${main}
</main>

${rebase(FOOTER, base)}

${LIGHTBOX}

<script src="${base}data/i18n.js?v=__V__"></script>
<script src="${base}data/content.js?v=__V__"></script>
<script src="${base}assets/js/main.js?v=__V__"></script>
</body>
</html>
`;
  const out = path.join(ROOT, dir, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  return urlPath;
}

const crumbs = (base, items) =>
  '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + (base || './') + '" data-i18n="crumb.home">Home</a>' +
  items.map((it) => '<span aria-hidden="true">›</span>' +
    (it.href ? '<a href="' + it.href + '" data-i18n="' + it.key + '">' + esc(t(it.key)) + '</a>'
             : '<span>' + esc(it.text) + '</span>')).join('') + '</nav>';

const breadcrumbLd = (items) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it[0], item: it[1] }))
});

const pages = [];
const projects = (CONTENT.projects || []).slice().sort(byDate);

/* -------------------------------------------------------- /projects/<slug>/ */
projects.forEach((p, i) => {
  if (!p.slug) return;
  const base = '../../';
  const photos = (CONTENT.gallery || []).filter((g) => g.project === p.slug);
  const prev = projects[i - 1], next = projects[i + 1];
  const pTitle = en(p.title);
  const main = `
<section class="phead" data-proj="${esc(p.slug)}">
  <div class="wrap">
    ${crumbs(base, [{ href: '../', key: 'proj.back' }, { text: pTitle }])}
    <div class="proj">
      <div>
        <div class="proj__tags">
          <span class="tag tag--${esc(p.status)}" data-pstatus>${esc(t('status.' + p.status))}</span>
          <span class="tag tag--cat" data-pcat>${esc(t('cat.' + p.category))}</span>
        </div>
        <h1 data-pf="title">${esc(pTitle)}</h1>
        <p class="proj__sum" data-pf="summary">${esc(en(p.summary))}</p>
        <dl class="proj__facts">
          <div><dt data-i18n="proj.when">When</dt><dd data-pf="year">${esc(en(p.year))}</dd></div>
          ${p.impact ? `<div><dt data-i18n="proj.result">Result</dt><dd data-pf="impact">${esc(en(p.impact))}</dd></div>` : ''}
        </dl>
      </div>
      ${p.image ? `<div class="proj__img"><img src="${base}${esc(p.image)}" alt="${esc(en(p.alt) || pTitle)}" data-pf-alt width="1200" height="900" fetchpriority="high" decoding="async"></div>` : ''}
    </div>
  </div>
</section>

<section class="sec" data-hide-empty${photos.length ? '' : ' hidden'}>
  <div class="wrap">
    <div class="subhead reveal"><h2 class="h3" data-i18n="proj.photos">Photos from the day</h2><span class="subhead__rule"></span></div>
    <div class="gallery" id="gallery-grid" data-project="${esc(p.slug)}">
${photos.map((g) => `      <figure class="gcell"><img src="${base}${esc(sm(g.src))}" alt="${esc(en(g.alt))}" loading="lazy" decoding="async"><figcaption>${esc(en(g.caption))}</figcaption></figure>`).join('\n')}
    </div>
  </div>
</section>

<section class="sec sec--tint">
  <div class="wrap">
    <div class="ctaband reveal">
      <div><h2 data-i18n="proj.ctaH">${esc(t('proj.ctaH'))}</h2><p data-i18n="proj.ctaP">${esc(t('proj.ctaP'))}</p></div>
      <a class="btn btn--gold" href="${base}#join" data-i18n="nav.join">${esc(t('nav.join'))}</a>
    </div>
    <nav class="pnav" aria-label="Projects">
      ${prev && prev.slug ? `<a id="projPrev" href="../${esc(prev.slug)}/"><span data-i18n="proj.prev">Previous project</span><b>← ${esc(en(prev.title))}</b></a>` : ''}
      ${next && next.slug ? `<a id="projNext" class="pnav__next" href="../${esc(next.slug)}/"><span data-i18n="proj.next">Next project</span><b>${esc(en(next.title))} →</b></a>` : ''}
    </nav>
  </div>
</section>`;
  const url = SITE + 'projects/' + p.slug + '/';
  pages.push({ path: page({
    dir: 'projects/' + p.slug, base,
    title: pTitle + ' (' + en(p.year) + ') — ' + CLUB.name,
    desc: en(p.summary),
    image: p.image, imageAlt: en(p.alt),
    main,
    jsonld: [
      {
        '@context': 'https://schema.org', '@type': 'Event', name: pTitle,
        startDate: p.date, url,
        eventStatus: 'https://schema.org/EventScheduled',
        description: en(p.summary),
        image: [p.image].concat(photos.map((g) => g.src)).filter(Boolean).map(abs),
        organizer: { '@type': 'NGO', name: CLUB.name, url: SITE }
      },
      breadcrumbLd([['Home', SITE], ['Projects', SITE + 'projects/'], [pTitle, url]])
    ]
  }), images: [p.image].concat(photos.map((g) => g.src)).filter(Boolean), title: pTitle });
});

/* ---------------------------------------------------------------- /projects/ */
pages.unshift({ path: page({
  dir: 'projects', base: '../',
  title: 'Service projects — ' + CLUB.name,
  desc: 'Every community service project by ' + CLUB.name + ' in Limassol and its villages, Cyprus: ' +
        projects.map((p) => en(p.title)).join(', ') + '.',
  main: `
<section class="phead">
  <div class="wrap">
    ${crumbs('../', [{ text: t('proj.back') }])}
    <p class="eyebrow" data-i18n="work.eyebrow">${esc(t('work.eyebrow'))}</p>
    <h1 class="h2" data-i18n="work.h2">${esc(t('work.h2'))}</h1>
    <p class="lead" data-i18n="work.lead">${esc(t('work.lead'))}</p>
  </div>
</section>
<section class="sec sec--tint">
  <div class="wrap">
    <div class="filters" id="filters" role="group" data-i18n-attr="aria-label:work.filterAria"></div>
    <div class="projects" id="projects">
${projects.map((p) => `      <article class="card"><div class="card__body"><h3><a href="${esc(p.slug)}/">${esc(en(p.title))}</a></h3><p>${esc(en(p.summary))}</p></div></article>`).join('\n')}
    </div>
    <p class="empty" id="projectsEmpty" data-i18n="work.empty" hidden>${esc(t('work.empty'))}</p>
  </div>
</section>`,
  jsonld: breadcrumbLd([['Home', SITE], ['Projects', SITE + 'projects/']])
}), images: [], title: 'Projects' });

/* -------------------------------------------------------------------- /news/ */
pages.push({ path: page({
  dir: 'news', base: '../',
  title: 'News & announcements — ' + CLUB.name,
  desc: 'Club meetings, events, calls for volunteers and news from ' + CLUB.name + ', Limassol, Cyprus.',
  main: `
<section class="phead">
  <div class="wrap">
    ${crumbs('../', [{ text: t('nav.news') }])}
    <p class="eyebrow" data-i18n="news.eyebrow">${esc(t('news.eyebrow'))}</p>
    <h1 class="h2" data-i18n="news.h2">${esc(t('news.h2'))}</h1>
    <p class="lead" data-i18n="news.lead">${esc(t('news.lead'))}</p>
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="news" id="news-list">
${(CONTENT.announcements || []).map((a) => `      <article class="item"><div><h3>${esc(en(a.title))}</h3><p>${esc(en(a.body))}</p></div></article>`).join('\n')}
    </div>
  </div>
</section>`,
  jsonld: breadcrumbLd([['Home', SITE], ['News', SITE + 'news/']])
}), images: [], title: 'News' });

/* ----------------------------------------------------------------- /gallery/ */
pages.push({ path: page({
  dir: 'gallery', base: '../',
  title: 'Photo gallery — ' + CLUB.name,
  desc: 'Photos of ' + CLUB.name + ' members serving the community in Limassol and its villages, Cyprus.',
  main: `
<section class="phead">
  <div class="wrap">
    ${crumbs('../', [{ text: t('nav.gallery') }])}
    <p class="eyebrow" data-i18n="gal.eyebrow">${esc(t('gal.eyebrow'))}</p>
    <h1 class="h2" data-i18n="gal.photosH">${esc(t('gal.photosH'))}</h1>
    <p class="lead" data-i18n="gal.lead">${esc(t('gal.lead'))}</p>
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="gallery" id="gallery-grid">
${(CONTENT.gallery || []).map((g) => `      <figure class="gcell"><img src="../${esc(sm(g.src))}" alt="${esc(en(g.alt))}" loading="lazy" decoding="async"><figcaption>${esc(en(g.caption))}</figcaption></figure>`).join('\n')}
    </div>
  </div>
</section>`,
  jsonld: breadcrumbLd([['Home', SITE], ['Gallery', SITE + 'gallery/']])
}), images: (CONTENT.gallery || []).map((g) => g.src), title: 'Gallery' });

/* Remove pages of projects that were deleted or renamed in content.js, so an
   old address does not linger with stale content. */
const keep = new Set(projects.map((p) => p.slug).filter(Boolean));
const pdir = path.join(ROOT, 'projects');
fs.readdirSync(pdir, { withFileTypes: true }).forEach((d) => {
  if (d.isDirectory() && !keep.has(d.name)) fs.rmSync(path.join(pdir, d.name), { recursive: true });
});

console.log('build-pages: wrote ' + pages.length + ' page(s): ' + pages.map((p) => '/' + p.path).join(' '));
