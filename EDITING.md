# How to update the website

Written for club members. No coding knowledge assumed.

There are **two** files you may need to touch:

| File | Holds |
|---|---|
| `data/content.js` | Projects, photos, videos, announcements, FAQ, club details |
| `data/i18n.js` | Menus, buttons and the fixed page wording, in all three languages |

---

## Languages — English, Greek, French

Visitors pick their language with the **EN / ΕΛ / FR** buttons in the top right.
The site also chooses automatically on a first visit:

1. A `?lang=` in the web address wins — e.g. `…/?lang=el` always opens in Greek.
   **Use this when sharing a link** with a Greek- or French-speaking audience.
2. Otherwise their previous choice is remembered on that device.
3. Otherwise their browser's own language is used.
4. Otherwise English.

### Writing text in three languages

Anywhere in `data/content.js` you can write text in one of two ways:

```js
title: "Lions Quest"                                        // same in all languages

title: { en: "Youth camps", el: "Κατασκηνώσεις", fr: "Camps" }   // one per language
```

**If a language is missing, English is shown instead** — so a half-translated
entry still works and never leaves a blank space on the page.

### Adding a new project in three languages

```js
{
  title: { en: "Beach cleanup", el: "Καθαρισμός παραλίας", fr: "Nettoyage de plage" },
  category: "environment",
  status: "complete",
  year: "2026",
  summary: {
    en: "What you did and who it helped.",
    el: "Τι κάνατε και ποιον βοήθησε.",
    fr: "Ce que vous avez fait et qui cela a aidé."
  },
  impact: "310 kg",
  image: "assets/img/projects/cleanup.jpg",
  alt: { en: "Volunteers on the beach", el: "Εθελοντές στην παραλία", fr: "Bénévoles sur la plage" }
},
```

Only have English for now? Just write `title: "Beach cleanup"` and translate later.

### Changing a menu item or button

Those live in `data/i18n.js`. Find the key and edit the three values:

```js
"nav.join": { en: "Join us", el: "Γίνε μέλος", fr: "Adhérer" },
```

> Keep menu labels **short**. Greek and French words are usually longer than the
> English, and an over-long label pushes the top bar out of shape.

### Adding a fourth language

In `data/i18n.js`, add the language to the list at the top:

```js
const LANGS = [
  { code: "en", label: "EN", name: "English" },
  { code: "el", label: "ΕΛ", name: "Ελληνικά" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "ru", label: "RU", name: "Русский" }      // new
];
```

Then add `ru:` to each entry. Anything you have not translated yet falls back to
English automatically, so you can add the language first and translate over time.

---

## Everything else

The rest of this guide covers `data/content.js`.

---

## The golden rules

1. Only change the words **between the quote marks** `"like this"`
2. Never delete a comma `,` a quote `"` a curly brace `{ }` or a square bracket `[ ]`
3. Never type a straight apostrophe `'` inside quotes — use the curly one `’` instead
   - Wrong: `"Cyprus's beaches"`  →  Right: `"Cyprus’s beaches"`
4. Save, then push to GitHub. The site updates in about a minute.

If the site ever goes blank after an edit, you broke rule 1, 2 or 3.
Paste the file into <https://jsonlint.com> to find the exact line.

---

## Editing on GitHub, without installing anything

1. Open your repository on github.com
2. Click the `data` folder, then `content.js`
3. Click the **pencil icon** (top right) to edit
4. Make your change
5. Scroll down, click **Commit changes**

Done. That is the entire workflow.

---

## Adding a new project

Find the `projects:` section. Copy an existing block and change the words:

```js
{
  title: "Name of the project",
  category: "environment",
  status: "live",
  year: "2026",
  summary: "Two or three sentences about what you did and who it helped.",
  impact: "310 kg removed",
  image: "assets/img/projects/my-photo.jpg",
  alt: "Description of the photo for blind visitors"
},
```

- `category` must be one of: `environment` `health` `youth` `hunger` `tech` `community`
- `status` must be one of: `live` `complete` `upcoming`
- Leave `image: ""` empty and a nice coloured placeholder appears instead
- **Do not forget the comma** after the closing `}`

