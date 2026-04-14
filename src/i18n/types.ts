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
    live: string;
    headline1: string;
    headline2: string;
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
  // Roadmap SVG
  roadmap: {
    svgTitle: string;
  };
  // Milestone card
  milestone: {
    locked: (title: string) => string;
    openChapter: (title: string) => string;
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
