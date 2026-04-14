export interface Translations {
  // Nav / Sidebar
  nav: {
    home: string;
    myContent: string;
    catalog: string;
    projects: string;
    events: string;
    forum: string;
    community: string;
    help: string;
    sectionProgress: string;
    sectionLearning: string;
    sectionLinks: string;
  };
  // TopBar
  topbar: {
    searchPlaceholder: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
  };
  // Auth / UserMenu
  auth: {
    signIn: string;
    signOut: string;
  };
  // Status badges
  status: {
    completed: string;
    active: string;
    upcoming: string;
    locked: string;
    chapterCompleted: string;
    chapterActive: string;
    chapterUpcoming: string;
    chapterLocked: string;
  };
  // Resource types
  resourceType: {
    reading: string;
    video: string;
    exercise: string;
    readingPlural: string;
    videoPlural: string;
    exercisePlural: string;
  };
  // Progress
  progress: {
    overallProgress: string;
    resourcesComplete: string;
    pathComplete: string;
    keepGoing: string;
  };
  // Resource actions
  resource: {
    markComplete: string;
    markIncomplete: string;
    markAs: (title: string, done: boolean) => string;
    openInNewTab: (title: string) => string;
    min: string;
  };
  // Home page
  home: {
    meta: string;
    headline1: string;
    lede: string;
    continuePhase: (order: string) => string;
    startPhase: (order: string) => string;
    seeRoadmap: string;
    browseChapters: string;
    eyebrow1: string;
    sectionTitle1a: string;
    sectionTitle1b: string;
    eyebrow2: string;
    sectionTitle2a: string;
    sectionTitle2b: string;
    progressDescription: string;
    ctaTitle: string;
    ctaHighlight: string;
    statPhases: string;
    statResources: string;
    statHours: string;
  };
  // Chapter page
  chapter: {
    notFoundTitle: string;
    notFoundDesc: string;
    backToPath: string;
    backToRoadmap: string;
    overview: string;
    contents: string;
    resources: string;
    details: string;
    studyTime: string;
    videos: string;
    exercises: string;
    items: string;
    start: string;
    continue: string;
    viewContents: string;
  };
  // Video page
  video: {
    playVideo: string;
    rewind: string;
    playPause: string;
    aboutLesson: string;
    materials: string;
    upNext: string;
    noMaterials: string;
    materialsHint: string;
    completed: string;
    markAsDone: string;
    resourceNotFound: string;
    watch: (title: string) => string;
    open: (title: string) => string;
  };
  // Search
  search: {
    phase: (order: number, title: string) => string;
  };
  // Footer
  footer: {
    copyright: string;
    resetProgress: string;
    resetConfirm: string;
  };
  // Placeholder pages
  placeholder: {
    comingSoon: string;
    myContentDesc: string;
    catalogDesc: string;
    projectsDesc: string;
    eventsDesc: string;
    forumDesc: string;
    helpDesc: string;
  };
  // My Content page
  myContent: {
    title: string;
    description: string;
    overallProgress: string;
    resourcesDone: string;
    phasesCompleted: string;
    hoursStudied: string;
    inProgress: string;
    completed: string;
    noProgress: string;
    noProgressDesc: string;
    startLearning: string;
    chapterProgress: (done: number, total: number) => string;
    ofTotal: (n: number) => string;
  };
  // Catalog page
  catalogPage: {
    title: string;
    description: string;
    totalPhases: string;
    totalChapters: string;
    totalResources: string;
    showChapters: string;
    hideChapters: string;
    readings: string;
    videos: string;
    exercises: string;
  };
  // Projects page
  projectsPage: {
    title: string;
    description: string;
    totalExercises: string;
    completedCount: string;
    noExercises: string;
    noExercisesDesc: string;
    fromChapter: (title: string) => string;
    duration: (min: number) => string;
  };
  // Events page
  eventsPage: {
    title: string;
    description: string;
    comingSoon: string;
    comingSoonDesc: string;
    notifyMe: string;
    emailPlaceholder: string;
    tba: string;
    sampleEvent1Title: string;
    sampleEvent1Date: string;
    sampleEvent1Tag: string;
    sampleEvent2Title: string;
    sampleEvent2Date: string;
    sampleEvent2Tag: string;
    sampleEvent3Title: string;
    sampleEvent3Date: string;
    sampleEvent3Tag: string;
  };
  // Help page
  helpPage: {
    title: string;
    description: string;
    gettingStarted: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    faq: string;
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
    faq4Q: string;
    faq4A: string;
    faq5Q: string;
    faq5A: string;
    faq6Q: string;
    faq6A: string;
    needHelp: string;
    needHelpDesc: string;
    joinCommunity: string;
  };
  // Roadmap SVG
  roadmap: {
    svgTitle: string;
  };
  // Milestone card (phase card on roadmap)
  milestone: {
    locked: (title: string) => string;
    openChapter: (title: string) => string;
  };
  // Phase page
  phase: {
    chapters: string;
    backToRoadmap: string;
    chapterCount: (n: number) => string;
    resourceCount: (n: number) => string;
  };
  // Theme
  theme: {
    dark: string;
    light: string;
    system: string;
  };
  // Language
  language: {
    label: string;
  };
}
