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
  "nav.work":       { en: "Our work",       el: "Οι δράσεις μας",     fr: "Nos actions" },
  "nav.beyond":     { en: "Beyond charity", el: "Πέρα από τη φιλανθρωπία",     fr: "Au-delà de la solidarité" },
  "nav.youth":      { en: "Youth",          el: "Νεολαία",            fr: "Jeunesse" },
  "nav.gallery":    { en: "Gallery",        el: "Γκαλερί",         fr: "Galerie" },
  "nav.news":       { en: "News",           el: "Νέα",             fr: "Actualités" },
  "nav.faq":        { en: "FAQ",            el: "Συχνές ερωτήσεις",       fr: "FAQ" },
  "nav.join":       { en: "Join us",        el: "Γίνετε μέλος",      fr: "Rejoignez-nous" },
  "nav.open":       { en: "Open menu",      el: "Άνοιγμα μενού",   fr: "Ouvrir le menu" },
  "nav.close":      { en: "Close menu",     el: "Κλείσιμο μενού",  fr: "Fermer le menu" },
  "nav.lang":       { en: "Choose language",el: "Επιλογή γλώσσας", fr: "Choisir une langue" },
  "skip":           { en: "Skip to content",el: "Μετάβαση στο περιεχόμενο", fr: "Aller au contenu" },

  /* --------------------------------------------------------------- HERO --- */
  "hero.eyebrow": {
    en: "Limassol · Cyprus · Since 1917 worldwide",
    el: "Λεμεσός · Κύπρος · Από το 1917 σε όλο τον κόσμο",
    fr: "Limassol · Chypre · Depuis 1917 dans le monde"
  },
  "hero.pre":    { en: "We don’t just", el: "Δεν κάνουμε μόνο",   fr: "Nous ne faisons pas que" },
  "hero.strike": { en: "give",          el: "δίνουμε",     fr: "donner" },
  "hero.gold":   { en: "build.",        el: "χτίζουμε.",   fr: "bâtir." },
  "hero.p": {
    en: "Limassol Fraternité is a Lions Club run by people who got tired of waiting for someone else to fix things. A growing mix of nationalities, one city, and a very short distance between having an idea and putting it in front of real people.",
    el: "Η Λέσχη Lions Λεμεσού Fraternité αποτελείται από ανθρώπους που κουράστηκαν να περιμένουν κάποιον άλλο να λύσει τα προβλήματα. Μια αναπτυσσόμενη κοινότητα ανθρώπων διαφορετικών εθνικοτήτων, ενωμένη στην ίδια πόλη, όπου η απόσταση από μια ιδέα μέχρι την υλοποίησή της για την υπηρεσία της κοινότητας είναι μόνο ένα βήμα.",
    fr: "Le Limassol Fraternité Lions Club est animé par des personnes qui en avaient assez d’attendre que quelqu’un d’autre résolve les problèmes. Une communauté en pleine croissance, composée de nationalités diverses, réunie dans une même ville, où il n’y a qu’un pas entre une idée et sa concrétisation au service de la communauté."
  },
  "hero.cta1":   { en: "Join the club",      el: "Γίνετε μέλος του club",       fr: "Rejoignez le club" },
  "hero.cta2":   { en: "See what we’ve done",el: "Γνωρίστε τις δράσεις μας", fr: "Découvrez nos actions" },
  "hero.m1b":    { en: "No age limit.", el: "Χωρίς όριο ηλικίας.", fr: "Sans limite d’âge." },
  "hero.m1": {
    en: "You are exactly who we are looking for.",
    el: "Είστε ακριβώς το άτομο που αναζητούμε.",
    fr: "Vous êtes exactement la personne que nous recherchons."
  },
  "hero.m2b":    { en: "English spoken.", el: "Μιλάμε αγγλικά.", fr: "L’anglais est parlé." },
  "hero.m2": {
    en: "Greek and French too.",
    el: "Επίσης ελληνικά και γαλλικά.",
    fr: "Le grec et le français aussi."
  },
  "hero.m3b":    { en: "4th Monday", el: "4η Δευτέρα", fr: "4e lundi" },
  "hero.m3": {
    en: "of every month, 19:30.",
    el: "κάθε μήνα στις 19:30.",
    fr: "de chaque mois à 19 h 30."
  },

  /* ------------------------------------------------------------- TICKER --- */
  "cause.serve":     { en: "We Serve",         el: "Υπηρετούμε",            fr: "Nous servons" },
  "cause.env":       { en: "Environment",      el: "Περιβάλλον",            fr: "Environnement" },
  "cause.hunger":    { en: "Hunger",           el: "Καταπολέμηση της πείνας",                 fr: "Lutte contre la faim" },
  "cause.vision":    { en: "Vision",           el: "Όραση",                 fr: "Vue" },
  "cause.diabetes":  { en: "Diabetes",         el: "Διαβήτης",              fr: "Diabète" },
  "cause.cancer":    { en: "Childhood Cancer", el: "Παιδικός καρκίνος",     fr: "Cancer infantile" },
  "cause.disaster":  { en: "Disaster Relief",  el: "Φυσικές καταστροφές",fr: "Aide en cas de catastrophe" },
  "cause.humanit":   { en: "Humanitarian",     el: "Ανθρωπιστική δράση",    fr: "Action humanitaire" },
  "cause.youth":     { en: "Youth",            el: "Νεολαία",               fr: "Jeunesse" },
  "cause.mental":    { en: "Mental wellbeing", el: "Ψυχική ευεξία",          fr: "Bien-être mental" },

  /* -------------------------------------------------------------- STATS --- */
  "stats.aria": {
    en: "The club and the network behind it",
    el: "Το club και το δίκτυο που το στηρίζει",
    fr: "Le club et le réseau qui le soutient"
  },
  "stats.foot": {
    en: "Our own project results will be published here as each one is completed and measured.",
    el: "Τα αποτελέσματα των δικών μας έργων θα δημοσιεύονται εδώ καθώς υλοποιούνται και αξιολογούνται.",
    fr: "Les résultats de nos propres projets seront publiés ici au fur et à mesure de leur réalisation et de leur évaluation."
  },

  /* -------------------------------------------------------------- ABOUT --- */
  "about.eyebrow": { en: "Who we are", el: "Ποιοι είμαστε;", fr: "Qui sommes-nous ?" },
  "about.h2": {
    en: "A small club in Limassol, plugged into 1.4 million people.",
    el: "Μια μικρή Λέσχη στη Λεμεσό, συνδεδεμένη με 1,4 εκατομμύρια μέλη σε όλο τον κόσμο.",
    fr: "Un petit club à Limassol, connecté à 1,4 million de membres dans le monde."
  },
  "about.p1": {
    en: "Limassol Fraternité is part of Lions Clubs International — the largest service organisation on earth, active in over 200 countries since 1917. That gives a club of our size something unusual: local hands, global backing.",
    el: "Η Λέσχη Lions Λεμεσού Fraternité αποτελεί μέρος των Διεθνών Lions (Lions Clubs International), της μεγαλύτερης Οργάνωσης υπηρεσιών στον κόσμο, με παρουσία σε περισσότερες από 200 χώρες από το 1917. Αυτό προσφέρει σε μια λέσχη του μεγέθους μας ένα εξαιρετικό πλεονέκτημα: τοπική δράση, υποστηριζόμενη από ένα παγκόσμιο δίκτυο.",
    fr: "Le Limassol Fraternité Lions Club fait partie du Lions Clubs International, la plus grande organisation de service au monde, présente dans plus de 200 pays depuis 1917. Cela donne à un club de notre taille un atout exceptionnel : une action locale soutenue par un réseau mondial."
  },
  "about.p2": {
    en: "It started when a Chicago businessman named Melvin Jones told his business club that it should reach beyond its own interests and take responsibility for the community around it. That was 1917. The motto came later, chosen by a worldwide vote of members in 1954, and it is still only two words long: We Serve.",
    el: "Όλα ξεκίνησαν όταν ο επιχειρηματίας από το Σικάγο, Melvin Jones, πρότεινε στην επιχειρηματική του λέσχη του να ξεπεράσει τα δικά της συμφέροντα και να υπηρετήσει την κοινότητα. Ήταν το 1917. Το σύνθημα ήρθε αργότερα, όταν υιοθετήθηκε με παγκόσμια ψηφοφορία των μελών το 1954. Παραμένει ακόμη μια μόνο λέξη: «Υπηρετούμε».",
    fr: "Tout a commencé lorsqu’un homme d’affaires de Chicago, Melvin Jones, a proposé à son club de dépasser ses propres intérêts pour se mettre au service de la communauté. C’était en 1917. Le slogan est venu plus tard, adopté par un vote mondial des membres en 1954. Il tient toujours en deux mots : « Nous servons »."
  },
  "about.p3": {
    en: "Our members come from Belgian, Canadian, Cypriot, French and Italian backgrounds — and more join as the club grows. Meetings run in English, and drift into Greek and French when the argument gets interesting. We sit in District 117-B, covering Northern Greece and Cyprus.",
    el: "Τα μέλη μας είναι βελγικής, καναδικής, κυπριακής, γαλλικής, ιταλικής και πολλών άλλων καταβολών. Οι συναντήσεις μας πραγματοποιούνται στα αγγλικά και συνεχίζονται φυσικά στα ελληνικά ή στα γαλλικά όταν οι συζητήσεις γίνονται πιο συναρπαστικές. Ανήκουμε στο District 117B, που καλύπτει τη Βόρεια Ελλάδα και την Κύπρο.",
    fr: "Nos membres viennent d’origine belge, canadien, chypriote, français, italien et bien d’autres encore. Nos réunions se déroulent en anglais et se poursuivent naturellement en grec ou en français lorsque les échanges deviennent passionnants. Nous faisons partie du District 117B, qui couvre la Grèce du Nord et Chypre."
  },
  "about.p4": {
    en: "What we are not is a dinner club that writes cheques. Every project we run has a named owner, a number attached to it, and a date it has to be finished by.",
    el: "Δεν είμαστε μια λέσχη που περιορίζεται στη διοργάνωση δείπνων ή στην υπογραφή επιταγών. Κάθε έργο έχει συγκεκριμένο υπεύθυνο, μετρήσιμους στόχους και σαφή προθεσμία.",
    fr: "Nous ne sommes pas un club qui se contente d’organiser des dîners ou de signer des chèques. Chaque projet possède un responsable identifié, des objectifs mesurables et une échéance précise."
  },
  "about.c1": { en: "Founded on “We Serve”", el: "Βασισμένοι στο «Υπηρετούμε»", fr: "Fondé sur « Nous servons »" },
  "about.c2": { en: "5+ nationalities",  el: "Περισσότερες από 5 εθνικότητες",    fr: "Plus de 5 nationalités" },
  "about.c3": { en: "3 working languages",el: "3 γλώσσες εργασίας",fr: "3 langues de travail" },
  "about.c4": { en: "100% volunteer",    el: "100% εθελοντές",   fr: "100 % bénévoles" },

  /* --------------------------------------------------------- INNOVATION --- */
  "inn.eyebrow": { en: "The difference", el: "Η διαφορά μας", fr: "Notre différence" },
  "inn.h2a": {
    en: "Charity hands out. Development builds capacity.",
    el: "Η φιλανθρωπία βοηθά. Η ανάπτυξη δίνει τη δυνατότητα για δράση.",
    fr: "La charité aide. Le développement donne les moyens d’agir."
  },
  "inn.h2b": {
    en: "We are moving to the second thing.",
    el: "Αυτόν τον δεύτερο δρόμο επιλέξαμε.",
    fr: "C’est cette deuxième voie que nous avons choisie."
  },
  "inn.lead": {
    en: "Handing someone a meal solves tonight. Handing them a system solves the year. Every project we take on is judged against four questions.",
    el: "Το να προσφέρεις ένα γεύμα καλύπτει την ανάγκη της ημέρας. Η δημιουργία ενός συστήματος καλύπτει τις ανάγκες μιας ολόκληρης χρονιάς. Κάθε έργο μας αξιολογείται με βάση τέσσερα βασικά ερωτήματα.",
    fr: "Offrir un repas répond au besoin d’aujourd’hui. Mettre en place un système répond aux besoins de toute une année. Chacun de nos projets est évalué selon quatre questions essentielles."
  },
  "inn.1h": { en: "Does it measure?", el: "Μπορεί να μετρηθεί;", fr: "Peut-on le mesurer ?" },
  "inn.1p": {
    en: "If we cannot count it, we cannot improve it. Kilograms of waste, screenings delivered, meals routed — every project produces a number we publish, including the disappointing ones.",
    el: "Αν δεν μπορούμε να το μετρήσουμε, δεν μπορούμε να το βελτιώσουμε. Κιλά απορριμμάτων που συλλέχθηκαν, προληπτικοί έλεγχοι που πραγματοποιήθηκαν, γεύματα που διανεμήθηκαν: κάθε έργο παράγει αποτελέσματα που δημοσιεύουμε, ακόμη και όταν είναι χαμηλότερα από τις προσδοκίες μας.",
    fr: "Si nous ne pouvons pas le mesurer, nous ne pouvons pas l’améliorer. Kilogrammes de déchets collectés, dépistages réalisés, repas distribués : chaque projet produit des résultats que nous publions, même lorsqu’ils sont en dessous de nos attentes."
  },
  "inn.2h": { en: "Does it outlast us?", el: "Θα έχει διαρκή αντίκτυπο;", fr: "Aura-t-il un impact durable ?" },
  "inn.2p": {
    en: "We prefer building a process a community can run without us over an event they need us to repeat. Success looks like being made unnecessary.",
    el: "Προτιμούμε να δημιουργούμε μια διαδικασία που η κοινότητα θα μπορεί να συνεχίσει μόνη της, παρά να οργανώνουμε μια εκδήλωση που θα πρέπει να μας ζητά να επαναλάβουμε. Η πραγματική επιτυχία είναι να καταστήσουμε τον εαυτό μας περιττό.",
    fr: "Nous préférons mettre en place un processus que la communauté pourra poursuivre seule plutôt que d’organiser un événement qu’elle devra nous demander de répéter. Le véritable succès, c’est devenir inutile."
  },
  "inn.3h": { en: "Does it use the tools of now?", el: "Χρησιμοποιεί τα εργαλεία του σήμερα;", fr: "Utilise-t-il les outils d’aujourd’hui ?" },
  "inn.3p": {
    en: "Shared logistics boards, open datasets, digital literacy programmes. Technology is not a gimmick bolted on the end — it is often the cheapest way to multiply a small team.",
    el: "Συνεργατικά εργαλεία, ανοικτά δεδομένα, προγράμματα ψηφιακής εκπαίδευσης: η τεχνολογία δεν είναι ένα πρόσθετο στοιχείο στο τέλος ενός έργου. Συχνά είναι ο πιο αποτελεσματικός τρόπος για να πολλαπλασιαστεί ο αντίκτυπος μιας μικρής ομάδας.",
    fr: "Outils collaboratifs, données ouvertes, programmes d’éducation numérique : la technologie n’est pas un gadget ajouté à la fin d’un projet. C’est souvent le moyen le plus efficace de multiplier l’impact d’une petite équipe."
  },
  "inn.4h": { en: "Does it grow a leader?", el: "Δημιουργεί έναν ηγέτη;", fr: "Fait-il grandir un leader ?" },
  "inn.4p": {
    en: "Every project is owned by a member, not a committee. People join to help and leave able to run things. That is the quiet output nobody puts on a poster.",
    el: "Κάθε έργο ανήκει σε ένα μέλος, όχι σε μια επιτροπή. Οι άνθρωποι έρχονται για να βοηθήσουν και φεύγουν ικανοί να διοικούν. Αυτό είναι το αθόρυβο αποτέλεσμα που κανείς δεν βάζει σε αφίσα.",
    fr: "Chaque projet appartient à un membre, pas à un comité. On arrive pour aider et on repart capable de diriger. C’est le résultat discret que personne n’affiche."
  },

  /* ------------------------------------------------------------- CAUSES --- */
  "causes.eyebrow": { en: "Global causes", el: "Οι παγκόσμιοι πυλώνες", fr: "Nos causes mondiales" },
  "causes.h2": {
    en: "Eight fronts, worldwide. We pick the ones Limassol needs most.",
    el: "Οκτώ βασικοί τομείς δράσης σε όλο τον κόσμο. Επιλέγουμε εκείνους που χρειάζεται περισσότερο η Λεμεσός.",
    fr: "Huit grands domaines d’action à travers le monde. Nous choisissons ceux dont Limassol a le plus besoin."
  },
  "causes.env.d":      { en: "Cleanups, planting, waste data",  el: "Καθαρισμοί, δενδροφυτεύσεις και συλλογή δεδομένων για τα απορρίμματα", fr: "Nettoyages, plantations et collecte de données sur les déchets" },
  "causes.hunger.d":   { en: "Food recovery and distribution",  el: "Συλλογή και διανομή τροφίμων",     fr: "Récupération et distribution de denrées alimentaires" },
  "causes.vision.d":   { en: "Screening and eyewear access",    el: "Έλεγχος όρασης και πρόσβαση σε γυαλιά", fr: "Dépistage visuel et accès aux lunettes" },
  "causes.diabetes.d": { en: "Awareness and early detection",   el: "Ενημέρωση και έγκαιρος έλεγχος",   fr: "Sensibilisation et dépistage précoce" },
  "causes.cancer.d":   { en: "Family and treatment support",    el: "Στήριξη οικογενειών και θεραπειών",fr: "Soutien aux familles et aux traitements" },
  "causes.mental.d":   { en: "Reducing stigma locally",         el: "Μείωση του στίγματος σε τοπικό επίπεδο",      fr: "Réduire la stigmatisation au niveau local" },
  "causes.disaster.d": { en: "Rapid response and rebuild",      el: "Άμεση παρέμβαση και αποκατάσταση",fr: "Intervention rapide et reconstruction" },
  "causes.humanit.d":  { en: "Wherever the need is sharpest",   el: "Εκεί όπου οι ανάγκες είναι πιο επείγουσες",   fr: "Là où les besoins sont les plus urgents" },

  /* ------------------------------------------------------------- PROJECTS - */
  "work.eyebrow": { en: "Track record", el: "Τα επιτεύγματά μας", fr: "Nos réalisations" },
  "work.h2": {
    en: "What we have actually done.",
    el: "Αυτά που πραγματικά έχουμε πετύχει.",
    fr: "Ce que nous avons réellement accompli."
  },
  "work.lead": {
    en: "Real community service across Limassol and its villages in Cyprus — eye and diabetes screenings, blood donation and tree planting. No rounding up, no vanity metrics.",
    el: "Συγκεκριμένες δράσεις για την κοινότητα στη Λεμεσό και στα χωριά της: έλεγχοι όρασης και διαβήτη, αιμοδοσίες και δενδροφυτεύσεις. Όχι διογκωμένοι αριθμοί, μόνο πραγματικά αποτελέσματα.",
    fr: "Des actions concrètes au service de la communauté à Limassol et dans ses villages : dépistages de la vue et du diabète, dons de sang et plantations d’arbres. Pas de chiffres gonflés, uniquement des résultats réels."
  },
  "work.filterAll": { en: "All projects", el: "Όλα τα έργα", fr: "Tous les projets" },
  "work.empty":     { en: "No projects in this category yet.", el: "Δεν υπάρχουν προς το παρόν έργα σε αυτή την κατηγορία.", fr: "Aucun projet dans cette catégorie pour le moment." },
  "work.filterAria":{ en: "Filter projects by category", el: "Φιλτράρισμα έργων ανά κατηγορία", fr: "Filtrer les projets par catégorie" },

  "cat.environment": { en: "Environment", el: "Περιβάλλον", fr: "Environnement" },
  "cat.health":      { en: "Health",      el: "Υγεία",      fr: "Santé" },
  "cat.youth":       { en: "Youth",       el: "Νεολαία",       fr: "Jeunesse" },
  "cat.hunger":      { en: "Hunger",      el: "Καταπολέμηση της πείνας",      fr: "Lutte contre la faim" },
  "cat.tech":        { en: "Technology",  el: "Τεχνολογία", fr: "Technologie" },
  "cat.community":   { en: "Community",   el: "Κοινότητα",  fr: "Communauté" },

  "status.live":     { en: "Live now",   el: "Σε εξέλιξη",   fr: "En cours" },
  "status.complete": { en: "Completed",  el: "Ολοκληρώθηκε", fr: "Terminé" },
  "status.upcoming": { en: "Upcoming",   el: "Προσεχώς",   fr: "À venir" },

  /* ------------------------------------------------------------ GALLERY --- */
  "gal.eyebrow": { en: "In the field", el: "Στο πεδίο", fr: "Sur le terrain" },
  "gal.h2":      { en: "Photos & video.", el: "Φωτογραφίες και βίντεο.", fr: "Photos et vidéos." },
  "gal.lead": {
    en: "Service is not an abstraction. This is what it looks like on a Saturday morning.",
    el: "Η προσφορά δεν είναι μια αφηρημένη ιδέα. Έτσι μοιάζει ένα Σάββατο πρωί.",
    fr: "Le service n’est pas une idée abstraite. Voilà à quoi il ressemble un samedi matin."
  },
  "gal.photosH": { en: "Photographs", el: "Φωτογραφίες", fr: "Photographies" },
  "gal.videosH": { en: "Videos", el: "Βίντεο", fr: "Vidéos" },
  "gal.watch":   { en: "Watch", el: "Παρακολούθηση", fr: "Regarder" },
  "gal.soonPhoto":{ en: "Photo coming soon", el: "Φωτογραφία σύντομα διαθέσιμη", fr: "Photo bientôt disponible" },
  "gal.soonVideo":{ en: "Video coming soon", el: "Βίντεο σύντομα διαθέσιμο",     fr: "Vidéo bientôt disponible" },
  "gal.view":    { en: "View", el: "Προβολή", fr: "Voir" },
  "gal.play":    { en: "Play", el: "Αναπαραγωγή", fr: "Lire" },
  "gal.of":      { en: "of",   el: "από", fr: "sur" },
  "gal.viewer":  { en: "Photo viewer", el: "Προβολή φωτογραφιών", fr: "Visionneuse de photos" },
  "gal.prev":    { en: "Previous", el: "Προηγούμενη", fr: "Précédente" },
  "gal.next":    { en: "Next", el: "Επόμενη", fr: "Suivante" },
  "gal.closeLb": { en: "Close", el: "Κλείσιμο", fr: "Fermer" },

  /* --------------------------------------------------------------- NEWS --- */
  "news.eyebrow": { en: "Announcements", el: "Νέα", fr: "Actualités" },
  "news.h2":      { en: "What’s next.", el: "Οι επόμενες συναντήσεις και δράσεις.", fr: "Les prochains rendez-vous." },
  "news.lead": {
    en: "Events, calls for volunteers and club news. Nothing here requires membership to attend.",
    el: "Εκδηλώσεις, προσκλήσεις προς εθελοντές και νέα της λέσχης. Όλες οι δραστηριότητές μας είναι ανοικτές στο κοινό, χωρίς υποχρέωση εγγραφής.",
    fr: "Événements, appels aux bénévoles et actualités du club. Toutes nos activités sont ouvertes au public, sans obligation d’adhésion."
  },
  "kind.event": { en: "Event",             el: "Εκδήλωση",         fr: "Événement" },
  "kind.news":  { en: "Club news",         el: "Νέα της λέσχης",    fr: "Actualités du club" },
  "kind.call":  { en: "Volunteers needed", el: "Αναζητούνται εθελοντές", fr: "Bénévoles recherchés" },

  /* --------------------------------------------------------------- JOIN --- */
  "join.eyebrow": { en: "Get involved", el: "Συμμετέχετε", fr: "Impliquez-vous" },
  "join.h2": {
    en: "Three ways in. None of them require you to be impressive yet.",
    el: "Τρεις τρόποι να συμμετάσχετε. Κανένας δεν απαιτεί να είστε ήδη ξεχωριστοί.",
    fr: "Trois façons de nous rejoindre. Aucune ne demande d’être déjà extraordinaire."
  },
  "join.1h":   { en: "Come once", el: "Ελάτε για πρώτη φορά", fr: "Venez une première fois" },
  "join.1age": { en: "Any age", el: "Όλες οι ηλικίες", fr: "Tout âge" },
  "join.1p": {
    en: "Turn up to one project or one open night. Zero commitment, zero cost, no one will follow you home. Most members started exactly here.",
    el: "Συμμετέχετε σε ένα έργο ή σε μια βραδιά γνωριμίας. Καμία δέσμευση, κανένα κόστος και καμία πίεση. Οι περισσότεροι από τους/τις Lions μας ξεκίνησαν έτσι.",
    fr: "Participez à un projet ou à une soirée découverte. Aucun engagement, aucun coût et aucune pression. La plupart de nos membres ont commencé ainsi."
  },
  "join.1cta": { en: "Tell us you’re coming", el: "Ενημερώστε μας ότι θα έρθετε", fr: "Prévenez-nous de votre venue" },
  "join.2tag": { en: "Most popular", el: "Το πιο δημοφιλές", fr: "Le plus populaire" },
  "join.2h":   { en: "Leo programme", el: "Πρόγραμμα Leo", fr: "Programme Leo" },
  "join.2age": { en: "Ages 12–30", el: "12 έως 30 ετών", fr: "12 à 30 ans" },
  "join.2p": {
    en: "The youth arm of Lions International. Alpha Leos are 12–18, Omega Leos 18–30. You get a project, a budget, a mentor and the authority to actually decide things.",
    el: "Ο νεανικός κλάδος των Διεθνών Lions (Lions Clubs International). Οι Alpha Leos είναι 12–18 ετών και οι Omega Leos 18–30 ετών. Αναλαμβάνετε ένα έργο, έχετε προϋπολογισμό, μέντορα και πραγματική δυνατότητα λήψης αποφάσεων.",
    fr: "La branche jeunesse du Lions Clubs International. Les Alpha Leos ont entre 12 et 18 ans, les Omega Leos entre 18 et 30 ans. Vous prenez en charge un projet, disposez d’un budget, bénéficiez d’un mentor et avez un véritable pouvoir de décision."
  },
  "join.2cta": { en: "Apply to Leo", el: "Υποβάλετε αίτηση για το πρόγραμμα Leo", fr: "Postuler au programme Leo" },
  "join.3h":   { en: "Full membership", el: "Γίνετε μέλος", fr: "Devenir membre" },
  "join.3age": { en: "No age limit", el: "Χωρίς όριο ηλικίας", fr: "Sans limite d’âge" },
  "join.3p": {
    en: "Become a Lion. Vote on what the club funds, lead your own projects, and plug into a network across 200+ countries. Modest annual dues apply.",
    el: "Γίνετε Lion. Ψηφίστε για τα έργα που υποστηρίζει το club, διευθύνετε τις δικές σας δράσεις και ενταχθείτε σε ένα δίκτυο που υπάρχει σε περισσότερες από 200 χώρες. Απαιτείται μια μικρή ετήσια συνδρομή.",
    fr: "Devenez Lion. Votez pour les projets soutenus par le club, dirigez vos propres actions et rejoignez un réseau présent dans plus de 200 pays. Une cotisation annuelle modeste est demandée."
  },
  "join.3cta": { en: "Ask about joining", el: "Ζητήστε πληροφορίες", fr: "Demander des informations" },
  "join.s1": { en: "Send a message — one line is enough", el: "Στείλτε μας ένα μήνυμα — μία μόνο γραμμή αρκεί.", fr: "Envoyez-nous un message — une seule ligne suffit." },
  "join.s2": { en: "We reply within a few days and invite you to the next meeting", el: "Θα σας απαντήσουμε μέσα σε λίγες ημέρες και θα σας προσκαλέσουμε στην επόμενη συνάντησή μας.", fr: "Nous vous répondrons sous quelques jours et vous inviterons à notre prochaine réunion." },
  "join.s3": { en: "You come, you look around, you decide nothing", el: "Έρχεστε, γνωρίζετε τη λέσχη, χωρίς καμία υποχρέωση.", fr: "Vous venez, vous découvrez le club, sans aucune obligation." },
  "join.s4": { en: "If it fits, you pick a project and start", el: "Αν σας ταιριάζει, επιλέγετε ένα έργο και ξεκινάτε.", fr: "Si cela vous convient, vous choisissez un projet et vous commencez." },

  /* -------------------------------------------------------------- YOUTH --- */
  "youth.eyebrow": { en: "What you plug into", el: "Τι σας περιμένει", fr: "Ce qui vous attend" },
  "youth.h2": {
    en: "Joining a club this small opens doors this big.",
    el: "Η συμμετοχή σε μια λέσχη αυτού του μεγέθους ανοίγει τεράστιες ευκαιρίες.",
    fr: "Rejoindre un club de cette taille ouvre des opportunités immenses."
  },
  "youth.lead": {
    en: "These are real Lions International programmes, open to members of any club — including ours. Ask us about any of them.",
    el: "Πρόκειται για πραγματικά προγράμματα του Lions Clubs International, διαθέσιμα στα μέλη όλων των λεσχών, συμπεριλαμβανομένου του δικού μας. Μη διστάσετε να μας ρωτήσετε για οποιοδήποτε από αυτά.",
    fr: "Il s’agit de véritables programmes du Lions Clubs International, accessibles aux membres de tous les clubs, y compris le nôtre. N’ hésitez pas à nous interroger sur chacun d’eux."
  },
  "youth.1age": { en: "Ages 12–30", el: "12 έως 30 ετών", fr: "12 à 30 ans" },
  "youth.1h":   { en: "Leo clubs", el: "Clubs Leo", fr: "Clubs Leo" },
  "youth.1p": {
    en: "The youth arm of Lions International. Alpha Leos are 12–18, Omega Leos 18–30. Leos run their own service projects and build leadership experience that transfers straight onto a CV.",
    el: "Ο νεανικός κλάδος του Lions Clubs International. Οι Alpha Leos είναι 12–18 ετών και οι Omega Leos 18–30 ετών. Τα Leo διευθύνουν τα δικά τους έργα υπηρεσίας και αναπτύσσουν δεξιότητες ηγεσίας που είναι χρήσιμες στην επαγγελματική τους πορεία.",
    fr: "La branche jeunesse du Lions Clubs International. Les Alpha Leos ont entre 12 et 18 ans, les Omega Leos entre 18 et 30 ans. Les Leos dirigent leurs propres projets de service et développent des compétences en leadership valorisables dans leur parcours professionnel."
  },
  "youth.2age": { en: "Ages 15–22", el: "15 έως 22 ετών", fr: "15 à 22 ans" },
  "youth.2h":   { en: "Youth Camps & Exchange", el: "Διεθνείς κατασκηνώσεις και ανταλλαγές", fr: "Camps et échanges internationaux" },
  "youth.2p": {
    en: "Live abroad with a host Lions family, join their service projects and meet young people from dozens of countries. No academic requirement and no tuition fee — this is cultural exchange, not a study programme.",
    el: "Ζήστε στο εξωτερικό με μια οικογένεια φιλοξενίας Lions, συμμετέχετε στις δράσεις προσφοράς της και γνωρίστε νέους από δεκάδες χώρες. Δεν απαιτούνται ακαδημαϊκά προσόντα ούτε δίδακτρα: πρόκειται για μια πραγματική πολιτιστική ανταλλαγή.",
    fr: "Vivez à l’étranger au sein d’une famille d’accueil Lions, participez à ses actions de service et rencontrez des jeunes venus de dizaines de pays. Aucun prérequis académique ni frais de scolarité : il s’agit d’un véritable échange culturel."
  },
  "youth.3age": { en: "Ages 11–13", el: "11 έως 13 ετών", fr: "11 à 13 ans" },
  "youth.3h":   { en: "Peace Poster Contest", el: "Διαγωνισμός Αφίσας Ειρήνης", fr: "Concours d’affiches de la paix" },
  "youth.3p": {
    en: "Run for nearly four decades. Clubs sponsor it in local schools and youth groups; entrants express what peace means to them through art. The international grand prize is US$5,000, with 23 merit awards of US$500.",
    el: "Διοργανώνεται εδώ και σχεδόν σαράντα χρόνια σε σχολεία και ομάδες νέων. Οι συμμετέχοντες εκφράζουν μέσα από την τέχνη το όραμά τους για την ειρήνη. Το πρώτο διεθνές βραβείο είναι 5.000 δολάρια ΗΠΑ, ενώ απονέμονται και 23 βραβεία αξιοκρατίας των 500 δολαρίων ΗΠΑ.",
    fr: "Organisé depuis près de quarante ans, ce concours est proposé dans les écoles et les groupes de jeunes. Les participants expriment par l’art leur vision de la paix. Le premier prix international est de 5 000 dollars US, auxquels s’ajoutent 23 prix de mérite de 500 dollars US."
  },
  "youth.4age": { en: "Schools", el: "Σχολεία", fr: "Écoles" },
  "youth.4h":   { en: "Lions Quest", el: "Lions Quest", fr: "Lions Quest" },
  "youth.4p": {
    en: "A social-emotional learning programme delivered in schools worldwide and funded through LCIF grants — covering resilience, decision-making and drug-prevention education for young people.",
    el: "Παγκόσμιο πρόγραμμα ανάπτυξης κοινωνικών και συναισθηματικών δεξιοτήτων, που εφαρμόζεται στα σχολεία μέσω επιχορηγήσεων του LCIF. Αναπτύσσει την ανθεκτικότητα, τη λήψη αποφάσεων και την πρόληψη των εξαρτήσεων στους νέους.",
    fr: "Programme mondial d’apprentissage des compétences psychosociales, mis en œuvre dans les écoles grâce aux subventions du LCIF. Il développe la résilience, la prise de décision et la prévention des addictions chez les jeunes."
  },
  "youth.5age": { en: "Funding", el: "Χρηματοδότηση", fr: "Financement" },
  "youth.5h":   { en: "LCIF grants", el: "Επιχορηγήσεις LCIF", fr: "Subventions du LCIF" },
  "youth.5p1":  { en: "Lions Clubs International Foundation has awarded more than", el: "Το Ίδρυμα Lions Clubs International έχει χορηγήσει περισσότερα από", fr: "La Fondation du Lions Clubs International a accordé plus de" },
  "youth.5b":   { en: "US$1.3 billion", el: "1,3 δισεκατομμύρια δολάρια ΗΠΑ", fr: "1,3 milliard de dollars US" },
  "youth.5p2": {
    en: "in grants across 200 countries. Club and district community grants exist precisely so a small club can fund a good idea. If you bring us one, there is a route to paying for it.",
    el: "σε επιχορηγήσεις σε περισσότερες από 200 χώρες. Υπάρχει βοήθεια για λέσχες και θέματα, ώστε ακόμη και μια μικρή λέσχη να μπορεί να χρηματοδοτήσει μια καλή ιδέα. Αν μας φέρετε ένα έργο, υπάρχει πραγματικός τρόπος να το υλοποιήσουμε.",
    fr: "de subventions dans plus de 200 pays. Des aides existent pour les clubs et les districts afin qu’un petit club puisse financer une bonne idée. Si vous nous apportez un projet, il existe un véritable moyen de le concrétiser."
  },
  "youth.6age": { en: "By 1 July 2027", el: "Έως την 1η Ιουλίου 2027", fr: "D’ici le 1er juillet 2027" },
  "youth.6h":   { en: "Mission 1.5", el: "Mission 1.5", fr: "Mission 1.5" },
  "youth.6p": {
    en: "Lions International is working to reach 1.5 million members worldwide by July 2027, so that clubs can serve more people than ever. That is the honest reason we are recruiting — and why a new member matters here.",
    el: "Το Lions Clubs International έχει θέσει ως στόχο να φτάσει τα 1,5 εκατομμύρια μέλη παγκοσμίως έως τον Ιούλιο του 2027, ώστε να προσφέρει υπηρεσίες σε ακόμη περισσότερους ανθρώπους. Γι’ αυτό προσλαμβάνουμε ενεργά νέα μέλη: κάθε νέο μέλος μετράει.",
    fr: "Le Lions Clubs International s’est fixé pour objectif d’atteindre 1,5 million de membres dans le monde d’ici juillet 2027 afin de servir encore davantage de personnes. C’est la raison pour laquelle nous recrutons activement : chaque nouveau membre compte."
  },

  /* ---------------------------------------------------------------- FAQ --- */
  "faq.eyebrow": { en: "Straight answers", el: "Σαφείς απαντήσεις", fr: "Des réponses claires" },
  "faq.h2": {
    en: "The questions people are too polite to ask.",
    el: "Οι ερωτήσεις που δεν τολμάμε πάντα να κάνουμε.",
    fr: "Les questions que l’on n’ose pas toujours poser."
  },

  /* ------------------------------------------------------------ CONTACT --- */
  "con.eyebrow": { en: "Find us", el: "Βρείτε μας", fr: "Nous trouver" },
  "con.h2a": { en: "The 4th Monday of every month.", el: "Την 4η Δευτέρα κάθε μήνα.", fr: "Le 4e lundi de chaque mois." },
  "con.h2b": { en: "You are welcome at the next one.", el: "Είστε ευπρόσδεκτοι στην επόμενη συνάντηση.", fr: "Vous êtes le bienvenu à la prochaine réunion." },
  "con.when":    { en: "When", el: "Πότε", fr: "Quand" },
  "con.where":   { en: "Where", el: "Τοποθεσία", fr: "Lieu" },
  "con.address": { en: "Address", el: "Διεύθυνση", fr: "Adresse" },
  "con.map":     { en: "Open in Maps ↗", el: "Άνοιγμα στους Χάρτες ↗", fr: "Ouvrir dans Maps ↗" },
  "con.lang":    { en: "Languages", el: "Γλώσσες", fr: "Langues" },
  "con.district":{ en: "District", el: "District", fr: "District" },
  "con.email":   { en: "Email", el: "e-mail", fr: "e-mail" },
  "con.venueNote":{
    en: "Our meeting place is not fixed. We confirm the venue by email a few days before each meeting — write to us and we will make sure you have it.",
    el: "Ο χώρος των συναντήσεών μας δεν είναι σταθερός. Επιβεβαιώνουμε τον χώρο με e-mail λίγες ημέρες πριν από κάθε συνάντηση — γράψτε μας και θα φροντίσουμε να τον γνωρίζετε.",
    fr: "Notre lieu de réunion n’est pas fixe. Nous confirmons le lieu par e-mail quelques jours avant chaque réunion — écrivez-nous et nous vous le communiquerons."
  },
  "con.ask":     { en: "Ask for the next venue", el: "Ζητήστε τον επόμενο χώρο", fr: "Demander le prochain lieu" },
  "con.askSubject": { en: "Next meeting venue", el: "Χώρος επόμενης συνάντησης", fr: "Lieu de la prochaine réunion" },
  "con.cal":     { en: "Add to calendar", el: "Προσθήκη στο ημερολόγιο", fr: "Ajouter au calendrier" },
  "con.copy":    { en: "Copy", el: "Αντιγραφή", fr: "Copier" },
  "con.copied":  { en: "Copied", el: "Αντιγράφηκε", fr: "Copié" },
  "con.copyAria":{ en: "Copy email address", el: "Αντιγραφή διεύθυνσης e-mail", fr: "Copier l’adresse e-mail" },

  "form.h3":   { en: "Say hello", el: "Πείτε μας ένα γεια", fr: "Dites-nous bonjour" },
  "form.sub":  { en: "Tell us what you would like to do. We read everything.", el: "Πείτε μας τι θα θέλατε να κάνετε. Διαβάζουμε κάθε μήνυμα.", fr: "Dites-nous ce que vous souhaitez faire. Nous lisons chaque message." },
  "form.name": { en: "Your name", el: "Το όνομά σας", fr: "Votre nom" },
  "form.email":{ en: "Email", el: "Διεύθυνση e-mail", fr: "Adresse e-mail" },
  "form.int":  { en: "I am interested in", el: "Ενδιαφέρομαι για", fr: "Je suis intéressé(e) par" },
  "form.msg":  { en: "Message", el: "Μήνυμα", fr: "Message" },
  "form.msgPh":{ en: "One line is genuinely enough.", el: "Πραγματικά αρκεί μία γραμμή.", fr: "Une seule ligne suffit vraiment." },
  "form.send": { en: "Send message", el: "Αποστολή μηνύματος", fr: "Envoyer le message" },
  "form.o1":   { en: "Coming to an open night", el: "Συμμετοχή σε μια συνάντηση γνωριμίας", fr: "Participer à une réunion découverte" },
  "form.o2":   { en: "The Leo programme (12–30)", el: "Το πρόγραμμα Leo (12 έως 30 ετών)", fr: "Le programme Leo (12 à 30 ans)" },
  "form.o3":   { en: "Full membership", el: "Γίνετε μέλος", fr: "Devenir membre" },
  "form.o4":   { en: "Volunteering on one project", el: "Γίνετε εθελοντής/εθελόντρια σε ένα έργο", fr: "Être bénévole pour un projet" },
  "form.o5":   { en: "Partnering with the club", el: "Γίνετε συνεργάτης της λέσχης", fr: "Devenir partenaire du club" },
  "form.o6":   { en: "Something else", el: "Άλλο", fr: "Autre" },
  "form.err":  { en: "Please add your name and a valid email address.", el: "Παρακαλώ συμπληρώστε το όνομά σας και μια έγκυρη διεύθυνση e-mail.", fr: "Veuillez indiquer votre nom ainsi qu’une adresse e-mail valide." },
  "form.sending": { en: "Sending…", el: "Αποστολή…", fr: "Envoi en cours…" },
  "form.ok":   { en: "Thank you — we have your message and will reply soon.", el: "Ευχαριστούμε! Λάβαμε το μήνυμά σας και θα σας απαντήσουμε σύντομα.", fr: "Merci ! Nous avons bien reçu votre message et vous répondrons très prochainement." },
  "form.fail": { en: "Something went wrong. Please email us directly at", el: "Παρουσιάστηκε σφάλμα. Παρακαλούμε επικοινωνήστε απευθείας μαζί μας στη διεύθυνση:", fr: "Une erreur est survenue. Veuillez nous contacter directement à l’adresse suivante :" },
  "form.mail": { en: "Opening your email app… if nothing happens, write to", el: "Άνοιγμα της εφαρμογής ηλεκτρονικού ταχυδρομείου… Αν δεν ανοίξει, γράψτε μας στο", fr: "Ouverture de votre application de messagerie… Si rien ne se passe, écrivez-nous à" },
  "form.subject": { en: "Website enquiry", el: "Αίτημα μέσω της ιστοσελίδας", fr: "Demande via le site Internet" },

  /* ------------------------------------------------------------- FOOTER --- */
  "foot.about":   { en: "About", el: "Σχετικά", fr: "À propos" },
  "foot.projects":{ en: "Projects", el: "Έργα", fr: "Projets" },
  "foot.contact": { en: "Contact", el: "Επικοινωνία", fr: "Contact" },
  "foot.motto":   { en: "“We Serve” — since 1917, worldwide.", el: "«Υπηρετούμε» — από το 1917, σε όλο τον κόσμο.", fr: "« Nous servons » — depuis 1917, dans le monde entier." },
  "foot.legal":   { en: "Limassol Fraternité Lions Club. Autonomous club of Lions Clubs International.", el: "Limassol Fraternité Lions Club. Αυτόνομη λέσχη, μέλος των Διεθνών Lions.", fr: "Limassol Fraternité Lions Club. Club autonome membre du Lions Clubs International." },
  "foot.built":   { en: "Built static. Hosted free. No trackers, no cookies.", el: "Στατική ιστοσελίδα. Δωρεάν φιλοξενία. Χωρίς trackers, χωρίς cookies.", fr: "Site statique. Hébergement gratuit. Aucun traceur, Aucun cookie." },
  "toTop":        { en: "Back to top", el: "Επιστροφή στην κορυφή", fr: "Retour en haut" },

  /* --------------------------------------------------------- NO SCRIPT ---- */
  "nojs": {
    en: "JavaScript is disabled. Project, gallery and news listings will not appear. Everything else works. Contact us at",
    el: "Η JavaScript είναι απενεργοποιημένη. Οι λίστες των έργων, της γκαλερί και των νέων δεν θα εμφανίζονται. Το υπόλοιπο της ιστοσελίδας λειτουργεί κανονικά. Μπορείτε να επικοινωνήσετε μαζί μας στη διεύθυνση:",
    fr: "JavaScript est désactivé. Les listes des projets, de la galerie et des actualités ne s’afficheront pas. Le reste du site fonctionne normalement. Vous pouvez nous contacter à l’adresse suivante :"
  }
};
