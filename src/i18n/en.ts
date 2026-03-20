import type { Dictionary } from './index';

const en: Dictionary = {
  meta: {
    title: 'KISHI — A Creator Pursuing Ideals',
    description: 'Portfolio of Kishi, a creator who turns imagination into reality.',
    ogDescription: 'The story of Kishi, turning imagination into reality.',
  },
  nav: {
    hero: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  loading: {
    skip: 'Click to skip',
  },
  hero: {
    caption: 'Creator pursuing ideals',
    subtitle: 'Kishi',
    typewriter: 'A creator pursuing ideals',
    scroll: 'Scroll',
  },
  about: {
    title: 'ABOUT',
    background: 'Background',
    activities: 'Activities',
    interests: 'Interests',
    introduction: {
      quote: 'A space where any imagination becomes reality',
      paragraphs: [
        { text: 'Kishi is a creator who materializes topics of interest into products and services.', highlights: ['creator'] },
        { text: 'Planning, designing, and developing games of various genres based on visual novels.', highlights: ['games', 'Planning', 'designing', 'developing'] },
        { text: 'Also active in various fields such as Live2D, music composition, and video editing.', highlights: ['Live2D', 'music composition', 'video editing'] },
        { text: 'Recently practicing digital drawing. The goal is to someday create monochrome manga.', highlights: ['digital drawing', 'monochrome manga'] },
        { text: 'Enjoys researching and studying various materials for any activity of interest.' },
        { text: 'Join the journey of ideals and romance that Kishi unfolds.', highlights: ['ideals and romance'] },
      ],
    },
    education: [
      { year: '2021.03 ~ 2024.02', title: 'B.S.', subtitle: 'Computer Engineering, Inha University, February 2024' },
      { year: '2024.03 ~ 2026.02', title: 'M.S.', subtitle: 'Electrical and Computer Engineering, Inha University, February 2026' },
      { year: '2026 ~', title: 'QueryPie Inc.', subtitle: 'AI Platform & Service', active: true },
    ],
    affiliations: [
      { year: '2014 ~ 2018', title: 'Team HSG', subtitle: 'Leader' },
      { year: '2018 ~ 2020', title: 'Team Akishiro -business', subtitle: 'Leader' },
      { year: '2018 ~ 2019', title: 'RoS', subtitle: 'Chief Admin' },
      { year: '2019 ~', title: 'Team Campana', subtitle: 'Leader', active: true },
      { year: '2023 ~', title: 'Team RookieBox', subtitle: 'Lead Developer', active: true },
      { year: '2023 ~ 2024', title: 'Team DalComic', subtitle: 'Leader & Cosplayer' },
      { year: '2024 ~ 2025', title: 'StoneIron', subtitle: 'MolluFestival Admin Director' },
      { year: '2025 ~', title: 'Team ShiroHane', subtitle: 'Writer', active: true },
    ],
  },
  projects: {
    title: 'PROJECTS',
    developing: 'DEVELOPING',
    completed: 'COMPLETED',
    items: {
      gdd: {
        title: 'The Strange Files & Game Dev Club\'s Adventure ~Help! Sensei!!~',
        subtitle: 'Blue Archive Fan Game',
        description: 'Entry for the Blue Archive JP anniversary art contest. One day, Aris brings a suspicious game title. The teacher and Game Dev Club start playing it, and the moment they come to their senses... a new world of adventure!',
      },
      shittim: {
        title: 'Shittim Chest',
        subtitle: 'Blue Archive Utility Website',
        description: 'A website providing convenient access to Blue Archive game resources. Improved for easy browsing of character illustrations and stories.',
      },
      boothmoa: {
        title: 'BoothMoa',
        subtitle: 'Doujin Support Website',
        description: 'A website that makes it easy to find booths based on booth layout maps from various doujin events. Organizes participating circle information and infographics in one place.',
      },
      mollufestival: {
        title: 'MolluFestival',
        subtitle: 'Blue Archive Unofficial Festival',
        description: 'Korea\'s unofficial Blue Archive-only event. A doujin festival featuring circles, stage performances, and cosplay.',
      },
      myfirstsnow: {
        title: 'My First Snow',
        subtitle: 'Visual Novel Game',
        description: 'A visual novel game with modern sci-fi and mystery elements.\nWhat is the darkness that befalls protagonist \'Suhyeon\' and the board game club members, and can they find light in their destiny with the power of the moon?\n"I\'ll go keep the promise I couldn\'t keep this year. Let\'s see the first snow together this time."',
      },
      'project-sk': {
        title: 'Project SK',
        subtitle: 'Dating Sim Game',
        description: 'An exciting new youth story begins. Details undisclosed.',
      },
    },
  },
  contact: {
    heading: 'Let\'s Create Together',
    copyEmail: 'Copy email',
    copied: 'Email copied to clipboard!',
    emailFallback: 'Copy the email address:',
  },
};

export default en;
