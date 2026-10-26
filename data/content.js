/* ============================================================================
   LIMASSOL FRATERNITÉ LIONS CLUB — CONTENT FILE
   ============================================================================
   THIS IS THE MAIN FILE YOU EDIT TO ADD NEW CONTENT.
   (Menus, buttons and fixed page text live in data/i18n.js instead.)

   MULTILINGUAL TEXT
     Any piece of text can be written in one of two ways.

     a) The same in every language — just write it plainly:
          title: "Lions Quest"

     b) Different per language — write it as a block:
          title: { en: "English", el: "Ελληνικά", fr: "Français" }

     If a language is missing from a block, English is shown instead, so a
     partly-translated site still works properly.

   RULES (the site breaks if you ignore these):
     1. Keep every quote mark  "  and every comma  ,  exactly where they are.
     2. Never use a plain apostrophe inside "quotes" — use ’ instead.
     3. To add an item, copy an existing { ... } block including its comma.
     4. Images go in  assets/img/projects/  or  assets/img/gallery/
     5. Leave  image: ""  empty and a coloured placeholder is drawn for you.
     6. Use each photo ONCE on the whole site. A photo used on a project card
        should not also be listed in the gallery.

   HONESTY RULE
     Only publish numbers and achievements the club can evidence. Everything
     currently in this file is either a verifiable fact or a statement of
     intent — nothing is invented. Please keep it that way.
   ============================================================================ */

