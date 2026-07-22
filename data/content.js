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

   HONESTY RULE
     Only publish numbers and achievements the club can evidence. Everything
     currently in this file is either a verifiable fact or a statement of
     intent — nothing is invented. Please keep it that way.
   ============================================================================ */

const CONTENT = {

  /* ==========================================================================
     1. THE BIG NUMBERS  —  the counters near the top of the page
     --------------------------------------------------------------------------
     These four are VERIFIABLE FACTS about Lions International and this club,
     not performance claims. When you have audited figures of your own
     (people reached, meals served, volunteer hours), replace them here.
     ========================================================================== */
  stats: [
    /* plain: true = show as 1917, not 1,917 (use it for years) */
    { value: 1917, suffix: "", plain: true,
      label: { en: "Serving since", el: "Υπηρετούμε από", fr: "Au service depuis" },
      note:  "Lions Clubs International" },

    { value: 200, suffix: "+",
      label: { en: "Countries served", el: "Χώρες", fr: "Pays servis" },
      note:  { en: "The network behind our club",
               el: "Το δίκτυο πίσω από το κλαμπ μας",
               fr: "Le réseau derrière notre club" } },

    { value: 5, suffix: "",
      label: { en: "Nationalities", el: "Εθνικότητες", fr: "Nationalités" },
      note:  { en: "Belgian, Canadian, Cypriot, French, Italian",
               el: "Βελγική, Καναδική, Κυπριακή, Γαλλική, Ιταλική",
               fr: "Belge, canadienne, chypriote, française, italienne" } },

    { value: 3, suffix: "",
      label: { en: "Working languages", el: "Γλώσσες εργασίας", fr: "Langues de travail" },
      note:  { en: "English, Greek and French",
               el: "Αγγλικά, Ελληνικά και Γαλλικά",
               fr: "Anglais, grec et français" } }
  ],

  /* ==========================================================================
     2. SERVICE PROJECTS  —  the filterable grid
     --------------------------------------------------------------------------
     category  must be one of:  environment | health | youth | hunger | tech | community
     status    must be one of:  live | complete | upcoming

     The three below describe the club's genuine, publicly stated focus areas
     and deliberately make NO numerical claims. As each real project finishes,
     add it here with its actual title, date and measured result — that is what
     builds a track record worth showing.
     ========================================================================== */
  projects: [
    {
      title: { en: "Supporting those in need",
               el: "Στήριξη όσων έχουν ανάγκη",
               fr: "Soutenir ceux qui en ont besoin" },
      category: "community",
      status: "live",
      year: { en: "Ongoing", el: "Σε εξέλιξη", fr: "En cours" },
      summary: {
        en: "Direct practical help for families and individuals in Limassol facing hardship, identified with local partners so that support reaches the people who are hardest to see.",
        el: "Άμεση πρακτική βοήθεια σε οικογένειες και άτομα στη Λεμεσό που αντιμετωπίζουν δυσκολίες, με εντοπισμό μέσω τοπικών συνεργατών ώστε η στήριξη να φτάνει σε όσους δύσκολα φαίνονται.",
        fr: "Une aide concrète aux familles et aux personnes en difficulté à Limassol, identifiées avec des partenaires locaux afin que le soutien atteigne ceux que l’on voit le moins."
      },
      impact: { en: "Core focus area", el: "Βασικός τομέας δράσης", fr: "Axe prioritaire" },
      image: "",
      alt: { en: "Club members preparing support packages",
             el: "Μέλη του κλαμπ ετοιμάζουν πακέτα βοήθειας",
             fr: "Des membres préparent des colis d’aide" }
    },
    {
      title: { en: "Promoting healthcare initiatives",
               el: "Προώθηση πρωτοβουλιών υγείας",
               fr: "Promouvoir des initiatives de santé" },
      category: "health",
      status: "live",
      year: { en: "Ongoing", el: "Σε εξέλιξη", fr: "En cours" },
      summary: {
        en: "Awareness, screening and access work aligned with the Lions global causes — vision, diabetes and childhood cancer — brought down to the scale of one city.",
        el: "Ενημέρωση, προληπτικοί έλεγχοι και πρόσβαση, ευθυγραμμισμένα με τους παγκόσμιους σκοπούς των Lions — όραση, διαβήτης και παιδικός καρκίνος — στην κλίμακα μιας πόλης.",
        fr: "Sensibilisation, dépistage et accès aux soins, alignés sur les causes mondiales du Lions — vue, diabète et cancer infantile — à l’échelle d’une seule ville."
      },
      impact: { en: "Core focus area", el: "Βασικός τομέας δράσης", fr: "Axe prioritaire" },
      image: "",
      alt: { en: "A community health awareness session",
             el: "Συνάντηση ενημέρωσης για την υγεία",
             fr: "Une séance de sensibilisation à la santé" }
    },
    {
      title: { en: "Environmental sustainability",
               el: "Περιβαλλοντική βιωσιμότητα",
               fr: "Durabilité environnementale" },
      category: "environment",
      status: "live",
      year: { en: "Ongoing", el: "Σε εξέλιξη", fr: "En cours" },
      summary: {
        en: "Protecting the coastline and green spaces that make Limassol worth living in, and measuring what we remove so the work can be judged honestly rather than assumed.",
        el: "Προστασία της ακτογραμμής και των χώρων πρασίνου που κάνουν τη Λεμεσό αξιοβίωτη, μετρώντας ό,τι απομακρύνουμε ώστε το έργο να κρίνεται με στοιχεία και όχι με εικασίες.",
        fr: "Protéger le littoral et les espaces verts qui rendent Limassol agréable à vivre, en mesurant ce que nous retirons afin que le travail soit jugé sur des faits."
      },
      impact: { en: "Core focus area", el: "Βασικός τομέας δράσης", fr: "Axe prioritaire" },
      image: "",
      alt: { en: "Volunteers working on an environmental project",
             el: "Εθελοντές σε περιβαλλοντικό έργο",
             fr: "Des bénévoles sur un projet environnemental" }
    }
  ],

  /* ==========================================================================
     3. ANNOUNCEMENTS  —  the news timeline
     type must be one of:  event | news | call
     Newest appears first automatically — no need to reorder.
     Do not announce an event until it is actually happening.
     ========================================================================== */
  announcements: [
    {
      date: "2026-07-22",
      type: "event",
      title: { en: "Monthly club meeting — visitors welcome",
               el: "Μηνιαία συνάντηση — οι επισκέπτες είναι ευπρόσδεκτοι",
               fr: "Réunion mensuelle — visiteurs bienvenus" },
      body: {
        en: "We meet on the last Friday of every month at 19:30 in the meeting room at Gloria Jeans Cafe, Arch. Makarios III Avenue 132. If you are curious about the club, come to one. There is no obligation and nothing to prepare.",
        el: "Συναντιόμαστε την τελευταία Παρασκευή κάθε μήνα στις 19:30 στην αίθουσα συναντήσεων του Gloria Jeans Cafe, Λεωφ. Αρχ. Μακαρίου Γ΄ 132. Αν σε ενδιαφέρει το κλαμπ, έλα σε μία. Δεν υπάρχει καμία υποχρέωση και τίποτα να ετοιμάσεις.",
        fr: "Nous nous réunissons le dernier vendredi de chaque mois à 19h30 dans la salle du Gloria Jeans Cafe, avenue Arch. Makarios III 132. Si le club vous intrigue, venez à une réunion. Aucune obligation, rien à préparer."
      },
      cta: { label: { en: "Tell us you’re coming",
                      el: "Πες μας ότι θα έρθεις",
                      fr: "Dites-nous que vous venez" }, href: "#contact" }
    },
    {
      date: "2026-07-22",
      type: "news",
      title: { en: "We are looking for members aged 18–30",
               el: "Αναζητούμε μέλη ηλικίας 18–30",
               fr: "Nous recherchons des membres de 18 à 30 ans" },
      body: {
        en: "Lions International runs Leo clubs for ages 12 to 30, and our club is actively recruiting younger members in Limassol. If you want to lead community work rather than just attend it, get in touch.",
        el: "Η Lions International λειτουργεί Leo clubs για ηλικίες 12 έως 30, και το κλαμπ μας αναζητά ενεργά νεότερα μέλη στη Λεμεσό. Αν θέλεις να ηγηθείς κοινοτικού έργου και όχι απλώς να παρακολουθείς, επικοινώνησε μαζί μας.",
        fr: "Le Lions International anime des clubs Leo pour les 12-30 ans, et notre club recrute activement des membres plus jeunes à Limassol. Si vous voulez mener une action communautaire plutôt que d’y assister, contactez-nous."
      },
      cta: { label: { en: "Get in touch", el: "Επικοινώνησε", fr: "Nous contacter" }, href: "#join" }
    }
  ],

  /* ==========================================================================
     4. PHOTO GALLERY
     Put image files in  assets/img/gallery/  then reference them here.
     Example:  src: "assets/img/gallery/beach-cleanup-01.jpg"

     These eight are empty placeholders. Replace the captions with what the
     photograph actually shows — never with a project that did not happen.
     ========================================================================== */
  gallery: [
    { src: "", alt: { en: "Club service activity", el: "Δράση προσφοράς του κλαμπ", fr: "Action de service du club" },
               caption: { en: "Add your photo caption here", el: "Πρόσθεσε εδώ τη λεζάντα σου", fr: "Ajoutez votre légende ici" } },
    { src: "", alt: { en: "Club service activity", el: "Δράση προσφοράς του κλαμπ", fr: "Action de service du club" },
               caption: { en: "Add your photo caption here", el: "Πρόσθεσε εδώ τη λεζάντα σου", fr: "Ajoutez votre légende ici" } },
    { src: "", alt: { en: "Club service activity", el: "Δράση προσφοράς του κλαμπ", fr: "Action de service du club" },
               caption: { en: "Add your photo caption here", el: "Πρόσθεσε εδώ τη λεζάντα σου", fr: "Ajoutez votre légende ici" } },
    { src: "", alt: { en: "Club service activity", el: "Δράση προσφοράς του κλαμπ", fr: "Action de service du club" },
               caption: { en: "Add your photo caption here", el: "Πρόσθεσε εδώ τη λεζάντα σου", fr: "Ajoutez votre légende ici" } },
    { src: "", alt: { en: "Club members at a meeting", el: "Μέλη του κλαμπ σε συνάντηση", fr: "Membres du club en réunion" },
               caption: { en: "Add your photo caption here", el: "Πρόσθεσε εδώ τη λεζάντα σου", fr: "Ajoutez votre légende ici" } },
    { src: "", alt: { en: "Club service activity", el: "Δράση προσφοράς του κλαμπ", fr: "Action de service du club" },
               caption: { en: "Add your photo caption here", el: "Πρόσθεσε εδώ τη λεζάντα σου", fr: "Ajoutez votre légende ici" } }
  ],

  /* ==========================================================================
     5. VIDEOS
     Use the YouTube VIDEO ID only, not the whole link:
       https://www.youtube.com/watch?v=dQw4w9WgXcQ   ->   id: "dQw4w9WgXcQ"
     Leaving id empty shows a tidy "video coming soon" card.
     Videos only load when someone presses play, so they never slow the page.
     ========================================================================== */
  videos: [
    { id: "", title: { en: "Add your first video here",
                       el: "Πρόσθεσε εδώ το πρώτο σου βίντεο",
                       fr: "Ajoutez votre première vidéo ici" }, duration: "" },
    { id: "", title: { en: "Add your first video here",
                       el: "Πρόσθεσε εδώ το πρώτο σου βίντεο",
                       fr: "Ajoutez votre première vidéo ici" }, duration: "" },
    { id: "", title: { en: "Add your first video here",
                       el: "Πρόσθεσε εδώ το πρώτο σου βίντεο",
                       fr: "Ajoutez votre première vidéo ici" }, duration: "" }
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
     7. FREQUENTLY ASKED QUESTIONS
     ========================================================================== */
  faq: [
    {
      q: { en: "Is this not an organisation for older people?",
           el: "Δεν είναι οργάνωση για μεγαλύτερους σε ηλικία;",
           fr: "N’est-ce pas une organisation pour les personnes âgées ?" },
      a: {
        en: "That is the reputation, and we are deliberately dismantling it. Lions International runs Leo clubs specifically for ages 12 to 30, and our own club is actively recruiting members in their twenties. Younger members are not junior members here — they lead projects.",
        el: "Αυτή είναι η φήμη, και τη διαλύουμε συνειδητά. Η Lions International λειτουργεί Leo clubs ειδικά για ηλικίες 12 έως 30, και το κλαμπ μας αναζητά ενεργά μέλη στα είκοσί τους. Τα νεότερα μέλη δεν είναι βοηθητικά εδώ — ηγούνται έργων.",
        fr: "C’est la réputation, et nous la démontons volontairement. Le Lions International anime des clubs Leo spécifiquement pour les 12-30 ans, et notre club recrute activement des membres d’une vingtaine d’années. Ici, les jeunes membres ne sont pas des membres juniors — ils dirigent des projets."
      }
    },
    {
      q: { en: "How much time does it take?",
           el: "Πόσο χρόνο απαιτεί;",
           fr: "Combien de temps cela prend-il ?" },
      a: {
        en: "One meeting a month, on the last Friday, plus whatever you give to the project you choose. Some members give two hours a month, some give twenty. Both are genuinely fine.",
        el: "Μία συνάντηση τον μήνα, την τελευταία Παρασκευή, συν όσο χρόνο δώσεις στο έργο που θα επιλέξεις. Κάποια μέλη δίνουν δύο ώρες τον μήνα, κάποια είκοσι. Και τα δύο είναι πραγματικά μια χαρά.",
        fr: "Une réunion par mois, le dernier vendredi, plus le temps que vous consacrez au projet choisi. Certains membres donnent deux heures par mois, d’autres vingt. Les deux conviennent parfaitement."
      }
    },
    {
      q: { en: "Does it cost money to join?",
           el: "Κοστίζει να γίνεις μέλος;",
           fr: "L’adhésion est-elle payante ?" },
      a: {
        en: "There are modest annual dues that cover international Lions membership and club administration. Ask us for the current figure — and if cost is the only thing standing between you and joining, tell us, because that is a solvable problem.",
        el: "Υπάρχει μια μέτρια ετήσια συνδρομή που καλύπτει τη διεθνή ιδιότητα μέλους Lions και τη διαχείριση του κλαμπ. Ρώτησέ μας για το τρέχον ποσό — και αν το κόστος είναι το μόνο εμπόδιο, πες μας, γιατί αυτό λύνεται.",
        fr: "Une cotisation annuelle modeste couvre l’adhésion internationale Lions et l’administration du club. Demandez-nous le montant actuel — et si le coût est le seul obstacle, dites-le-nous, car cela se règle."
      }
    },
    {
      q: { en: "Do I need to speak Greek?",
           el: "Χρειάζεται να μιλάω Ελληνικά;",
           fr: "Dois-je parler grec ?" },
      a: {
        en: "No. Our meetings run in English. Members also speak Greek, French and Italian, so bring whichever language you have.",
        el: "Όχι. Οι συναντήσεις μας γίνονται στα Αγγλικά. Τα μέλη μιλούν επίσης Ελληνικά, Γαλλικά και Ιταλικά, οπότε φέρε όποια γλώσσα έχεις.",
        fr: "Non. Nos réunions se tiennent en anglais. Les membres parlent aussi grec, français et italien : venez avec la langue que vous avez."
      }
    },
    {
      q: { en: "What if I have never volunteered before?",
           el: "Κι αν δεν έχω κάνει ποτέ εθελοντισμό;",
           fr: "Et si je n’ai jamais fait de bénévolat ?" },
      a: {
        en: "Then you are exactly who we are looking for. Nobody arrives knowing how to run a service project. You learn it by doing one with people who have.",
        el: "Τότε είσαι ακριβώς αυτός που ψάχνουμε. Κανείς δεν έρχεται ξέροντας πώς να τρέξει ένα έργο προσφοράς. Το μαθαίνεις κάνοντάς το με ανθρώπους που το έχουν κάνει.",
        fr: "Alors vous êtes exactement la personne que nous cherchons. Personne n’arrive en sachant mener un projet de service. On l’apprend en en faisant un avec ceux qui savent."
      }
    },
    {
      q: { en: "Can I bring my own idea instead of joining an existing project?",
           el: "Μπορώ να φέρω τη δική μου ιδέα αντί να μπω σε υπάρχον έργο;",
           fr: "Puis-je proposer ma propre idée plutôt que rejoindre un projet existant ?" },
      a: {
        en: "Yes, and we would prefer it. Bring a problem you have actually seen in Limassol and a rough plan. We will help you turn it into something that ships — and through Lions Clubs International Foundation grants there is a genuine route to funding it.",
        el: "Ναι, και θα το προτιμούσαμε. Φέρε ένα πρόβλημα που έχεις δει πραγματικά στη Λεμεσό και ένα πρόχειρο σχέδιο. Θα σε βοηθήσουμε να το κάνεις κάτι που υλοποιείται — και μέσω των επιχορηγήσεων του Ιδρύματος Lions Clubs International υπάρχει πραγματικός δρόμος χρηματοδότησης.",
        fr: "Oui, et nous le préférons. Apportez un problème que vous avez réellement observé à Limassol et un plan sommaire. Nous vous aiderons à en faire quelque chose de concret — et les subventions de la Fondation du Lions Clubs International offrent une vraie voie de financement."
      }
    },
    {
      q: { en: "Is this a political or religious organisation?",
           el: "Είναι πολιτική ή θρησκευτική οργάνωση;",
           fr: "Est-ce une organisation politique ou religieuse ?" },
      a: {
        en: "No, and that is written into the rules rather than left to good manners. The Lions International Purposes explicitly state that partisan politics and sectarian religion shall not be debated by club members. People of every background and belief work side by side here.",
        el: "Όχι, και αυτό είναι γραμμένο στους κανόνες, δεν αφήνεται στους καλούς τρόπους. Οι Σκοποί της Lions International ορίζουν ρητά ότι κομματική πολιτική και θρησκευτικός δογματισμός δεν συζητούνται από τα μέλη. Άνθρωποι κάθε καταγωγής και πεποίθησης δουλεύουν εδώ δίπλα δίπλα.",
        fr: "Non, et c’est inscrit dans les règles plutôt que laissé à la courtoisie. Les Buts du Lions International précisent explicitement que la politique partisane et la religion sectaire ne sont pas débattues par les membres. Des personnes de toutes origines et convictions travaillent ici côte à côte."
      }
    },
    {
      q: { en: "What actually is LCIF?",
           el: "Τι είναι στην πραγματικότητα το LCIF;",
           fr: "Qu’est-ce que la LCIF exactement ?" },
      a: {
        en: "Lions Clubs International Foundation — the charitable foundation of Lions International. It has awarded over US$1.3 billion in grants across 200 countries, funding everything from disaster relief to local community projects. It is the mechanism that lets a club our size attempt things far beyond our own budget.",
        el: "Lions Clubs International Foundation — το φιλανθρωπικό ίδρυμα της Lions International. Έχει χορηγήσει πάνω από 1,3 δισ. δολάρια ΗΠΑ σε 200 χώρες, χρηματοδοτώντας από την ανακούφιση καταστροφών έως τοπικά κοινοτικά έργα. Είναι ο μηχανισμός που επιτρέπει σε ένα κλαμπ του μεγέθους μας να επιχειρεί πράγματα πολύ πέρα από τον προϋπολογισμό του.",
        fr: "La Fondation du Lions Clubs International — la fondation caritative du Lions International. Elle a accordé plus de 1,3 milliard USD de subventions dans 200 pays, finançant aussi bien les secours d’urgence que des projets communautaires locaux. C’est le mécanisme qui permet à un club de notre taille d’entreprendre bien au-delà de son budget."
      }
    },
    {
      q: { en: "Do I get anything out of it, honestly?",
           el: "Ειλικρινά, κερδίζω κάτι από αυτό;",
           fr: "Honnêtement, qu’est-ce que j’y gagne ?" },
      a: {
        en: "Yes, and we would rather say so than pretend otherwise. You get project management experience with real stakes, a network across 200 countries, access to international youth programmes and exchanges, and references from people who have watched you deliver something. Service is the point; the growth is real too.",
        el: "Ναι, και προτιμούμε να το πούμε παρά να προσποιηθούμε το αντίθετο. Κερδίζεις εμπειρία διαχείρισης έργων με πραγματικό διακύβευμα, ένα δίκτυο σε 200 χώρες, πρόσβαση σε διεθνή προγράμματα νέων και ανταλλαγές, και συστάσεις από ανθρώπους που σε είδαν να παραδίδεις κάτι. Η προσφορά είναι το ζητούμενο· η ανάπτυξη είναι επίσης πραγματική.",
        fr: "Oui, et nous préférons le dire que prétendre le contraire. Vous acquérez une expérience de gestion de projet avec de vrais enjeux, un réseau dans 200 pays, l’accès à des programmes et échanges internationaux de jeunesse, et des références de personnes qui vous ont vu livrer. Le service est le but ; la progression est réelle aussi."
      }
    }
  ],

  /* ==========================================================================
     8. CLUB DETAILS  —  meeting info, contact, social links
     ========================================================================== */
  club: {
    name:      "Limassol Fraternité Lions Club",
    district:  { en: "District 117-B — Northern Greece & Cyprus",
                 el: "Περιφέρεια 117-B — Βόρεια Ελλάδα & Κύπρος",
                 fr: "District 117-B — Grèce du Nord et Chypre" },
    meetDay:   { en: "Last Friday of every month",
                 el: "Τελευταία Παρασκευή κάθε μήνα",
                 fr: "Dernier vendredi de chaque mois" },
    meetTime:  "19:30",
    venue:     { en: "Gloria Jeans Cafe — Meeting Room",
                 el: "Gloria Jeans Cafe — Αίθουσα Συναντήσεων",
                 fr: "Gloria Jeans Cafe — Salle de réunion" },
    address:   { en: "Arch. Makarios III Avenue 132, Limassol, Cyprus",
                 el: "Λεωφ. Αρχ. Μακαρίου Γ΄ 132, Λεμεσός, Κύπρος",
                 fr: "Avenue Arch. Makarios III 132, Limassol, Chypre" },
    mapQuery:  "Gloria Jeans Cafe, Archbishop Makarios III Avenue 132, Limassol, Cyprus",

    /* VERIFY THIS ADDRESS — it is a best guess and enquiries depend on it. */
    email:     "limassolfraternite@gmail.com",
    languages: { en: "English · Greek · French",
                 el: "Αγγλικά · Ελληνικά · Γαλλικά",
                 fr: "Anglais · Grec · Français" },

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
