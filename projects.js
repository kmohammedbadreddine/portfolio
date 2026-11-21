/* ==========================================================
   PROJETS – seul fichier à modifier pour gérer la galerie.
   Ajouter = copier un bloc ; supprimer = retirer un bloc.
   Champs : title, category, hook, summary, goals[], tools[],
   results[], link, linkLabel,
   image : chemin de votre image (dossier projets/,
           format 2:1, ex. 1200×600 px). Si le fichier est absent,
           une illustration graphique s'affiche à la place.
   art : illustration de repli ("bars" | "line" | "donut").
   example : mettre false sur un vrai projet pour retirer le badge.
   ⚠ Les 9 projets ci-dessous sont FICTIFS (démonstration).
   ========================================================== */
window.PROJECTS = [
  {
    title: "Projet DC Start", category: "Titre RNCP",
    hook: "Projet digital réalisé dans un objectif de mise en pratique des compétences acquises durant mon cursus de master.",
    image: "Mirror.png", art: "bars",
    summary: "Dans le cadre de l'obtention de mon diplôme de master, j'ai conçu un projet digital répondant à la problématique suivante : Comment réduire les erreurs de taille lors des achats en ligne ? Ce projet avait pour objectif de développer une solution innovante, tout en explorant les différentes étapes de création d'un projet.",
    goals: ["Etude de marché", "Conception de la solution", "Analyse concurrentielle", "Cahiers des charges techniques et fonctionnels", "Dossier management","Plan financier", "Stratégie marketing et communication"],
    tools: ["Canva", "Figma"],
    link: "DCSTART.pdf", linkLabel: "Voir le projet"
  },
  {
    title: "MyDigitalProject", category: "Projet scolaire",
    hook: "Projet scolaire réalisé dans un objectif de collaboration avec d'autres étudiants ayant des spécialités différentes.",
    image: "Shop&Cook.jpg", art: "line",
    summary: "Dans le cadre de mon parcours à MyDigitalSchool, j'ai participé au MyDigitalProject, un projet collaboratif réunissant des étudiants de différentes filières autour de la création d'un produit ou service innovant répondant à un besoin réel. Avec mon équipe, nous avons travaillé sur une solution visant à lutter contre le gaspillage alimentaire. Ce projet m'a permis de développer mes compétences en gestion de projet, travail d'équipe et créativité, tout en découvrant les différentes étapes nécessaires pour transformer une idée en une solution concrète.",
    goals: ["Analyse du marché","PESTEL / SWOT", "Stratégie SEO", "Stratégie SEA"],
    tools: ["Canva", "Figma"],
    link: "https://canva.link/74zf72s5bovzj0b", linkLabel: "Voir le projet"
  },
  {
    title: "Dashboard Looker Studio", category: "Data",
    hook: "Réalisation d’un tableau de bord à partir de données issues de la plateforme Kaggle.",
    image: "looker_logo.png", art: "donut",
    summary: "Dans le cadre de mes projets en data analytics, j'ai conçu plusieurs tableaux de bord interactifs à partir de jeux de données disponibles sur Kaggle, en utilisant Excel et Looker Studio. Chaque projet débutait par la collecte d'un jeu de données, suivie d'une phase de nettoyage et de préparation sur Excel afin de garantir la fiabilité et la cohérence des informations. Une fois les données structurées, je les intégrais dans Looker Studio pour concevoir des tableaux de bord interactifs et adaptés aux objectifs de l'analyse. L'objectif était de transformer des données brutes en informations exploitables, en identifiant les tendances, en mettant en évidence les indicateurs clés de performance (KPI) et en facilitant la compréhension des résultats grâce à des visualisations pertinentes.",
    goals: ["Compréhension et interprétation de jeux de données", "Choix des graphiques", "Conception de dashboards", "Capacité à identifier des tendances"],
    tools: ["Looker Studio", "Excel", "Kaggle"],
    link: "https://datastudio.google.com/reporting/d1fd3e52-af1e-48da-921a-4d7d5af8e525", linkLabel: "Dashboard"
  },
  {
    title: "Audit SEO", category: "Marketing",
    hook: "Analyse du positionnement digital d’AXA sur les moteurs de recherche, permettant d’identifier ses points forts ainsi que ses axes d’amélioration.",
    image: "axa.jpg", art: "bars",
    summary: "Dans le cadre d'un exercice, j'ai étudié le positionnement d’AXA sur les différents moteurs de recherche afin d’identifier ses points forts ainsi que ses axes d’amélioration en matière de référencement naturel. Cette expérience m’a permis de développer mes connaissances en stratégie SEO, d’approfondir ma compréhension des mécanismes de référencement et de découvrir les différents leviers qu’une entreprise peut mettre en place pour améliorer sa visibilité en ligne.",
    goals: ["Évaluer la visibilité digitale d'AXA en analysant son positionnement et ses performances sur les moteurs de recherche.", "Identifier les opportunités d'amélioration SEO à travers l'étude des aspects techniques, éditoriaux et concurrentiels.", "Formuler des recommandations stratégiques afin d'optimiser le référencement naturel et renforcer la présence en ligne de l'entreprise."],
    tools: ["Canva"],
    link: "https://canva.link/1ts3q9nmvnf46qi", linkLabel: "Audit AXA"
  },
  {
    title: "Livre Blanc", category: "Marketing",
    hook: "Réalisation d’un livre blanc pour l’entreprise Natiive, portant sur la thématique : « Améliorer votre rentabilité locative avec le statut LMNP ».",
    image: "Asset-1-2.webp", art: "line",
    summary: "Au cours de mon année de bachelor, j’ai eu l’opportunité de concevoir un livre blanc pour l’entreprise Natiive, autour de la thématique : « Améliorer votre rentabilité locative avec le statut LMNP ». Ce projet m’a permis d’approfondir mes connaissances dans le secteur immobilier, notamment en matière d’investissement locatif, des différents dispositifs fiscaux existants et de la législation française qui encadre ce domaine. Cette expérience m’a également donné l’occasion de développer mes compétences rédactionnelles, en travaillant sur la création d’un contenu structuré, accessible et attractif pour les futurs lecteurs du livre blanc.",
    goals: ["Informer et conseiller les investisseurs sur les avantages du statut LMNP et ses spécificités fiscales.", "Vulgariser et structurer des informations immobilières, juridiques et fiscales dans un contenu accessible.", "Valoriser l'expertise de Natiive à travers la création d'un livre blanc professionnel destiné à attirer et accompagner de potentiels investisseurs."],
    tools: ["Canva"],
    link: "https://canva.link/ijczrrm9cvcgujf", linkLabel: "Livre Blanc Natiive"
  },
  {
    title: "Projet Licence 3ᵉ année", category: "Projet scolaire",
    hook: "Développer une application capable de créer, modifier et sauvegarder des documents grâce à Java et aux bases de données.",
    image: "java.jpg", art: "donut",
    summary: "Dans le cadre de ma dernière année d'études à l'Université Paris Nanterre, j'ai participé à un projet de fin d'études en programmation portant sur la conception d'un éditeur de fichiers coopératif et réparti. Réalisé en équipe à l'aide du langage Java, ce projet avait pour objectif de développer une application permettant aux utilisateurs de créer, modifier et enregistrer des fichiers texte, tout en assurant leur stockage et leur récupération.",
    goals: ["Concevoir une interface permettant à plusieurs utilisateurs de consulter et de modifier un même document.", "Développer un serveur central permettant de gérer les connexions et de centraliser les modifications effectuées par les différents utilisateurs.", "Permettre l'enregistrement et le partage des modifications entre les utilisateurs grâce à un système de verrouillage et de déverrouillage des lignes de texte."],
    tools: ["Java"],
    link: "projet_L3.pdf", linkLabel: "Rapport de projet"
  },
  {
    title: "TikTok", category: "Réseaux sociaux",
    hook: "Transformer les moments forts des podcasts en contenus courts et engageants pour une communauté.",
    image: "tiktok.jpg", art: "donut",
    summary: "En 2023, j'ai lancé mon propre compte TikTok avec pour ambition de partager des extraits de podcasts mettant en avant des interventions, des réflexions et des moments qui m'ont particulièrement marqué. Ce projet repose sur un travail de sélection et de création de contenu, consistant à identifier les passages les plus pertinents en fonction des thématiques abordées et des messages transmis. L'objectif est de proposer un contenu engageant et accessible, tout en fédérant une communauté autour de centres d'intérêt communs, favorisant les échanges, les discussions et les débats.",
    goals: ["Sélectionner et partager des extraits de podcasts pertinents et captivants, adaptés aux codes de TikTok.", "Fédérer une audience autour de thématiques et de centres d'intérêt communs.", "Encourager les échanges, les discussions et les débats afin de créer une véritable dynamique communautaire."],
    tools: ["TikTok"],
    link: "https://www.tiktok.com/@infoxpodcast", linkLabel: "Voir le compte TikTok"
  }
];
