/* ============================================================================
   LIMASSOL FRATERNITÉ LIONS CLUB — TRANSLATIONS
   ============================================================================
   English (en) · Greek (el) · French (fr) — the three languages the club works in.

   HOW TO EDIT
     Each entry has the same three keys. Change the text between the quotes.
     Keep en, el and fr together so a missing translation is obvious at a glance.

     someKey: {
       en: "English text",
       el: "Ελληνικό κείμενο",
       fr: "Texte français"
     },

   RULES
     1. Never use a plain apostrophe ' inside quotes — use ’ instead
     2. Keep every comma, quote and brace exactly where it is
     3. If a translation is missing, the site falls back to English rather
        than showing an empty space — so a partial translation is safe

   ADDING A FOURTH LANGUAGE
     Add its code to LANGS below, then add that key to every entry.
   ============================================================================ */

const LANGS = [
  { code: "en", label: "EN", name: "English" },
  { code: "el", label: "ΕΛ", name: "Ελληνικά" },
  { code: "fr", label: "FR", name: "Français" }
];

const I18N = {

  /* ---------------------------------------------------------------- NAV --- */
  "nav.work":       { en: "Our work",       el: "Το έργο μας",     fr: "Nos actions" },
  "nav.beyond":     { en: "Beyond charity", el: "Πέρα από δωρεές",     fr: "Au-delà du don" },
  "nav.youth":      { en: "Youth",          el: "Νέοι",            fr: "Jeunesse" },
  "nav.gallery":    { en: "Gallery",        el: "Γκαλερί",         fr: "Galerie" },
  "nav.news":       { en: "News",           el: "Νέα",             fr: "Actualités" },
  "nav.faq":        { en: "FAQ",            el: "Ερωτήσεις",       fr: "FAQ" },
  "nav.join":       { en: "Join us",        el: "Γίνε μέλος",      fr: "Adhérer" },
  "nav.open":       { en: "Open menu",      el: "Άνοιγμα μενού",   fr: "Ouvrir le menu" },
  "nav.close":      { en: "Close menu",     el: "Κλείσιμο μενού",  fr: "Fermer le menu" },
  "nav.lang":       { en: "Choose language",el: "Επιλογή γλώσσας", fr: "Choisir la langue" },
  "skip":           { en: "Skip to content",el: "Μετάβαση στο περιεχόμενο", fr: "Aller au contenu" },

  /* --------------------------------------------------------------- HERO --- */
  "hero.eyebrow": {
    en: "Limassol · Cyprus · Since 1917 worldwide",
    el: "Λεμεσός · Κύπρος · Από το 1917 παγκοσμίως",
    fr: "Limassol · Chypre · Depuis 1917 dans le monde"
  },
  "hero.pre":    { en: "We don’t just", el: "Εμείς δεν",   fr: "Nous ne" },
  "hero.strike": { en: "give",          el: "δίνουμε",     fr: "donnons" },
  "hero.gold":   { en: "build.",        el: "χτίζουμε.",   fr: "bâtissons." },
  "hero.p": {
    en: "Limassol Fraternité is a Lions Club run by people who got tired of waiting for someone else to fix things. A growing mix of nationalities, one city, and a very short distance between having an idea and putting it in front of real people.",
    el: "Η Limassol Fraternité είναι ένα Lions Club που το τρέχουν άνθρωποι οι οποίοι κουράστηκαν να περιμένουν κάποιον άλλο να διορθώσει τα πράγματα. Ένα διαρκώς αυξανόμενο μείγμα εθνικοτήτων, μία πόλη, και πολύ μικρή απόσταση ανάμεσα στο να έχεις μια ιδέα και στο να τη βάλεις μπροστά σε πραγματικούς ανθρώπους.",
    fr: "Limassol Fraternité est un Lions Club animé par des personnes lassées d’attendre que quelqu’un d’autre règle les problèmes. Un mélange grandissant de nationalités, une ville, et très peu de distance entre avoir une idée et la mettre entre les mains de vraies personnes."
  },
  "hero.cta1":   { en: "Join the club",      el: "Έλα στο κλαμπ",       fr: "Rejoindre le club" },
  "hero.cta2":   { en: "See what we’ve done",el: "Δες τι έχουμε κάνει", fr: "Voir nos actions" },
  "hero.m1b":    { en: "18–30?", el: "18–30;", fr: "18–30 ans ?" },
  "hero.m1": {
    en: "You are exactly who we are looking for.",
    el: "Εσένα ακριβώς ψάχνουμε.",
    fr: "C’est exactement vous que nous cherchons."
  },
  "hero.m2b":    { en: "English spoken.", el: "Μιλάμε Αγγλικά.", fr: "Nous parlons anglais." },
  "hero.m2": {
    en: "Greek and French too.",
    el: "Επίσης Ελληνικά και Γαλλικά.",
    fr: "Et aussi grec et français."
  },
  "hero.m3b":    { en: "Last Friday", el: "Τελευταία Παρασκευή", fr: "Dernier vendredi" },
  "hero.m3": {
    en: "of every month, 19:30.",
    el: "κάθε μήνα, 19:30.",
    fr: "de chaque mois, 19h30."
  },

  /* ------------------------------------------------------------- TICKER --- */
  "cause.serve":     { en: "We Serve",         el: "Υπηρετούμε",            fr: "Nous Servons" },
  "cause.env":       { en: "Environment",      el: "Περιβάλλον",            fr: "Environnement" },
  "cause.hunger":    { en: "Hunger",           el: "Πείνα",                 fr: "Faim" },
  "cause.vision":    { en: "Vision",           el: "Όραση",                 fr: "Vue" },
  "cause.diabetes":  { en: "Diabetes",         el: "Διαβήτης",              fr: "Diabète" },
  "cause.cancer":    { en: "Childhood Cancer", el: "Παιδικός Καρκίνος",     fr: "Cancer Infantile" },
  "cause.disaster":  { en: "Disaster Relief",  el: "Ανακούφιση Καταστροφών",fr: "Secours d’Urgence" },
  "cause.humanit":   { en: "Humanitarian",     el: "Ανθρωπιστική Δράση",    fr: "Humanitaire" },
  "cause.youth":     { en: "Youth",            el: "Νεολαία",               fr: "Jeunesse" },
  "cause.mental":    { en: "Mental wellbeing", el: "Ψυχική υγεία",          fr: "Santé mentale" },

  /* -------------------------------------------------------------- STATS --- */
  "stats.aria": {
    en: "The club and the network behind it",
    el: "Το κλαμπ και το δίκτυο πίσω από αυτό",
    fr: "Le club et le réseau derrière lui"
  },
  "stats.foot": {
    en: "Our own project results will be published here as each one is completed and measured.",
    el: "Τα αποτελέσματα των δικών μας έργων θα δημοσιεύονται εδώ καθώς το καθένα ολοκληρώνεται και μετριέται.",
    fr: "Les résultats de nos propres projets seront publiés ici à mesure que chacun sera achevé et mesuré."
  },

  /* -------------------------------------------------------------- ABOUT --- */
  "about.eyebrow": { en: "Who we are", el: "Ποιοι είμαστε", fr: "Qui nous sommes" },
  "about.h2": {
    en: "A small club in Limassol, plugged into 1.4 million people.",
    el: "Ένα μικρό κλαμπ στη Λεμεσό, συνδεδεμένο με 1,4 εκατομμύρια ανθρώπους.",
    fr: "Un petit club à Limassol, relié à 1,4 million de personnes."
  },
  "about.p1": {
    en: "Limassol Fraternité is part of Lions Clubs International — the largest service organisation on earth, active in over 200 countries since 1917. That gives a club of our size something unusual: local hands, global backing.",
    el: "Η Limassol Fraternité ανήκει στη Lions Clubs International — τη μεγαλύτερη οργάνωση προσφοράς στον κόσμο, με δράση σε πάνω από 200 χώρες από το 1917. Αυτό δίνει σε ένα κλαμπ του μεγέθους μας κάτι ασυνήθιστο: τοπικά χέρια, παγκόσμια στήριξη.",
    fr: "Limassol Fraternité fait partie du Lions Clubs International — la plus grande organisation de service au monde, active dans plus de 200 pays depuis 1917. Cela donne à un club de notre taille quelque chose de rare : des mains locales, un appui mondial."
  },
  "about.p2": {
    en: "It started when a Chicago businessman named Melvin Jones told his business club that it should reach beyond its own interests and take responsibility for the community around it. That was 1917. The motto came later, chosen by a worldwide vote of members in 1954, and it is still only two words long: We Serve.",
    el: "Ξεκίνησε όταν ένας επιχειρηματίας από το Σικάγο, ο Melvin Jones, είπε στη λέσχη του ότι έπρεπε να δει πέρα από τα δικά της συμφέροντα και να αναλάβει ευθύνη για την κοινότητα γύρω της. Ήταν το 1917. Το σύνθημα ήρθε αργότερα, με παγκόσμια ψηφοφορία των μελών το 1954, και παραμένει μόλις δύο λέξεις: Υπηρετούμε.",
    fr: "Tout a commencé lorsqu’un homme d’affaires de Chicago, Melvin Jones, a dit à son club qu’il devait dépasser ses propres intérêts et prendre ses responsabilités envers la communauté. C’était en 1917. La devise est venue plus tard, choisie par un vote mondial des membres en 1954, et elle tient toujours en deux mots : Nous Servons."
  },
  "about.p3": {
    en: "Our members come from Belgian, Canadian, Cypriot, French and Italian backgrounds — and more join as the club grows. Meetings run in English, and drift into Greek and French when the argument gets interesting. We sit in District 117-B, covering Northern Greece and Cyprus.",
    el: "Τα μέλη μας έχουν βελγική, καναδική, κυπριακή, γαλλική και ιταλική καταγωγή — και όλο και περισσότεροι έρχονται καθώς το κλαμπ μεγαλώνει. Οι συναντήσεις γίνονται στα Αγγλικά και γλιστρούν στα Ελληνικά και τα Γαλλικά όταν η συζήτηση ανάβει. Ανήκουμε στην Περιφέρεια 117-B, που καλύπτει τη Βόρεια Ελλάδα και την Κύπρο.",
    fr: "Nos membres sont d’origine belge, canadienne, chypriote, française et italienne — et d’autres nous rejoignent à mesure que le club grandit. Les réunions se tiennent en anglais et glissent vers le grec et le français quand le débat s’anime. Nous relevons du District 117-B, qui couvre la Grèce du Nord et Chypre."
  },
  "about.p4": {
    en: "What we are not is a dinner club that writes cheques. Every project we run has a named owner, a number attached to it, and a date it has to be finished by.",
    el: "Αυτό που δεν είμαστε είναι μια λέσχη δείπνων που υπογράφει επιταγές. Κάθε έργο μας έχει έναν υπεύθυνο με όνομα, έναν αριθμό δίπλα του και μια ημερομηνία που πρέπει να ολοκληρωθεί.",
    fr: "Ce que nous ne sommes pas : un club de dîners qui signe des chèques. Chaque projet a un responsable nommé, un chiffre associé et une date à laquelle il doit être terminé."
  },
  "about.c1": { en: "Founded on “We Serve”", el: "Θεμελιωμένο στο «Υπηρετούμε»", fr: "Fondé sur « Nous Servons »" },
  "about.c2": { en: "5+ nationalities",  el: "5+ εθνικότητες",    fr: "5+ nationalités" },
  "about.c3": { en: "3 working languages",el: "3 γλώσσες εργασίας",fr: "3 langues de travail" },
  "about.c4": { en: "100% volunteer",    el: "100% εθελοντικό",   fr: "100% bénévole" },

  /* --------------------------------------------------------- INNOVATION --- */
  "inn.eyebrow": { en: "The difference", el: "Η διαφορά", fr: "La différence" },
  "inn.h2a": {
    en: "Charity hands out. Development builds capacity.",
    el: "Η φιλανθρωπία μοιράζει. Η ανάπτυξη χτίζει δυνατότητες.",
    fr: "La charité distribue. Le développement bâtit des capacités."
  },
  "inn.h2b": {
    en: "We are moving to the second thing.",
    el: "Εμείς πάμε στο δεύτερο.",
    fr: "Nous allons vers la seconde."
  },
  "inn.lead": {
    en: "Handing someone a meal solves tonight. Handing them a system solves the year. Every project we take on is judged against four questions.",
    el: "Το να δώσεις σε κάποιον ένα γεύμα λύνει το απόψε. Το να του δώσεις ένα σύστημα λύνει τη χρονιά. Κάθε έργο που αναλαμβάνουμε κρίνεται με βάση τέσσερα ερωτήματα.",
    fr: "Donner un repas règle la soirée. Donner un système règle l’année. Chaque projet que nous menons est jugé sur quatre questions."
  },
  "inn.1h": { en: "Does it measure?", el: "Μετριέται;", fr: "Est-ce mesurable ?" },
  "inn.1p": {
    en: "If we cannot count it, we cannot improve it. Kilograms of waste, screenings delivered, meals routed — every project produces a number we publish, including the disappointing ones.",
    el: "Αν δεν μπορούμε να το μετρήσουμε, δεν μπορούμε να το βελτιώσουμε. Κιλά απορριμμάτων, εξετάσεις που έγιναν, γεύματα που διανεμήθηκαν — κάθε έργο βγάζει έναν αριθμό που δημοσιεύουμε, ακόμη και τους απογοητευτικούς.",
    fr: "Si nous ne pouvons pas le compter, nous ne pouvons pas l’améliorer. Kilos de déchets, dépistages réalisés, repas distribués — chaque projet produit un chiffre que nous publions, y compris les décevants."
  },
  "inn.2h": { en: "Does it outlast us?", el: "Θα μας επιβιώσει;", fr: "Nous survivra-t-il ?" },
  "inn.2p": {
    en: "We prefer building a process a community can run without us over an event they need us to repeat. Success looks like being made unnecessary.",
    el: "Προτιμούμε να χτίζουμε μια διαδικασία που μια κοινότητα μπορεί να τρέξει χωρίς εμάς, παρά μια εκδήλωση που μας χρειάζεται για να επαναληφθεί. Επιτυχία σημαίνει να γίνουμε περιττοί.",
    fr: "Nous préférons bâtir un processus qu’une communauté peut mener sans nous plutôt qu’un événement qu’elle a besoin de nous voir répéter. Réussir, c’est devenir inutile."
  },
  "inn.3h": { en: "Does it use the tools of now?", el: "Χρησιμοποιεί τα εργαλεία του σήμερα;", fr: "Utilise-t-il les outils d’aujourd’hui ?" },
  "inn.3p": {
    en: "Shared logistics boards, open datasets, digital literacy programmes. Technology is not a gimmick bolted on the end — it is often the cheapest way to multiply a small team.",
    el: "Κοινοί πίνακες συντονισμού, ανοιχτά δεδομένα, προγράμματα ψηφιακού γραμματισμού. Η τεχνολογία δεν είναι διακοσμητικό στο τέλος — συχνά είναι ο φθηνότερος τρόπος να πολλαπλασιάσεις μια μικρή ομάδα.",
    fr: "Tableaux logistiques partagés, données ouvertes, programmes de littératie numérique. La technologie n’est pas un gadget ajouté à la fin — c’est souvent le moyen le moins cher de démultiplier une petite équipe."
  },
  "inn.4h": { en: "Does it grow a leader?", el: "Δημιουργεί έναν ηγέτη;", fr: "Fait-il grandir un leader ?" },
  "inn.4p": {
    en: "Every project is owned by a member, not a committee. People join to help and leave able to run things. That is the quiet output nobody puts on a poster.",
    el: "Κάθε έργο ανήκει σε ένα μέλος, όχι σε μια επιτροπή. Οι άνθρωποι έρχονται για να βοηθήσουν και φεύγουν ικανοί να διοικούν. Αυτό είναι το αθόρυβο αποτέλεσμα που κανείς δεν βάζει σε αφίσα.",
    fr: "Chaque projet appartient à un membre, pas à un comité. On arrive pour aider et on repart capable de diriger. C’est le résultat discret que personne n’affiche."
  },

  /* ------------------------------------------------------------- CAUSES --- */
  "causes.eyebrow": { en: "Global causes", el: "Παγκόσμιοι σκοποί", fr: "Causes mondiales" },
  "causes.h2": {
    en: "Eight fronts, worldwide. We pick the ones Limassol needs most.",
    el: "Οκτώ μέτωπα παγκοσμίως. Επιλέγουμε αυτά που χρειάζεται περισσότερο η Λεμεσός.",
    fr: "Huit fronts, dans le monde entier. Nous choisissons ceux dont Limassol a le plus besoin."
  },
  "causes.env.d":      { en: "Cleanups, planting, waste data",  el: "Καθαρισμοί, δενδροφυτεύσεις, δεδομένα απορριμμάτων", fr: "Nettoyages, plantations, données déchets" },
  "causes.hunger.d":   { en: "Food recovery and distribution",  el: "Διάσωση και διανομή τροφίμων",     fr: "Récupération et distribution alimentaire" },
  "causes.vision.d":   { en: "Screening and eyewear access",    el: "Εξετάσεις και πρόσβαση σε γυαλιά", fr: "Dépistage et accès aux lunettes" },
  "causes.diabetes.d": { en: "Awareness and early detection",   el: "Ενημέρωση και έγκαιρη διάγνωση",   fr: "Sensibilisation et dépistage précoce" },
  "causes.cancer.d":   { en: "Family and treatment support",    el: "Στήριξη οικογένειας και θεραπείας",fr: "Soutien aux familles et aux soins" },
  "causes.mental.d":   { en: "Reducing stigma locally",         el: "Μείωση του στίγματος τοπικά",      fr: "Réduire la stigmatisation localement" },
  "causes.disaster.d": { en: "Rapid response and rebuild",      el: "Άμεση ανταπόκριση και ανοικοδόμηση",fr: "Réaction rapide et reconstruction" },
  "causes.humanit.d":  { en: "Wherever the need is sharpest",   el: "Όπου η ανάγκη είναι πιο έντονη",   fr: "Là où le besoin est le plus vif" },

  /* ------------------------------------------------------------- PROJECTS - */
  "work.eyebrow": { en: "Track record", el: "Το ιστορικό μας", fr: "Notre bilan" },
  "work.h2": {
    en: "What we have actually done.",
    el: "Τι έχουμε πραγματικά κάνει.",
    fr: "Ce que nous avons réellement fait."
  },
  "work.lead": {
    en: "Live, completed and upcoming. No rounding up, no vanity metrics.",
    el: "Σε εξέλιξη, ολοκληρωμένα και επερχόμενα. Χωρίς στρογγυλοποιήσεις, χωρίς μετρήσεις για εντυπωσιασμό.",
    fr: "En cours, terminés et à venir. Sans arrondis ni chiffres de vitrine."
  },
  "work.filterAll": { en: "All projects", el: "Όλα τα έργα", fr: "Tous les projets" },
  "work.empty":     { en: "No projects in this category yet.", el: "Δεν υπάρχουν ακόμη έργα σε αυτή την κατηγορία.", fr: "Aucun projet dans cette catégorie pour l’instant." },
  "work.filterAria":{ en: "Filter projects by category", el: "Φιλτράρισμα έργων ανά κατηγορία", fr: "Filtrer les projets par catégorie" },

  "cat.environment": { en: "Environment", el: "Περιβάλλον", fr: "Environnement" },
  "cat.health":      { en: "Health",      el: "Υγεία",      fr: "Santé" },
  "cat.youth":       { en: "Youth",       el: "Νέοι",       fr: "Jeunesse" },
  "cat.hunger":      { en: "Hunger",      el: "Πείνα",      fr: "Faim" },
  "cat.tech":        { en: "Technology",  el: "Τεχνολογία", fr: "Technologie" },
  "cat.community":   { en: "Community",   el: "Κοινότητα",  fr: "Communauté" },

  "status.live":     { en: "Live now",   el: "Σε εξέλιξη",   fr: "En cours" },
  "status.complete": { en: "Completed",  el: "Ολοκληρώθηκε", fr: "Terminé" },
  "status.upcoming": { en: "Upcoming",   el: "Επερχόμενο",   fr: "À venir" },

  /* ------------------------------------------------------------ GALLERY --- */
  "gal.eyebrow": { en: "In the field", el: "Στο πεδίο", fr: "Sur le terrain" },
  "gal.h2":      { en: "Photos & video.", el: "Φωτογραφίες & βίντεο.", fr: "Photos et vidéos." },
  "gal.lead": {
    en: "Service is not an abstraction. This is what it looks like on a Saturday morning.",
    el: "Η προσφορά δεν είναι αφηρημένη έννοια. Έτσι μοιάζει ένα πρωινό Σαββάτου.",
    fr: "Le service n’est pas une abstraction. Voilà à quoi cela ressemble un samedi matin."
  },
  "gal.watch":   { en: "Watch", el: "Δες", fr: "Regarder" },
  "gal.soonPhoto":{ en: "Photo coming soon", el: "Φωτογραφία σύντομα", fr: "Photo à venir" },
  "gal.soonVideo":{ en: "Video coming soon", el: "Βίντεο σύντομα",     fr: "Vidéo à venir" },
  "gal.view":    { en: "View", el: "Προβολή", fr: "Voir" },
  "gal.play":    { en: "Play", el: "Αναπαραγωγή", fr: "Lire" },
  "gal.of":      { en: "of",   el: "από", fr: "sur" },
  "gal.viewer":  { en: "Photo viewer", el: "Προβολή φωτογραφιών", fr: "Visionneuse de photos" },
  "gal.prev":    { en: "Previous", el: "Προηγούμενο", fr: "Précédent" },
  "gal.next":    { en: "Next", el: "Επόμενο", fr: "Suivant" },
  "gal.closeLb": { en: "Close", el: "Κλείσιμο", fr: "Fermer" },

  /* --------------------------------------------------------------- NEWS --- */
  "news.eyebrow": { en: "Announcements", el: "Ανακοινώσεις", fr: "Annonces" },
  "news.h2":      { en: "What’s next.", el: "Τι ακολουθεί.", fr: "Et maintenant." },
  "news.lead": {
    en: "Events, calls for volunteers and club news. Nothing here requires membership to attend.",
    el: "Εκδηλώσεις, καλέσματα για εθελοντές και νέα του κλαμπ. Τίποτε εδώ δεν απαιτεί να είσαι μέλος.",
    fr: "Événements, appels aux bénévoles et actualités du club. Rien ici n’exige d’être membre."
  },
  "kind.event": { en: "Event",             el: "Εκδήλωση",         fr: "Événement" },
  "kind.news":  { en: "Club news",         el: "Νέα του κλαμπ",    fr: "Actualité du club" },
  "kind.call":  { en: "Volunteers needed", el: "Ζητούνται εθελοντές", fr: "Bénévoles recherchés" },

  /* --------------------------------------------------------------- JOIN --- */
  "join.eyebrow": { en: "Get involved", el: "Πάρε μέρος", fr: "Participer" },
  "join.h2": {
    en: "Three ways in. None of them require you to be impressive yet.",
    el: "Τρεις τρόποι να μπεις. Κανένας δεν απαιτεί να είσαι ήδη εντυπωσιακός.",
    fr: "Trois façons d’entrer. Aucune n’exige d’être déjà impressionnant."
  },
  "join.1h":   { en: "Come once", el: "Έλα μία φορά", fr: "Venez une fois" },
  "join.1age": { en: "Any age", el: "Κάθε ηλικία", fr: "Tout âge" },
  "join.1p": {
    en: "Turn up to one project or one open night. Zero commitment, zero cost, no one will follow you home. Most members started exactly here.",
    el: "Έλα σε ένα έργο ή σε μία ανοιχτή βραδιά. Καμία δέσμευση, κανένα κόστος, κανείς δεν θα σε κυνηγήσει. Τα περισσότερα μέλη ξεκίνησαν ακριβώς από εδώ.",
    fr: "Venez à un projet ou à une soirée portes ouvertes. Aucun engagement, aucun coût, personne ne vous relancera. La plupart des membres ont commencé exactement ainsi."
  },
  "join.1cta": { en: "Tell us you’re coming", el: "Πες μας ότι θα έρθεις", fr: "Dites-nous que vous venez" },
  "join.2tag": { en: "Most popular", el: "Πιο δημοφιλές", fr: "Le plus choisi" },
  "join.2h":   { en: "Leo programme", el: "Πρόγραμμα Leo", fr: "Programme Leo" },
  "join.2age": { en: "Ages 12–30", el: "Ηλικίες 12–30", fr: "12 à 30 ans" },
  "join.2p": {
    en: "The youth arm of Lions International. Alpha Leos are 12–18, Omega Leos 18–30. You get a project, a budget, a mentor and the authority to actually decide things.",
    el: "Το τμήμα νέων της Lions International. Οι Alpha Leos είναι 12–18, οι Omega Leos 18–30. Παίρνεις ένα έργο, έναν προϋπολογισμό, έναν μέντορα και την εξουσία να αποφασίζεις πραγματικά.",
    fr: "La branche jeunesse du Lions International. Les Alpha Leos ont 12 à 18 ans, les Omega Leos 18 à 30. Vous recevez un projet, un budget, un mentor et le pouvoir de décider réellement."
  },
  "join.2cta": { en: "Apply to Leo", el: "Κάνε αίτηση για Leo", fr: "Postuler chez Leo" },
  "join.3h":   { en: "Full membership", el: "Πλήρες μέλος", fr: "Adhésion complète" },
  "join.3age": { en: "18+", el: "18+", fr: "18 ans et plus" },
  "join.3p": {
    en: "Become a Lion. Vote on what the club funds, lead your own projects, and plug into a network across 200+ countries. Modest annual dues apply.",
    el: "Γίνε Lion. Ψήφισε τι χρηματοδοτεί το κλαμπ, ηγήσου των δικών σου έργων και συνδέσου με ένα δίκτυο σε 200+ χώρες. Ισχύει μια μέτρια ετήσια συνδρομή.",
    fr: "Devenez Lion. Votez sur ce que le club finance, menez vos propres projets et intégrez un réseau de plus de 200 pays. Une cotisation annuelle modeste s’applique."
  },
  "join.3cta": { en: "Ask about joining", el: "Ρώτησε για εγγραφή", fr: "Se renseigner" },
  "join.s1": { en: "Send a message — one line is enough", el: "Στείλε μήνυμα — μία γραμμή αρκεί", fr: "Envoyez un message — une ligne suffit" },
  "join.s2": { en: "We reply within a few days and invite you to the next meeting", el: "Απαντάμε μέσα σε λίγες μέρες και σε καλούμε στην επόμενη συνάντηση", fr: "Nous répondons sous quelques jours et vous invitons à la prochaine réunion" },
  "join.s3": { en: "You come, you look around, you decide nothing", el: "Έρχεσαι, κοιτάς γύρω σου, δεν αποφασίζεις τίποτα", fr: "Vous venez, vous observez, vous ne décidez rien" },
  "join.s4": { en: "If it fits, you pick a project and start", el: "Αν σου ταιριάζει, διαλέγεις ένα έργο και ξεκινάς", fr: "Si cela vous convient, vous choisissez un projet et vous commencez" },

  /* -------------------------------------------------------------- YOUTH --- */
  "youth.eyebrow": { en: "What you plug into", el: "Σε τι συνδέεσαι", fr: "Ce à quoi vous accédez" },
  "youth.h2": {
    en: "Joining a club this small opens doors this big.",
    el: "Το να μπεις σε ένα τόσο μικρό κλαμπ ανοίγει τόσο μεγάλες πόρτες.",
    fr: "Rejoindre un club aussi petit ouvre des portes aussi grandes."
  },
  "youth.lead": {
    en: "These are real Lions International programmes, open to members of any club — including ours. Ask us about any of them.",
    el: "Αυτά είναι πραγματικά προγράμματα της Lions International, ανοιχτά σε μέλη κάθε κλαμπ — και του δικού μας. Ρώτησέ μας για οποιοδήποτε.",
    fr: "Ce sont de véritables programmes du Lions International, ouverts aux membres de tout club — y compris le nôtre. Demandez-nous."
  },
  "youth.1age": { en: "Ages 12–30", el: "Ηλικίες 12–30", fr: "12 à 30 ans" },
  "youth.1h":   { en: "Leo clubs", el: "Leo clubs", fr: "Clubs Leo" },
  "youth.1p": {
    en: "The youth arm of Lions International. Alpha Leos are 12–18, Omega Leos 18–30. Leos run their own service projects and build leadership experience that transfers straight onto a CV.",
    el: "Το τμήμα νέων της Lions International. Οι Alpha Leos είναι 12–18, οι Omega Leos 18–30. Οι Leos τρέχουν τα δικά τους έργα και αποκτούν ηγετική εμπειρία που περνά κατευθείαν στο βιογραφικό.",
    fr: "La branche jeunesse du Lions International. Alpha Leos de 12 à 18 ans, Omega Leos de 18 à 30. Les Leos mènent leurs propres projets et acquièrent une expérience de direction qui se transpose directement sur un CV."
  },
  "youth.2age": { en: "Ages 15–22", el: "Ηλικίες 15–22", fr: "15 à 22 ans" },
  "youth.2h":   { en: "Youth Camps & Exchange", el: "Κατασκηνώσεις & Ανταλλαγές Νέων", fr: "Camps et échanges de jeunes" },
  "youth.2p": {
    en: "Live abroad with a host Lions family, join their service projects and meet young people from dozens of countries. No academic requirement and no tuition fee — this is cultural exchange, not a study programme.",
    el: "Ζήσε στο εξωτερικό με μια φιλοξενούσα οικογένεια Lions, πάρε μέρος στα έργα της και γνώρισε νέους από δεκάδες χώρες. Χωρίς ακαδημαϊκές απαιτήσεις και χωρίς δίδακτρα — είναι πολιτιστική ανταλλαγή, όχι πρόγραμμα σπουδών.",
    fr: "Vivez à l’étranger dans une famille Lions d’accueil, participez à ses projets et rencontrez des jeunes de dizaines de pays. Aucune condition académique ni frais de scolarité — c’est un échange culturel, pas un cursus."
  },
  "youth.3age": { en: "Ages 11–13", el: "Ηλικίες 11–13", fr: "11 à 13 ans" },
  "youth.3h":   { en: "Peace Poster Contest", el: "Διαγωνισμός Αφίσας Ειρήνης", fr: "Concours d’affiches pour la paix" },
  "youth.3p": {
    en: "Run for nearly four decades. Clubs sponsor it in local schools and youth groups; entrants express what peace means to them through art. The international grand prize is US$5,000, with 23 merit awards of US$500.",
    el: "Διεξάγεται εδώ και σχεδόν τέσσερις δεκαετίες. Τα κλαμπ τον στηρίζουν σε τοπικά σχολεία και ομάδες νέων· οι συμμετέχοντες εκφράζουν μέσα από την τέχνη τι σημαίνει για αυτούς η ειρήνη. Το διεθνές μεγάλο βραβείο είναι 5.000 δολάρια ΗΠΑ, με 23 βραβεία των 500 δολαρίων.",
    fr: "Organisé depuis près de quarante ans. Les clubs le parrainent dans les écoles et groupes de jeunes ; les participants expriment par l’art ce que la paix signifie pour eux. Le grand prix international est de 5 000 USD, avec 23 prix de mérite de 500 USD."
  },
  "youth.4age": { en: "Schools", el: "Σχολεία", fr: "Écoles" },
  "youth.4h":   { en: "Lions Quest", el: "Lions Quest", fr: "Lions Quest" },
  "youth.4p": {
    en: "A social-emotional learning programme delivered in schools worldwide and funded through LCIF grants — covering resilience, decision-making and drug-prevention education for young people.",
    el: "Ένα πρόγραμμα κοινωνικο-συναισθηματικής μάθησης που εφαρμόζεται σε σχολεία παγκοσμίως και χρηματοδοτείται από επιχορηγήσεις LCIF — καλύπτει την ανθεκτικότητα, τη λήψη αποφάσεων και την πρόληψη των ναρκωτικών για νέους.",
    fr: "Un programme d’apprentissage socio-émotionnel dispensé dans des écoles du monde entier et financé par des subventions LCIF — résilience, prise de décision et prévention des addictions chez les jeunes."
  },
  "youth.5age": { en: "Funding", el: "Χρηματοδότηση", fr: "Financement" },
  "youth.5h":   { en: "LCIF grants", el: "Επιχορηγήσεις LCIF", fr: "Subventions LCIF" },
  "youth.5p1":  { en: "Lions Clubs International Foundation has awarded more than", el: "Το Ίδρυμα Lions Clubs International έχει χορηγήσει πάνω από", fr: "La Fondation du Lions Clubs International a accordé plus de" },
  "youth.5b":   { en: "US$1.3 billion", el: "1,3 δισ. δολάρια ΗΠΑ", fr: "1,3 milliard USD" },
  "youth.5p2": {
    en: "in grants across 200 countries. Club and district community grants exist precisely so a small club can fund a good idea. If you bring us one, there is a route to paying for it.",
    el: "σε επιχορηγήσεις σε 200 χώρες. Οι επιχορηγήσεις κλαμπ και περιφέρειας υπάρχουν ακριβώς για να μπορεί ένα μικρό κλαμπ να χρηματοδοτήσει μια καλή ιδέα. Αν μας φέρεις μία, υπάρχει δρόμος να πληρωθεί.",
    fr: "de subventions dans 200 pays. Les subventions de club et de district existent précisément pour qu’un petit club puisse financer une bonne idée. Si vous nous en apportez une, il existe un moyen de la financer."
  },
  "youth.6age": { en: "By 1 July 2027", el: "Έως 1 Ιουλίου 2027", fr: "D’ici le 1er juillet 2027" },
  "youth.6h":   { en: "Mission 1.5", el: "Αποστολή 1.5", fr: "Mission 1.5" },
  "youth.6p": {
    en: "Lions International is working to reach 1.5 million members worldwide by July 2027, so that clubs can serve more people than ever. That is the honest reason we are recruiting — and why a new member matters here.",
    el: "Η Lions International εργάζεται για να φτάσει τα 1,5 εκατομμύρια μέλη παγκοσμίως έως τον Ιούλιο του 2027, ώστε τα κλαμπ να υπηρετούν περισσότερους ανθρώπους από ποτέ. Αυτός είναι ο ειλικρινής λόγος που ψάχνουμε μέλη — και γιατί ένα νέο μέλος μετράει εδώ.",
    fr: "Le Lions International vise 1,5 million de membres dans le monde d’ici juillet 2027, afin que les clubs servent plus de personnes que jamais. C’est la raison honnête de notre recrutement — et pourquoi un nouveau membre compte ici."
  },

  /* ---------------------------------------------------------------- FAQ --- */
  "faq.eyebrow": { en: "Straight answers", el: "Ξεκάθαρες απαντήσεις", fr: "Réponses directes" },
  "faq.h2": {
    en: "The questions people are too polite to ask.",
    el: "Οι ερωτήσεις που οι άνθρωποι είναι πολύ ευγενικοί για να κάνουν.",
    fr: "Les questions que l’on est trop poli pour poser."
  },

  /* ------------------------------------------------------------ CONTACT --- */
  "con.eyebrow": { en: "Find us", el: "Βρες μας", fr: "Nous trouver" },
  "con.h2a": { en: "Last Friday of the month.", el: "Τελευταία Παρασκευή του μήνα.", fr: "Dernier vendredi du mois." },
  "con.h2b": { en: "You are welcome at the next one.", el: "Είσαι ευπρόσδεκτος στην επόμενη.", fr: "Vous êtes bienvenu à la prochaine." },
  "con.when":    { en: "When", el: "Πότε", fr: "Quand" },
  "con.where":   { en: "Where", el: "Πού", fr: "Où" },
  "con.address": { en: "Address", el: "Διεύθυνση", fr: "Adresse" },
  "con.lang":    { en: "Languages", el: "Γλώσσες", fr: "Langues" },
  "con.district":{ en: "District", el: "Περιφέρεια", fr: "District" },
  "con.email":   { en: "Email", el: "Email", fr: "E-mail" },
  "con.map":     { en: "Open in Maps ↗", el: "Άνοιγμα στους Χάρτες ↗", fr: "Ouvrir dans Maps ↗" },
  "con.cal":     { en: "Add to calendar", el: "Προσθήκη στο ημερολόγιο", fr: "Ajouter au calendrier" },
  "con.copy":    { en: "Copy", el: "Αντιγραφή", fr: "Copier" },
  "con.copied":  { en: "Copied", el: "Αντιγράφηκε", fr: "Copié" },
  "con.copyAria":{ en: "Copy email address", el: "Αντιγραφή διεύθυνσης email", fr: "Copier l’adresse e-mail" },

  "form.h3":   { en: "Say hello", el: "Πες ένα γεια", fr: "Dites bonjour" },
  "form.sub":  { en: "Tell us what you would like to do. We read everything.", el: "Πες μας τι θα ήθελες να κάνεις. Τα διαβάζουμε όλα.", fr: "Dites-nous ce que vous aimeriez faire. Nous lisons tout." },
  "form.name": { en: "Your name", el: "Το όνομά σου", fr: "Votre nom" },
  "form.email":{ en: "Email", el: "Email", fr: "E-mail" },
  "form.int":  { en: "I am interested in", el: "Με ενδιαφέρει", fr: "Je suis intéressé par" },
  "form.msg":  { en: "Message", el: "Μήνυμα", fr: "Message" },
  "form.msgPh":{ en: "One line is genuinely enough.", el: "Μία γραμμή αρκεί πραγματικά.", fr: "Une ligne suffit vraiment." },
  "form.send": { en: "Send message", el: "Αποστολή μηνύματος", fr: "Envoyer le message" },
  "form.o1":   { en: "Coming to an open night", el: "Να έρθω σε ανοιχτή βραδιά", fr: "Venir à une soirée portes ouvertes" },
  "form.o2":   { en: "The Leo programme (12–30)", el: "Το πρόγραμμα Leo (12–30)", fr: "Le programme Leo (12–30 ans)" },
  "form.o3":   { en: "Full membership", el: "Πλήρης εγγραφή", fr: "Adhésion complète" },
  "form.o4":   { en: "Volunteering on one project", el: "Εθελοντισμός σε ένα έργο", fr: "Bénévolat sur un projet" },
  "form.o5":   { en: "Partnering with the club", el: "Συνεργασία με το κλαμπ", fr: "Partenariat avec le club" },
  "form.o6":   { en: "Something else", el: "Κάτι άλλο", fr: "Autre chose" },
  "form.err":  { en: "Please add your name and a valid email address.", el: "Συμπλήρωσε το όνομά σου και μια έγκυρη διεύθυνση email.", fr: "Veuillez indiquer votre nom et une adresse e-mail valide." },
  "form.sending": { en: "Sending…", el: "Αποστολή…", fr: "Envoi…" },
  "form.ok":   { en: "Thank you — we have your message and will reply soon.", el: "Ευχαριστούμε — λάβαμε το μήνυμά σου και θα απαντήσουμε σύντομα.", fr: "Merci — nous avons votre message et répondrons bientôt." },
  "form.fail": { en: "Something went wrong. Please email us directly at", el: "Κάτι πήγε στραβά. Στείλε μας email απευθείας στο", fr: "Une erreur est survenue. Écrivez-nous directement à" },
  "form.mail": { en: "Opening your email app… if nothing happens, write to", el: "Ανοίγει η εφαρμογή email… αν δεν συμβεί τίποτα, γράψε στο", fr: "Ouverture de votre messagerie… si rien ne se passe, écrivez à" },
  "form.subject": { en: "Website enquiry", el: "Ερώτημα από τον ιστότοπο", fr: "Demande via le site" },

  /* ------------------------------------------------------------- FOOTER --- */
  "foot.about":   { en: "About", el: "Σχετικά", fr: "À propos" },
  "foot.projects":{ en: "Projects", el: "Έργα", fr: "Projets" },
  "foot.contact": { en: "Contact", el: "Επικοινωνία", fr: "Contact" },
  "foot.motto":   { en: "“We Serve” — since 1917, worldwide.", el: "«Υπηρετούμε» — από το 1917, παγκοσμίως.", fr: "« Nous Servons » — depuis 1917, dans le monde." },
  "foot.legal":   { en: "Limassol Fraternité Lions Club. Independent club of Lions Clubs International.", el: "Limassol Fraternité Lions Club. Ανεξάρτητο κλαμπ της Lions Clubs International.", fr: "Limassol Fraternité Lions Club. Club indépendant du Lions Clubs International." },
  "foot.built":   { en: "Built static. Hosted free. No trackers, no cookies.", el: "Στατικός ιστότοπος. Δωρεάν φιλοξενία. Χωρίς ιχνηλάτες, χωρίς cookies.", fr: "Site statique. Hébergement gratuit. Sans traceurs ni cookies." },
  "toTop":        { en: "Back to top", el: "Επιστροφή στην κορυφή", fr: "Retour en haut" },

  /* --------------------------------------------------------- NO SCRIPT ---- */
  "nojs": {
    en: "JavaScript is disabled. Project, gallery and news listings will not appear. Everything else works. Contact us at",
    el: "Η JavaScript είναι απενεργοποιημένη. Οι λίστες έργων, φωτογραφιών και νέων δεν θα εμφανιστούν. Όλα τα άλλα λειτουργούν. Επικοινώνησε μαζί μας στο",
    fr: "JavaScript est désactivé. Les listes de projets, photos et actualités ne s’afficheront pas. Tout le reste fonctionne. Contactez-nous à"
  }
};