---

## Adding a photo

1. Resize it first at <https://squoosh.app> — aim for 1600px wide, under 300 KB
2. Put the file in `assets/img/gallery/`
3. Add a line in the `gallery:` section:

```js
{ src: "assets/img/gallery/beach-cleanup.jpg",
  alt:     { en: "Volunteers on the beach", el: "Εθελοντές στην παραλία", fr: "Bénévoles sur la plage" },
  caption: { en: "Beach cleanup, Limassol — March 2026", el: "Καθαρισμός παραλίας, Λεμεσός — Μάρτιος 2026", fr: "Nettoyage de plage, Limassol — mars 2026" } },
```

`alt` describes the photo for blind visitors and search engines — always fill it in.

**Your photos are added to Google Images automatically.** Every time you push,
the site rebuilds `sitemap.xml` from your gallery, so each new photo is submitted
to Google Images on its own. You never edit the sitemap by hand — just add the
photo here. **Tip:** put the place and what's happening in the `caption` (e.g.
"blood donation, Limassol"), because that caption becomes the image's title in
Google Images and is what local searches match.

---

## Adding a video

Find the video on YouTube. From the address bar, copy **only the ID**:

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                ^^^^^^^^^^^  this part
```

Then in the `videos:` section:

```js
{ id: "dQw4w9WgXcQ", title: "One year of service", duration: "1:30" },
```

The video only loads when a visitor presses play, so it never slows the page down.

---

## Posting an announcement

In the `announcements:` section:

```js
{
  date: "2026-09-15",
  type: "event",
  title: "Headline of the announcement",
  body: "A short paragraph with the details people need.",
  cta: { label: "Sign up", href: "#contact" }
},
```

- `date` must be written **year-month-day**: `2026-09-15`
- `type` must be one of: `event` `news` `call`
- Newest items automatically appear first — you do not need to reorder anything

---

## Updating the impact numbers

In the `stats:` section. Type numbers **without** commas or spaces:

```js
{ value: 1450, suffix: "+", label: "People reached", note: "Across Limassol" },
```

Write `1450`, never `1,450`. The website adds the comma when it displays it.

---

## Changing meeting details or contact info

The `club:` section at the bottom holds the meeting day, time, venue, address,
email, languages and social media links. Change the text between the quotes.

To hide a social icon, set it to empty: `instagram: "",`

---

## Getting the contact form into your inbox

By default the form opens the visitor's email app. That works everywhere and costs
nothing, but some people abandon it. To receive messages directly instead:

1. Sign up free at <https://formspree.io> (50 messages/month on the free plan)
2. Create a form and copy the endpoint it gives you
3. In `data/content.js`, find `formEndpoint: ""` and paste it in:

```js
formEndpoint: "https://formspree.io/f/abcdwxyz"
```

Nothing else changes. Still no monthly charge.

---

## Things to be careful about

- **Only publish real numbers.** The figures shipped with the site are placeholders.
  Publishing invented statistics as club achievements would misrepresent the club.
- **Get photo permission**, especially for children. Most Lions districts require a
  signed consent form before a minor's photo goes online.
- **Do not commit personal data** — home addresses, phone numbers of members, or
  anything about the people you serve. A public repo is genuinely public.

---

## Showing the club's leadership

The **"Our leadership"** section is hidden until people are added. To show it:

1. Get each person's permission to appear on the website.
2. Put a head-and-shoulders photo in `assets/img/team/` (for example `maria-georgiou.webp`).
3. In `data/content.js`, find `leaders: []` and fill it in:

```js
leaders: [
  { name: "Full Name",
    role: { en: "President", el: "Πρόεδρος", fr: "Président(e)" },
    photo: "assets/img/team/full-name.webp" },
  { name: "Second Person",
    role: { en: "Secretary", el: "Γραμματέας", fr: "Secrétaire" },
    photo: "" }                    // no photo yet → initials are shown
],
```

The section appears automatically as soon as the list has at least one person.

## Photos: use each one once

A photo should appear in **one place only** on the site. The photo used on a
project card is not repeated in the gallery, and the members photo at the top
of the page is not repeated anywhere else.
