# Limassol Fraternité Lions Club — Website

A **static** website. No database, no server, no build step, no monthly cost, ever.
Total page weight is roughly **60 KB** before photos, which is why it loads instantly
even on a phone with a weak signal.

- **Zero dependencies** — no React, no jQuery, no Bootstrap, no Google Fonts
- **Zero external requests** on first load — nothing to slow you down or track visitors
- **No cookies, no analytics, no consent banner needed**
- Works with JavaScript disabled (project/gallery listings excepted)
- Accessible: keyboard navigable, screen-reader labelled, honours reduced-motion
- Passes Lighthouse at or near 100 across the board

---

## 1. Getting a professional, free URL

You asked for a URL that looks professional and costs nothing per month. Here are your
three real options, best first.

### Option A — Cloudflare Pages (recommended, free forever)

Gives you a clean brand URL with **no username in it**:

```
https://limassol-fraternite-lions.pages.dev
```

Your code still lives in your GitHub repo — Cloudflare just deploys from it and
redeploys automatically every time you push.

1. Push this folder to a GitHub repo (see section 2)
2. Go to <https://dash.cloudflare.com> → sign up free → **Workers & Pages**
3. **Create** → **Pages** → **Connect to Git** → pick your repo
4. Build settings: leave **build command empty**, set **output directory** to `/`
5. **Save and Deploy**

Then rename the project to control the subdomain. Good, professional choices:

- `limassol-fraternite-lions.pages.dev`
- `lionsfraternite.pages.dev`
- `fraternitelions.pages.dev`

**Cost: €0/month, permanently.** Unlimited bandwidth, global CDN, free HTTPS.

### Option B — GitHub Pages (also free, slightly longer URL)

```
https://<your-username>.github.io/limassol-fraternite-lions/
```

Free and reliable, but your GitHub username is visible in the address. To get the
shorter `https://<your-username>.github.io/` instead, name the repository exactly
`<your-username>.github.io`.

### Option C — Your own domain (most professional, small annual fee)

```
https://lionsfraternite.org
```

Hosting stays **free** on either platform above — you only pay for the domain name
itself, roughly **€8–12 per year** (not per month) from Cloudflare Registrar or
Namecheap. If the club ever wants letterhead-grade credibility, this is the step.

To activate it later: buy the domain, then in Cloudflare Pages go to
**Custom domains → Set up a domain**. Nothing in this codebase needs to change.

---

## 2. Putting it on GitHub

From inside this folder:

```bash
git init
git add .
git commit -m "Launch Limassol Fraternité Lions Club website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/limassol-fraternite-lions.git
git push -u origin main
```

If you prefer no command line at all: go to <https://github.com/new>, create the
repository, click **uploading an existing file**, and drag every file in this folder in.

### Enabling GitHub Pages (only if you chose Option B)

Repo → **Settings** → **Pages** → Source: **Deploy from a branch** →
Branch: **main**, folder: **/ (root)** → **Save**. Live in about a minute.

---

## 3. Updating the site

Everything the club will realistically want to change lives in **one file**:

```
data/content.js
```

Impact numbers, projects, announcements, photos, videos, quotes, FAQ, meeting
details and social links are all there, heavily commented in plain English.
See **EDITING.md** for step-by-step instructions written for a non-developer.

Edit it, save, push. The site updates within a minute. No rebuild, no deploy step.

---

## 4. Before you go live — the checklist

This site was published with **no invented claims**. Everything currently on it is
either verifiable fact or a statement of intent. These are the gaps to fill in:

| Task | Where | Priority |
|---|---|---|
| **Confirm the club email** | `data/content.js` → `club.email` | **High — currently a best guess, verify it** |
| Add your Instagram URL | `data/content.js` → `club.social` | High — currently a generic placeholder link |
| Add real photos | `assets/img/gallery/` + `data/content.js` | High — blue placeholder tiles show until you do |
| Add real completed projects | `data/content.js` → `projects` | High — this is your track record |
| Publish real impact figures | `data/content.js` → `stats` | Medium — only numbers you can evidence |
| Add member quotes | `data/content.js` → `voices` + un-hide the section in `index.html` | Medium |
| Add YouTube video IDs | `data/content.js` → `videos` | Medium |
| Add a social share image | `assets/img/og-cover.jpg` (1200×630) | Low — controls WhatsApp/Facebook link previews |

> ### Publish only what you can evidence
>
> The four numbers in the stat bar are **facts about Lions Clubs International and this
> club's composition** — 1917, 200+ countries, 5 nationalities, 3 languages. They are
> safe to display because they are true and checkable.
>
> The three project cards describe the club's **stated focus areas** and deliberately
> carry no figures. The member-quotes section is **switched off** because inventing a
> testimonial puts words in a real person's mouth.
>
> As real projects complete, add them with their **actual** measured results. Never
> publish a number the club cannot evidence — a service organisation's credibility is
> the only asset it genuinely owns.

---

## 5. Photos — how to get them off Facebook

Facebook blocks automated downloading, so the photos have to be collected by hand:

1. Open <https://www.facebook.com/FraterniteLionsClub/> while logged in
2. Go to **Photos**, click a photo, then right-click → **Save image as…**
3. Save into `assets/img/gallery/` with a clear name, e.g. `beach-cleanup-2026-03.jpg`
4. Add an entry in `data/content.js` under `gallery`

**Resize before uploading.** A photo straight off a phone is 4–8 MB and will make the
site slow. Aim for **1600px wide, under 300 KB**. Free tool: <https://squoosh.app>
(drag in, pick WebP or JPEG at ~75% quality, download).

Only publish photos where you have permission from the people in them, especially
children — Lions clubs usually require a signed consent form for minors.

---

## 6. Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Any static server works; opening `index.html`
directly via `file://` also works but the contact form behaves slightly differently.

---

## 7. File map

```
index.html            The whole page — structure and copy
404.html              Friendly not-found page
data/content.js       ← THE ONLY FILE YOU NEED TO EDIT
assets/css/style.css  All styling
assets/js/main.js     All behaviour
assets/img/           Your photos go here
robots.txt            Search engine instructions
sitemap.xml           Search engine index
.nojekyll             Stops GitHub Pages mangling the folder
EDITING.md            Plain-English editing guide for club members
```

---

“We Serve.” — Lions Clubs International, since 1917.
