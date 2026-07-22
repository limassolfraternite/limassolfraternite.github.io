/* ============================================================================
   LIMASSOL FRATERNITÉ LIONS CLUB — CONTENT FILE
   ============================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD NEW CONTENT.

   Everything below is plain text between quotes. Change the words, add or
   remove blocks, save, push to GitHub. The website updates itself.

   RULES (important — the site breaks if you ignore these):
     1. Keep every quote mark  "  and every comma  ,  exactly where they are.
     2. Never use a plain apostrophe inside "quotes" — write it as \' or use ’
     3. To add an item, copy an existing { ... } block including its comma.
     4. Images go in  assets/img/projects/  or  assets/img/gallery/
     5. Leave  image: ""  empty and a coloured placeholder is drawn for you.

   Check your work at https://jsonlint.com if something disappears.
   ============================================================================ */

const CONTENT = {

  /* ==========================================================================
     1. IMPACT NUMBERS  —  the big counters near the top of the page
     ========================================================================== */
  /* These four are VERIFIABLE FACTS, not club performance claims — safe to publish.
     When you have audited figures of your own (people reached, meals served,
     volunteer hours), replace them here. Only publish numbers you can evidence. */
  stats: [
    /* plain: true = show as 1917, not 1,917 (use it for years) */
    { value: 1917, suffix: "",  label: "Serving since",        note: "Lions Clubs International", plain: true },
    { value: 200,  suffix: "+", label: "Countries served",     note: "The network behind our club" },
    { value: 5,    suffix: "",  label: "Nationalities",        note: "Belgian, Canadian, Cypriot, French, Italian" },
    { value: 3,    suffix: "",  label: "Working languages",    note: "English, Greek and French" }
  ],

  /* ==========================================================================
     2. SERVICE PROJECTS  —  the filterable grid
     --------------------------------------------------------------------------
     category  must be one of:  environment | health | youth | hunger | tech | community
     status    must be one of:  live | complete | upcoming
     ========================================================================== */
  /* --------------------------------------------------------------------------
     These three describe the club's genuine, publicly stated focus areas.
     They make NO numerical claims, because unevidenced figures must not be
     published. As each real project completes, add it here with its actual
     title, date and measured result — that is what builds the track record.
     -------------------------------------------------------------------------- */
  projects: [
    {
      title: "Supporting those in need",
      category: "community",
      status: "live",
      year: "Ongoing",
      summary: "Direct practical help for families and individuals in Limassol facing hardship, identified with local partners so that support reaches the people who are hardest to see.",
      impact: "Core focus area",
      image: "",
      alt: "Club members preparing support packages"
    },
    {
      title: "Promoting healthcare initiatives",
      category: "health",
      status: "live",
      year: "Ongoing",
      summary: "Awareness, screening and access work aligned with the Lions global causes — vision, diabetes and childhood cancer — brought down to the scale of one city.",
      impact: "Core focus area",
      image: "",
      alt: "A community health awareness session"
    },
    {
      title: "Environmental sustainability",
      category: "environment",
      status: "live",
      year: "Ongoing",
      summary: "Protecting the coastline and green spaces that make Limassol worth living in, and measuring what we remove so the work can be judged honestly rather than assumed.",
      impact: "Core focus area",
      image: "",
      alt: "Volunteers working on an environmental project"
    }
  ],

  /* ==========================================================================
     3. ANNOUNCEMENTS  —  the news timeline
     type must be one of:  event | news | call
     ========================================================================== */
  /* Only genuine, standing information here. Add real events as you schedule
     them — do not announce an event until it is actually happening. */
  announcements: [
    {
      date: "2026-07-22",
      type: "event",
      title: "Monthly club meeting — visitors welcome",
      body: "We meet on the last Friday of every month at 19:30 in the meeting room at Gloria Jeans Cafe, Arch. Makarios III Avenue 132. If you are curious about the club, come to one. There is no obligation and nothing to prepare.",
      cta: { label: "Tell us you’re coming", href: "#contact" }
    },
    {
      date: "2026-07-22",
      type: "news",
      title: "We are looking for members aged 18–30",
      body: "Lions International runs Leo clubs for ages 12 to 30, and our club is actively recruiting younger members in Limassol. If you want to lead community work rather than just attend it, get in touch.",
      cta: { label: "Get in touch", href: "#join" }
    }
  ],

  /* ==========================================================================
     4. PHOTO GALLERY
     Put your image files in  assets/img/gallery/  then reference them here.
     Example:  src: "assets/img/gallery/beach-cleanup-01.jpg"
     ========================================================================== */
  gallery: [
    { src: "", alt: "Beach cleanup volunteers at sunrise",        caption: "Coastline Reset — March 2026" },
    { src: "", alt: "Vision screening for a young patient",       caption: "Sight for Cyprus — November 2025" },
    { src: "", alt: "Students at the Code the Coast workshop",    caption: "Code the Coast — cohort one" },
    { src: "", alt: "Food parcels being loaded into a van",       caption: "Full Plates — weekly run" },
    { src: "", alt: "Club members at a monthly meeting",          caption: "Monthly meeting, Limassol" },
    { src: "", alt: "Handing blankets to an elderly resident",    caption: "Winter Warmth — January 2025" },
    { src: "", alt: "Group photo of club members and volunteers", caption: "The team, end of year" },
    { src: "", alt: "Tree planting in a Limassol park",           caption: "Green Limassol — planting day" }
  ],

  /* ==========================================================================
     5. VIDEOS
     Use the YouTube VIDEO ID only, not the whole link.
     https://www.youtube.com/watch?v=dQw4w9WgXcQ   ->   id: "dQw4w9WgXcQ"
     Leaving id empty shows a tidy "video coming soon" card.
     ========================================================================== */
  videos: [
    { id: "", title: "One year of service in ninety seconds",  duration: "1:30" },
    { id: "", title: "Why I joined — three members, three reasons", duration: "3:12" },
    { id: "", title: "Coastline Reset: behind the cleanup",    duration: "2:04" }
  ],

  /* ==========================================================================
     6. VOICES  —  short quotes from members
     ========================================================================== */
  /* --------------------------------------------------------------------------
     EMPTY ON PURPOSE. Invented testimonials were removed before publishing —
     putting words in a member's mouth is not something a website should do.

     To switch this section back on:
       1. Ask real members for a sentence about why they joined
       2. Get their permission to publish it
       3. Add them below, then un-comment the <section id="voices"> block
          in index.html (search for "VOICES" — the instructions are there)

     { quote: "Their own words.", name: "First name, age", role: "Joined 2025" },
     -------------------------------------------------------------------------- */
  voices: [],

  /* ==========================================================================
     7. FREQUENTLY ASKED QUESTIONS
     ========================================================================== */
  faq: [
    {
      q: "Is this not an organisation for older people?",
      a: "That is the reputation, and we are deliberately dismantling it. Lions International runs Leo clubs specifically for ages 12 to 30, and our own club is actively recruiting members in their twenties. Younger members are not junior members here — they lead projects."
    },
    {
      q: "How much time does it take?",
      a: "One meeting a month, on the last Friday, plus whatever you give to the project you choose. Some members give two hours a month, some give twenty. Both are genuinely fine."
    },
    {
      q: "Does it cost money to join?",
      a: "There are modest annual dues that cover international Lions membership and club administration. Ask us for the current figure — and if cost is the only thing standing between you and joining, tell us, because that is a solvable problem."
    },
    {
      q: "Do I need to speak Greek?",
      a: "No. Our meetings run in English. Members also speak Greek, French and Italian, so bring whichever language you have."
    },
    {
      q: "What if I have never volunteered before?",
      a: "Then you are exactly who we are looking for. Nobody arrives knowing how to run a service project. You learn it by doing one with people who have."
    },
    {
      q: "Can I bring my own idea instead of joining an existing project?",
      a: "Yes, and we would prefer it. Bring a problem you have actually seen in Limassol and a rough plan. We will help you turn it into something that ships."
    }
  ],

  /* ==========================================================================
     8. CLUB DETAILS  —  meeting info, contact, social links
     ========================================================================== */
  club: {
    name:      "Limassol Fraternité Lions Club",
    district:  "District 117-B — Northern Greece & Cyprus",
    meetDay:   "Last Friday of every month",
    meetTime:  "19:30",
    venue:     "Gloria Jeans Cafe — Meeting Room",
    address:   "Arch. Makarios III Avenue 132, Limassol, Cyprus",
    mapQuery:  "Gloria Jeans Cafe, Archbishop Makarios III Avenue 132, Limassol, Cyprus",
    email:     "limassolfraternite@gmail.com",
    languages: "English · Greek · French",

    /* Set any link to "" to hide that icon in the footer. */
    social: {
      facebook:  "https://www.facebook.com/FraterniteLionsClub/",
      instagram: "https://www.instagram.com/",
      eclubhouse:"https://e-clubhouse.org/sites/limassolfraternite/",
      lci:       "https://www.lionsclubs.org/en"
    },

    /* --------------------------------------------------------------------
       CONTACT FORM
       By default the form opens the visitor’s email app (works instantly,
       zero cost, zero setup).
       To receive submissions straight to your inbox instead:
         1. Sign up free at https://formspree.io
         2. Create a form, copy the endpoint it gives you
         3. Paste it below, e.g. "https://formspree.io/f/abcdwxyz"
       -------------------------------------------------------------------- */
    formEndpoint: ""
  }
};