const CONTENT = {

  /* ==========================================================================
     1. THE BIG NUMBERS  —  the counters near the top of the page
     --------------------------------------------------------------------------
     These are the CLUB'S OWN figures, each one evidenced by the projects,
     photos and videos on this website. When you have audited figures
     (members, people screened, meals delivered), replace them here.
     ========================================================================== */
  stats: [
    /* plain: true = show as 1917, not 1,917 (use it for years) */
    { value: 6, suffix: "+",
      label: { en: "Service actions on record", el: "Καταγεγραμμένες δράσεις προσφοράς", fr: "Actions de service réalisées" },
      note:  { en: "Screenings, blood donation, tree planting, food parcels and more",
               el: "Προληπτικοί έλεγχοι, αιμοδοσία, δενδροφύτευση, δέματα τροφίμων και άλλα",
               fr: "Dépistages, don de sang, plantation d’arbres, colis alimentaires et plus" } },

    { value: 4, suffix: "",
      label: { en: "Communities reached", el: "Κοινότητες που επισκεφθήκαμε", fr: "Communautés desservies" },
      note:  { en: "Limassol, Foini, Limnati and Mallia",
               el: "Λεμεσός, Φοινί, Λιμνάτι και Μαλλιά",
               fr: "Limassol, Foini, Limnati et Mallia" } },

    { value: 5, suffix: "+",
      label: { en: "Nationalities", el: "Εθνικότητες", fr: "Nationalités" },
      note:  { en: "Belgian, Canadian, Cypriot, French, Italian — and more always welcome",
               el: "Βέλγοι, Καναδοί, Κύπριοι, Γάλλοι, Ιταλοί… και όλοι οι υπόλοιποι είναι ευπρόσδεκτοι",
               fr: "Belges, Canadiens, Chypriotes, Français, Italiens… et toutes les autres sont les bienvenues" } },

    { value: 3, suffix: "",
      label: { en: "Working languages", el: "Γλώσσες εργασίας", fr: "Langues de travail" },
      note:  { en: "English, Greek and French",
               el: "Αγγλικά, ελληνικά και γαλλικά",
               fr: "Anglais, grec et français" } }
  ],

  /* ==========================================================================
     2. SERVICE PROJECTS  —  the filterable grid
     --------------------------------------------------------------------------
     category  must be one of:  environment | health | youth | hunger | tech | community
     status    must be one of:  live | complete | upcoming

     Real, completed service projects with genuine dates, shown in chronological
     order (oldest first) so the page reads as a timeline of the club's work.
     `date` (YYYY-MM-DD) is used for ordering and for SEO structured data.
     `slug` is the project's own web address: /projects/<slug>/ — lowercase,
     words joined by hyphens, never changed once published.
     The home page shows the 3 most recent projects; all of them are listed
     on /projects/ and each one gets its own page automatically.
     ========================================================================== */
  projects: [
    {
      date: "2024-10-16",
      slug: "blood-donation-limassol-2024",
      title: { en: "Blood donation drive", el: "Αιμοδοσία", fr: "Collecte de sang" },
      category: "health",
      status: "complete",
      year: { en: "Oct 2024", el: "Οκτώβριος 2024", fr: "octobre 2024" },
      summary: {
        en: "Our club took part in the blood donation drive organised by the Lions Region of Limassol — much-needed service, and a fitting way to honour the Lions who came before us.",
        el: "Η λέσχη μας συμμετείχε στην αιμοδοσία που διοργανώθηκε από την Περιοχή Lions Λεμεσού. Μια ουσιαστική δράση προσφοράς προς την κοινότητα και ένας όμορφος τρόπος να τιμήσουμε τους Lions που προηγήθηκαν από εμάς.",
        fr: "Notre club a participé à la collecte de sang organisée par la Région Lions de Limassol. Une action essentielle au service de la communauté et une belle manière d’honorer les Lions qui nous ont précédés."
      },
      impact: { en: "Region-wide drive", el: "Δράση Περιοχής", fr: "Action régionale" },
      image: "assets/img/gallery/01-blood-2024-10-2.webp",
      alt: { en: "Lions members at the Limassol blood donation drive",
             el: "Μέλη των Lions κατά την αιμοδοσία στη Λεμεσό",
             fr: "Membres des Lions lors de la collecte de sang à Limassol" }
    },
    {
      date: "2025-05-04",
      slug: "health-screening-foini-2025",
      title: { en: "Health screening in Foini", el: "Ημέρα προληπτικού ελέγχου στο χωριό Φοινί", fr: "Journée de dépistage à Foini" },
      category: "health",
      status: "complete",
      year: { en: "May 2025", el: "Μάιος 2025", fr: "mai 2025" },
      summary: {
        en: "A community health screening day in the mountain village of Foini, with a strong turnout of residents coming forward for checks.",
        el: "Μια ημέρα προληπτικού ελέγχου που οργανώθηκε στο ορεινό χωριό Φοινί, με μεγάλη συμμετοχή κατοίκων που προσήλθαν για να υποβληθούν στις εξετάσεις.",
        fr: "Une journée de dépistage organisée dans le village de montagne de Foini, avec une forte participation des habitants venus bénéficier des examens."
      },
      impact: { en: "Strong village turnout", el: "Μεγάλη συμμετοχή του χωριού", fr: "Forte participation du village" },
      image: "assets/img/gallery/02-foini-2025-05-1.webp",
      alt: { en: "Community health screening in Foini village",
             el: "Ημέρα προληπτικού ελέγχου στο χωριό Φοινί",
             fr: "Journée de dépistage dans le village de Foini" }
    },
    {
      date: "2025-10-24",
      slug: "medicalert-diabetic-village-2025",
      title: { en: "MedicAlert & Diabetic Village", el: "MedicAlert & Διαβητικό Χωριό", fr: "MedicAlert & Village du Diabète" },
      category: "health",
      status: "complete",
      year: { en: "Oct 2025", el: "Οκτώβριος 2025", fr: "octobre 2025" },
      summary: {
        en: "Over two days, the club supported both the MedicAlert Foundation Cyprus and the Diabetic Village events — practical backing for two causes that keep vulnerable people safer.",
        el: "Για δύο ημέρες, η λέσχη μας στήριξε τις εκδηλώσεις του Ιδρύματος MedicAlert Κύπρου και του Διαβητικού Χωριού, προσφέροντας ουσιαστική βοήθεια σε δύο πρωτοβουλίες που βελτιώνουν την ασφάλεια και την ποιότητα ζωής ευάλωτων ανθρώπων.",
        fr: "Pendant deux journées, notre club a soutenu les manifestations de la Fondation MedicAlert Chypre et du Village du Diabète, apportant une aide concrète à deux initiatives qui améliorent la sécurité et la qualité de vie des personnes vulnérables."
      },
      impact: { en: "Two events supported", el: "Δύο εκδηλώσεις που υποστηρίχθηκαν", fr: "Deux événements soutenus" },
      image: "assets/img/gallery/03-medicalert-2025-10-4.webp",
      alt: { en: "Club members supporting the MedicAlert and Diabetic Village events",
             el: "Μέλη της λέσχης συμμετέχουν στις εκδηλώσεις MedicAlert και Χωριό Διαβήτη",
             fr: "Membres du club participant aux événements MedicAlert et Village du Diabète" }
    },
    {
      date: "2025-11-09",
      slug: "eye-diabetes-screening-limnati-2025",
      title: { en: "Eye & diabetes screenings, Limnati", el: "Έλεγχοι όρασης και διαβήτη στο χωριό Λιμνάτι", fr: "Dépistages de la vue et du diabète à Limnati" },
      category: "health",
      status: "complete",
      year: { en: "Nov 2025", el: "Νοέμβριος 2025", fr: "novembre 2025" },
      summary: {
        en: "With the Phoenicians Lions Club and the Cyprus Association for people with Diabetes, we ran eye and diabetes screenings in Limnati, using the Lions Ophthalmology Unit all day. The event brought the club two new members.",
        el: "Σε συνεργασία με το Phoenician Lions Club και τον Σύνδεσμο Ατόμων με Διαβήτη Κύπρου, οργανώσαμε μια ημέρα προληπτικού ελέγχου όρασης και διαβήτη στο Λιμνάτι, με την Οφθαλμολογική Μονάδα των Lions να δραστηριοποιείται καθ’ όλη τη διάρκεια της ημέρας. Η δράση αυτή επέτρεψε επίσης στη Λέσχη να υποδεχθεί δύο νέα μέλη.",
        fr: "En partenariat avec le Phoenician Lions Club et l’Association chypriote des personnes diabétiques, nous avons organisé une journée de dépistage de la vue et du diabète à Limnati, avec l’Unité ophtalmologique des Lions mobilisée toute la journée. Cette action a également permis au club d’accueillir deux nouveaux membres."
      },
      impact: { en: "2 new members joined", el: "2 νέα μέλη", fr: "2 nouveaux membres" },
      image: "assets/img/gallery/04-limnati-2025-11-4.webp",
      alt: { en: "Eye and diabetes screening day in Limnati village",
             el: "Ημέρα προληπτικού ελέγχου όρασης και διαβήτη στο Λιμνάτι",
             fr: "Journée de dépistage de la vue et du diabète à Limnati" }
    },
    {
      date: "2026-02-25",
      slug: "tree-planting-mallia-2026",
      title: { en: "Tree planting in Mallia", el: "Δενδροφύτευση στο χωριό Μαλλιά", fr: "Plantation d’arbres à Mallia" },
      category: "environment",
      status: "complete",
      year: { en: "Feb 2026", el: "Φεβρουάριος 2026", fr: "février 2026" },
      summary: {
        en: "In Mallia we didn’t just plant trees — we planted a promise of cleaner air and stronger roots for the next generation. Done alongside fellow Lions, with more planting to come.",
        el: "Στα Μαλλιά δεν φυτέψαμε μόνο δέντρα: φυτέψαμε μια υπόσχεση για ένα πιο υγιές περιβάλλον και ένα πιο βιώσιμο μέλλον για τις επόμενες γενιές. Μια δράση που πραγματοποιήθηκε μαζί με άλλους Lions, και αυτό είναι μόνο η αρχή.",
        fr: "À Mallia, nous n’avons pas seulement planté des arbres : nous avons planté une promesse d’un environnement plus sain et d’un avenir plus durable pour les générations futures. Une action menée avec d’autres Lions, et ce n’est qu’un début."
      },
      impact: { en: "A greener tomorrow", el: "Ένα πιο πράσινο μέλλον", fr: "Un avenir plus vert" },
      image: "assets/img/gallery/05-tree-2026-02-1.webp",
      alt: { en: "Lions members planting trees in Mallia",
             el: "Μέλη των Lions φυτεύουν δέντρα στο χωριό Μαλλιά",
             fr: "Membres des Lions plantant des arbres au village de Mallia" }
    }
  ],

  /* ==========================================================================
     3. ANNOUNCEMENTS  —  the news timeline
     type must be one of:  event | news | call
     Newest appears first automatically — no need to reorder.
     image is optional.
     Do not announce an event until it is actually happening.
     ========================================================================== */
  announcements: [
    {
      date: "2026-10-26",
      type: "event",
      title: { en: "Monthly club meeting — visitors welcome",
               el: "Μηνιαία συνάντηση της λέσχης — οι επισκέπτες είναι ευπρόσδεκτοι",
               fr: "Réunion mensuelle du club — visiteurs bienvenus" },
      body: {
        en: "We meet on the 4th Monday of every month at 19:30. Our meeting place changes from month to month, so we confirm the venue by email a few days beforehand. If you are curious about the club, come to one — there is no obligation and nothing to prepare.",
        el: "Συναντιόμαστε την 4η Δευτέρα κάθε μήνα στις 19:30. Ο χώρος της συνάντησης αλλάζει από μήνα σε μήνα, γι’ αυτό τον επιβεβαιώνουμε με e-mail λίγες ημέρες νωρίτερα. Αν σας ενδιαφέρει η λέσχη, ελάτε σε μία συνάντηση — χωρίς καμία υποχρέωση και χωρίς να χρειάζεται να ετοιμάσετε τίποτα.",
        fr: "Nous nous réunissons le 4e lundi de chaque mois à 19 h 30. Notre lieu de réunion change d’un mois à l’autre : nous le confirmons donc par e-mail quelques jours avant. Si le club vous intéresse, venez à une réunion — sans aucune obligation et sans rien à préparer."
      },
      cta: { label: { en: "Tell us you’re coming",
                      el: "Ενημερώστε μας ότι θα έρθετε",
                      fr: "Prévenez-nous de votre venue" }, href: "#contact" }
    },
    {
      date: "2026-10-25",
      type: "news",
      title: { en: "Lions Recycle For Sight — give your old glasses a second life",
               el: "Lions Recycle For Sight — δώστε δεύτερη ζωή στα παλιά σας γυαλιά",
               fr: "Lions Recycle For Sight — offrez une seconde vie à vos anciennes lunettes" },
      body: {
        en: "Lions Recycle For Sight is a Lions Clubs International programme: used prescription glasses and sunglasses are collected, sorted and passed on to people who cannot afford them. Have a pair you no longer wear? Send us a message and we will point you to a collection point.",
        el: "Το Lions Recycle For Sight είναι πρόγραμμα των Διεθνών Lions: μεταχειρισμένα γυαλιά οράσεως και ηλίου συλλέγονται, ταξινομούνται και δίνονται σε ανθρώπους που δεν μπορούν να τα αγοράσουν. Έχετε ένα ζευγάρι που δεν φοράτε πια; Στείλτε μας μήνυμα και θα σας υποδείξουμε σημείο συλλογής.",
        fr: "Lions Recycle For Sight est un programme du Lions Clubs International : les lunettes de vue et de soleil usagées sont collectées, triées et remises à des personnes qui ne peuvent pas se les offrir. Vous avez une paire que vous ne portez plus ? Écrivez-nous et nous vous indiquerons un point de collecte."
      },
      image: "assets/img/news/recycle-for-sight.webp",
      alt: { en: "Lions Recycle For Sight logo", el: "Λογότυπο Lions Recycle For Sight", fr: "Logo Lions Recycle For Sight" },
      cta: { label: { en: "Ask where to drop them off", el: "Ρωτήστε πού να τα αφήσετε", fr: "Savoir où les déposer" }, href: "#contact" }
    },
    {
      date: "2026-10-24",
      type: "news",
      title: { en: "New members welcome — there is no age limit",
               el: "Νέα μέλη ευπρόσδεκτα — χωρίς όριο ηλικίας",
               fr: "Nouveaux membres bienvenus — sans limite d’âge" },
      body: {
        en: "Anyone who wants to serve Limassol is welcome to join, whatever their age. For young people, Lions International also runs Leo clubs for ages 12 to 30. If you want to lead community work rather than just attend it, get in touch.",
        el: "Όποιος θέλει να προσφέρει στη Λεμεσό είναι ευπρόσδεκτος να γίνει μέλος, ανεξαρτήτως ηλικίας. Για τους νέους, οι Διεθνείς Lions λειτουργούν επίσης τις λέσχες Leo για ηλικίες 12 έως 30 ετών. Αν θέλετε να ηγηθείτε κοινοτικών δράσεων και όχι απλώς να τις παρακολουθείτε, επικοινωνήστε μαζί μας.",
        fr: "Toute personne qui souhaite servir Limassol est la bienvenue, quel que soit son âge. Pour les jeunes, le Lions Clubs International propose aussi les Leo Clubs, de 12 à 30 ans. Si vous voulez mener des actions plutôt que simplement y assister, contactez-nous."
      },
      cta: { label: { en: "Get in touch", el: "Επικοινωνήστε μαζί μας", fr: "Nous contacter" }, href: "#join" }
    }
  ],

  /* ==========================================================================
     4. PHOTO GALLERY
     Put image files in  assets/img/gallery/  then reference them here.
     Real club photos, in chronological order (oldest first). Every photo
     appears once only — the photos already used on project cards above are
     deliberately left out of this list.
     project: "<slug>" (optional) also shows the photo on that project's own
     page. The home page shows up to 12 photos; the rest go on /gallery/.
     ========================================================================== */
  gallery: [
    { src: "assets/img/gallery/01-blood-2024-10-4.webp", project: "blood-donation-limassol-2024",
      alt: { en: "Lions members at the Limassol blood donation drive", el: "Μέλη των Lions κατά την αιμοδοσία στη Λεμεσό", fr: "Membres des Lions lors de la collecte de sang à Limassol" },
      caption: { en: "Blood donation drive — October 2024", el: "Αιμοδοσία — Οκτώβριος 2024", fr: "Collecte de sang — octobre 2024" } },
    { src: "assets/img/gallery/02-foini-2025-05-2.webp", project: "health-screening-foini-2025",
      alt: { en: "Community health screening in Foini village", el: "Ημέρα προληπτικού ελέγχου στο χωριό Φοινί", fr: "Journée de dépistage dans le village de Foini" },
      caption: { en: "Health screening, Foini — May 2025", el: "Έλεγχος υγείας στο Φοινί — Μάιος 2025", fr: "Dépistage de santé à Foini — mai 2025" } },
    { src: "assets/img/gallery/02-foini-2025-05-3.webp", project: "health-screening-foini-2025",
      alt: { en: "Community health screening in Foini village", el: "Ημέρα προληπτικού ελέγχου στο χωριό Φοινί", fr: "Journée de dépistage dans le village de Foini" },
      caption: { en: "Health screening, Foini — May 2025", el: "Έλεγχος υγείας στο Φοινί — Μάιος 2025", fr: "Dépistage de santé à Foini — mai 2025" } },
    { src: "assets/img/gallery/03-medicalert-2025-10-1.webp", project: "medicalert-diabetic-village-2025",
      alt: { en: "Supporting the MedicAlert and Diabetic Village events", el: "Συμμετοχή στις εκδηλώσεις MedicAlert και Χωριό Διαβήτη", fr: "Participation aux événements MedicAlert et Village du Diabète" },
      caption: { en: "MedicAlert & Diabetic Village — October 2025", el: "MedicAlert & Χωριό Διαβήτη — Οκτώβριος 2025", fr: "MedicAlert & Village du Diabète — octobre 2025" } },
    { src: "assets/img/gallery/03-medicalert-2025-10-3.webp", project: "medicalert-diabetic-village-2025",
      alt: { en: "Supporting the MedicAlert and Diabetic Village events", el: "Συμμετοχή στις εκδηλώσεις MedicAlert και Χωριό Διαβήτη", fr: "Participation aux événements MedicAlert et Village du Diabète" },
      caption: { en: "MedicAlert & Diabetic Village — October 2025", el: "MedicAlert & Χωριό Διαβήτη — Οκτώβριος 2025", fr: "MedicAlert & Village du Diabète — octobre 2025" } },
    { src: "assets/img/gallery/04-limnati-2025-11-1.webp", project: "eye-diabetes-screening-limnati-2025",
      alt: { en: "Eye and diabetes screening day in Limnati", el: "Ημέρα προληπτικού ελέγχου όρασης και διαβήτη στο Λιμνάτι", fr: "Journée de dépistage de la vue et du diabète à Limnati" },
      caption: { en: "Eye & diabetes screenings, Limnati — November 2025", el: "Έλεγχοι όρασης και διαβήτη στο Λιμνάτι — Νοέμβριος 2025", fr: "Dépistages de la vue et du diabète à Limnati — novembre 2025" } },
    { src: "assets/img/gallery/04-limnati-2025-11-2.webp", project: "eye-diabetes-screening-limnati-2025",
      alt: { en: "Eye and diabetes screening day in Limnati", el: "Ημέρα προληπτικού ελέγχου όρασης και διαβήτη στο Λιμνάτι", fr: "Journée de dépistage de la vue et du diabète à Limnati" },
      caption: { en: "Eye & diabetes screenings, Limnati — November 2025", el: "Έλεγχοι όρασης και διαβήτη στο Λιμνάτι — Νοέμβριος 2025", fr: "Dépistages de la vue et du diabète à Limnati — novembre 2025" } },
    { src: "assets/img/gallery/04-limnati-2025-11-3.webp", project: "eye-diabetes-screening-limnati-2025",
      alt: { en: "Eye and diabetes screening day in Limnati", el: "Ημέρα προληπτικού ελέγχου όρασης και διαβήτη στο Λιμνάτι", fr: "Journée de dépistage de la vue et du diabète à Limnati" },
      caption: { en: "Eye & diabetes screenings, Limnati — November 2025", el: "Έλεγχοι όρασης και διαβήτη στο Λιμνάτι — Νοέμβριος 2025", fr: "Dépistages de la vue et du diabète à Limnati — novembre 2025" } },
    { src: "assets/img/gallery/04-limnati-2025-11-5.webp", project: "eye-diabetes-screening-limnati-2025",
      alt: { en: "Eye and diabetes screening day in Limnati", el: "Ημέρα προληπτικού ελέγχου όρασης και διαβήτη στο Λιμνάτι", fr: "Journée de dépistage de la vue et du diabète à Limnati" },
      caption: { en: "Eye & diabetes screenings, Limnati — November 2025", el: "Έλεγχοι όρασης και διαβήτη στο Λιμνάτι — Νοέμβριος 2025", fr: "Dépistages de la vue et du diabète à Limnati — novembre 2025" } },
    { src: "assets/img/gallery/05-tree-2026-02-2.webp", project: "tree-planting-mallia-2026",
      alt: { en: "Lions members planting trees in Mallia", el: "Μέλη των Lions φυτεύουν δέντρα στα Μαλλιά", fr: "Membres des Lions plantant des arbres à Mallia" },
      caption: { en: "Tree planting, Mallia — February 2026", el: "Δενδροφύτευση στα Μαλλιά — Φεβρουάριος 2026", fr: "Plantation d’arbres à Mallia — février 2026" } },
    { src: "assets/img/gallery/05-tree-2026-02-3.webp", project: "tree-planting-mallia-2026",
      alt: { en: "Lions members planting trees in Mallia", el: "Μέλη των Lions φυτεύουν δέντρα στα Μαλλιά", fr: "Membres des Lions plantant des arbres à Mallia" },
      caption: { en: "Tree planting, Mallia — February 2026", el: "Δενδροφύτευση στα Μαλλιά — Φεβρουάριος 2026", fr: "Plantation d’arbres à Mallia — février 2026" } },
    { src: "assets/img/gallery/06-schoolyard-2026.webp",
      alt: { en: "A school playground painted with colourful games", el: "Σχολική αυλή βαμμένη με πολύχρωμα παιχνίδια", fr: "Une cour d’école peinte de jeux colorés" },
      caption: { en: "A schoolyard painted with playground games", el: "Σχολική αυλή βαμμένη με παιχνίδια για τα παιδιά", fr: "Une cour d’école peinte de jeux pour les enfants" } }
  ],

  /* ==========================================================================
     5. VIDEOS
     Two ways to add a video:
       a) YouTube:  id: "dQw4w9WgXcQ"    (the code after watch?v= in the link)
       b) A file:   file: "assets/video/my-video.mp4"
     poster = the still image shown before play (put it in assets/img/posters/).
     Either way the video only downloads when someone presses play, so it never
     slows the initial page load. Leave both empty for a "coming soon" card.
     ========================================================================== */
  videos: [
    { file: "assets/video/year-of-service-2026.mp4",
      poster: "assets/img/posters/year-of-service-2026.webp",
      title: { en: "Our 2025–2026 year of service",
               el: "Η χρονιά προσφοράς μας 2025–2026",
               fr: "Notre année de service 2025–2026" },
      desc:  { en: "Our 2025–2026 Lions year in under five minutes: wildfires, support for local businesses, furnishings for people in need, the environment, mental health, the Special Olympics Unified Run, vision and diabetes, hunger, a charity cruise, and €2,500 for Episkopi Primary School.",
               el: "Η χρονιά μας 2025–2026 σε λιγότερο από πέντε λεπτά: πυρκαγιές, στήριξη τοπικών επιχειρήσεων, έπιπλα για όσους τα έχουν ανάγκη, περιβάλλον, ψυχική υγεία, ο Unified Run των Special Olympics, όραση και διαβήτης, πείνα, μια φιλανθρωπική κρουαζιέρα και 2.500 € για το Δημοτικό Σχολείο Επισκοπής.",
               fr: "Notre année Lions 2025–2026 en moins de cinq minutes : incendies, soutien aux commerces locaux, mobilier pour les personnes dans le besoin, environnement, santé mentale, l’Unified Run des Special Olympics, vue et diabète, faim, une croisière solidaire et 2 500 € pour l’école primaire d’Episkopi." },
      duration: "4:40" },
    { file: "assets/video/hunger-week-2026.mp4",
      poster: "assets/img/posters/hunger-week-2026.webp",
      title: { en: "Week of Service: Hunger — January 2026",
               el: "Εβδομάδα Προσφοράς: Πείνα — Ιανουάριος 2026",
               fr: "Semaine de service : la faim — janvier 2026" },
      desc:  { en: "Food parcels packed and delivered by our members during the Lions Week of Service against hunger.",
               el: "Δέματα τροφίμων που ετοίμασαν και μοίρασαν τα μέλη μας κατά την Εβδομάδα Προσφοράς των Lions κατά της πείνας.",
               fr: "Des colis alimentaires préparés et distribués par nos membres pendant la Semaine de service des Lions contre la faim." },
      duration: "0:59" }
  ],

  /* ==========================================================================
     6. VOICES  —  short quotes from members
     --------------------------------------------------------------------------
     EMPTY ON PURPOSE. Inventing a testimonial puts words in a real person's
     mouth, so this section stays switched off until you have genuine quotes.

     To switch it back on:
       1. Ask real members for a sentence about why they joined
       2. Get their permission to publish it
       3. Add them below, then un-comment the <section id="voices"> block
          in index.html (search for "VOICES" — instructions are there)

     { quote: "Their own words.", name: "First name, age", role: "Joined 2025" },
     ========================================================================== */
  voices: [],

  /* ==========================================================================
     6b. CLUB LEADERSHIP  —  President and board, with photos
     --------------------------------------------------------------------------
     EMPTY UNTIL REAL DETAILS ARE SUPPLIED. The "Our leadership" section stays
     hidden while this list is empty, and appears automatically once you add
     people. Only add someone who has agreed to be shown on the website.

     Put a square-ish head-and-shoulders photo in  assets/img/team/
     (leave photo: "" and their initials are shown instead).

     { name: "Full Name",
       role: { en: "President", el: "Πρόεδρος", fr: "Président(e)" },
       photo: "assets/img/team/full-name.webp" },
     ========================================================================== */
  leaders: [],

  /* ==========================================================================
     7. FREQUENTLY ASKED QUESTIONS
     ========================================================================== */
  faq: [
    {
      q: { en: "Is this not an organisation for older people?",
           el: "Δεν είναι αυτή η οργάνωση μόνο για μεγαλύτερες ηλικίες;",
           fr: "Cette organisation n’est-elle pas réservée aux personnes plus âgées ?" },
      a: {
        en: "It is a common impression, and one we are glad to change. There is no age limit to join our club, Lions International runs Leo clubs specifically for ages 12 to 30, and we are actively welcoming younger members. Younger members are not junior members here — they lead projects.",
        el: "Αυτή είναι ακριβώς η εικόνα που προσπαθούμε να αλλάξουμε. Δεν υπάρχει όριο ηλικίας για να γίνετε μέλος της λέσχης μας, οι Διεθνείς Lions προσφέρουν τις λέσχες Leo σε νέους ηλικίας 12 έως 30 ετών και η λέσχη μας καλωσορίζει ενεργά νεότερα μέλη. Εδώ οι νέοι δεν είναι «junior» μέλη: διευθύνουν έργα.",
        fr: "C’est une réputation que nous nous attachons justement à faire évoluer. Il n’y a pas de limite d’âge pour rejoindre notre club, le Lions Clubs International propose les Leo Clubs aux jeunes de 12 à 30 ans, et notre club accueille activement de jeunes membres. Ici, les jeunes ne sont pas des membres « juniors » : ils dirigent des projets."
      }
    },
    {
      q: { en: "How much time does it take?",
           el: "Πόσο χρόνο χρειάζεται να αφιερώσω στη λέσχη;",
           fr: "Combien de temps faut-il consacrer au club ?" },
      a: {
        en: "One meeting a month, on the 4th Monday, plus whatever you give to the project you choose. Some members give two hours a month, some give twenty. Both are genuinely fine.",
        el: "Μία συνάντηση τον μήνα, την 4η Δευτέρα, και στη συνέχεια όσο χρόνο εσείς επιλέξετε να αφιερώσετε στο έργο που σας ενδιαφέρει. Κάποια μέλη προσφέρουν δύο ώρες τον μήνα, άλλα είκοσι. Και τα δύο είναι απόλυτα ευπρόσδεκτα.",
        fr: "Une réunion par mois, le 4e lundi, puis le temps que vous choisissez de consacrer au projet qui vous tient à cœur. Certains membres donnent deux heures par mois, d’autres vingt. Les deux sont parfaitement appréciés."
      }
    },
    {
      q: { en: "Does it cost money to join?",
           el: "Υπάρχει κόστος για την εγγραφή;",
           fr: "L’adhésion est-elle payante ?" },
      a: {
        en: "There are modest annual dues that cover international Lions membership and club administration. Ask us for the current figure — and if cost is the only thing standing between you and joining, tell us, because that is a solvable problem.",
        el: "Μια μέτρια ετήσια συνδρομή καλύπτει τη συμμετοχή στο Lions Clubs International καθώς και τα λειτουργικά έξοδα της Λέσχης. Επικοινωνήστε μαζί μας για να μάθετε το τρέχον ποσό. Και αν το κόστος είναι το μόνο εμπόδιο, πείτε το μας: θα βρούμε λύση.",
        fr: "Une cotisation annuelle modérée couvre l’adhésion au Lions Clubs International ainsi que les frais de fonctionnement du club. Contactez-nous pour connaître le montant actuel. Et si le coût est votre seul obstacle, dites-le-nous : nous trouverons une solution."
      }
    },
    {
      q: { en: "Do I need to speak Greek?",
           el: "Πρέπει να μιλάω ελληνικά;",
           fr: "Dois-je parler grec ?" },
      a: {
        en: "No. Our meetings run in English. Members also speak Greek, French and Italian, so bring whichever language you have.",
        el: "Όχι. Οι συναντήσεις μας πραγματοποιούνται κυρίως στα αγγλικά. Τα μέλη μας μιλούν επίσης ελληνικά, γαλλικά και ιταλικά. Ελάτε με τη γλώσσα στην οποία αισθάνεστε πιο άνετα.",
        fr: "Non. Nos réunions se déroulent principalement en anglais. Nos membres parlent également grec, français et italien. Venez avec la langue dans laquelle vous êtes le plus à l’aise."
      }
    },
    {
      q: { en: "What if I have never volunteered before?",
           el: "Κι αν δεν έχω προσφέρει ποτέ εθελοντική εργασία;",
           fr: "Et si je n’ai jamais fait de bénévolat ?" },
      a: {
        en: "Then you are exactly who we are looking for. Nobody arrives knowing how to run a service project. You learn it by doing one with people who have.",
        el: "Τότε είστε ακριβώς το άτομο που αναζητούμε. Κανείς δεν εντάσσεται στη Λέσχη γνωρίζοντας ήδη πώς να διαχειρίζεται ένα έργο υπηρεσίας. Αυτό μαθαίνεται μέσα από τη δράση, δίπλα σε έμπειρους ανθρώπους.",
        fr: "Alors vous êtes exactement la personne que nous recherchons. Personne ne rejoint le club en sachant déjà gérer un projet de service. Cela s’apprend en agissant aux côtés de personnes expérimentées."
      }
    },
    {
      q: { en: "Can I bring my own idea instead of joining an existing project?",
           el: "Μπορώ να προτείνω το δικό μου έργο;",
           fr: "Puis-je proposer mon propre projet ?" },
      a: {
        en: "Yes, and we would prefer it. Bring a problem you have actually seen in Limassol and a rough plan. We will help you turn it into something that ships — and through Lions Clubs International Foundation grants there is a genuine route to funding it.",
        el: "Ναι, και σας ενθαρρύνουμε να το κάνετε. Παρουσιάστε μας ένα πρόβλημα που έχετε πραγματικά εντοπίσει στη Λεμεσό και μια πρώτη ιδέα λύσης. Θα σας βοηθήσουμε να την αναπτύξετε και, χάρη στις επιχορηγήσεις του Ιδρύματος Lions Clubs International (LCIF), υπάρχουν πραγματικές δυνατότητες χρηματοδότησης.",
        fr: "Oui, et nous vous y encourageons. Présentez-nous un problème que vous avez réellement identifié à Limassol ainsi qu’une première idée de solution. Nous vous aiderons à la développer et, grâce aux subventions de la Fondation du Lions Clubs International (LCIF), il existe de réelles possibilités de financement."
      }
    },
    {
      q: { en: "Is this a political or religious organisation?",
           el: "Πρόκειται για πολιτική ή θρησκευτική οργάνωση;",
           fr: "S’agit-il d’une organisation politique ou religieuse ?" },
      a: {
        en: "No. This principle is written into the Lions rules: the Lions International Purposes explicitly state that partisan politics and sectarian religion shall not be debated by club members. People of every background and belief work side by side here.",
        el: "Όχι. Αυτή η αρχή περιλαμβάνεται στους κανόνες των Διεθνών Lions. Οι κομματικές πολιτικές συζητήσεις και οι θρησκευτικές αντιπαραθέσεις δεν έχουν θέση στις λέσχες. Άνθρωποι κάθε καταγωγής και κάθε πεποίθησης εργάζονται μαζί με πνεύμα προσφοράς.",
        fr: "Non. Ce principe figure dans les règles du Lions Clubs International. Les discussions politiques partisanes et les débats religieux confessionnels n’ont pas leur place au sein des clubs. Des personnes de toutes origines et de toutes convictions travaillent ensemble dans un esprit de service."
      }
    },
    {
      q: { en: "What actually is LCIF?",
           el: "Τι είναι το LCIF;",
           fr: "Qu’est-ce que la LCIF ?" },
      a: {
        en: "Lions Clubs International Foundation — the charitable foundation of Lions International. It has awarded over US$1.3 billion in grants across 200 countries, funding everything from disaster relief to local community projects. It is the mechanism that lets a club our size attempt things far beyond our own budget.",
        el: "Το Ίδρυμα LCIF είναι το φιλανθρωπικό ίδρυμα των Διεθνών Lions. Έχει χορηγήσει περισσότερα από 1,3 δισεκατομμύρια δολάρια ΗΠΑ σε επιχορηγήσεις σε περισσότερες από 200 χώρες, χρηματοδοτώντας από επείγουσα βοήθεια έως τοπικά κοινοτικά έργα. Χάρη σε αυτό, μια λέσχη του μεγέθους μας μπορεί να υλοποιήσει φιλόδοξα έργα.",
        fr: "La Fondation du Lions Clubs International (LCIF) est la fondation caritative du Lions Clubs International. Elle a accordé plus de 1,3 milliard de dollars US de subventions dans plus de 200 pays, finançant aussi bien des secours d’urgence que des projets communautaires locaux. C’est grâce à elle qu’un club de notre taille peut concrétiser des projets ambitieux."
      }
    },
    {
      q: { en: "Do I get anything out of it, honestly?",
           el: "Τι κερδίζω εγώ, ειλικρινά;",
           fr: "Qu’est-ce que j’y gagne, honnêtement ?" },
      a: {
        en: "Yes, and we would rather say so than pretend otherwise. You get project management experience with real stakes, a network across 200 countries, access to international youth programmes and exchanges, and references from people who have watched you deliver something. Service is the point; the growth is real too.",
        el: "Πολλά, και προτιμούμε να το λέμε ξεκάθαρα. Θα αποκτήσετε πραγματική εμπειρία στη διαχείριση έργων, θα ενταχθείτε σε ένα δίκτυο που υπάρχει σε περισσότερες από 200 χώρες, θα έχετε πρόσβαση σε διεθνή προγράμματα νεολαίας και ανταλλαγών και θα αποκτήσετε συστάσεις από ανθρώπους που θα σας έχουν δει να ολοκληρώνετε επιτυχημένα πραγματικά έργα. Η προσφορά είναι ο λόγος ύπαρξής μας· η προσωπική σας ανάπτυξη είναι ένα πραγματικό όφελος.",
        fr: "Beaucoup de choses, et nous préférons le dire clairement. Vous développerez une véritable expérience en gestion de projets, rejoindrez un réseau présent dans plus de 200 pays, accéderez à des programmes internationaux de jeunesse et d’échanges, et obtiendrez des références de personnes qui vous auront vu réussir des projets concrets. Le service est notre raison d’être ; votre développement personnel en est un bénéfice réel."
      }
    }
  ],

  /* ==========================================================================
     8. CLUB DETAILS  —  meeting info, contact, social links
     ========================================================================== */
  club: {
    name:      "Limassol Fraternité Lions Club",
    district:  { en: "District 117-B — Northern Greece & Cyprus",
                 el: "District 117B — Βόρεια Ελλάδα & Κύπρος",
                 fr: "District 117B — Grèce du Nord & Chypre" },
    meetDay:   { en: "4th Monday of every month",
                 el: "4η Δευτέρα κάθε μήνα",
                 fr: "4e lundi de chaque mois" },
    meetTime:  "19:30",

    /* The meeting place is NOT fixed — it changes from month to month.
       If the club settles on one venue, write it in `venue` and fill in
       `address` + `mapQuery`: the Address row and "Open in Maps" button then
       appear automatically. Leave them "" while the venue keeps changing. */
    venue:     { en: "Changes from month to month, in Limassol",
                 el: "Αλλάζει από μήνα σε μήνα, στη Λεμεσό",
                 fr: "Change d’un mois à l’autre, à Limassol" },
    address:   "",
    mapQuery:  "",

    /* Confirmed by the club. */
    email:     "d117b.fraternite@gmail.com",
    languages: { en: "English · Greek · French",
                 el: "Αγγλικά · Ελληνικά · Γαλλικά",
                 fr: "Anglais · Grec · Français" },

    /* Set any link to "" to hide that icon in the footer. */
    social: {
      instagram: "https://www.instagram.com/limassol.fraternite",
      facebook:  "https://www.facebook.com/FraterniteLionsClub/",
      tiktok:    "https://www.tiktok.com/@limassolfraternitelccy",
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
