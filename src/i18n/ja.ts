import type { Dictionary } from './index';

const ja: Dictionary = {
  meta: {
    title: 'KISHI — 理想を追うクリエイター',
    description: '想像を現実にするクリエイター、キシのポートフォリオ。',
    ogDescription: '想像を現実に変えていくキシの物語。',
  },
  nav: {
    hero: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  loading: {
    skip: 'クリックでスキップ',
  },
  hero: {
    caption: 'Creator pursuing ideals',
    subtitle: 'キシ',
    typewriter: '理想を追うクリエイター',
    scroll: 'Scroll',
  },
  about: {
    title: 'ABOUT',
    background: 'Background',
    activities: 'Activities',
    interests: 'Interests',
    introduction: {
      quote: 'どんな想像も現実にする空間',
      paragraphs: [
        { text: 'キシは興味のあるテーマを具体化し、商品やサービスとして実現するクリエイターです。', highlights: ['クリエイター'] },
        { text: 'ビジュアルノベルを基盤とした様々なジャンルのゲームを企画・構成・制作しています。', highlights: ['ゲーム', '企画', '構成', '制作'] },
        { text: 'Live2D、作曲、映像編集など、多様な分野でも活動しています。', highlights: ['Live2D', '作曲', '映像編集'] },
        { text: '最近はデジタルドローイングを練習中。いつか白黒漫画を描くことが目標です。', highlights: ['デジタルドローイング', '白黒漫画'] },
        { text: '興味のある活動なら、様々な資料を調べて勉強することが好きです。' },
        { text: 'キシが繰り広げる理想とロマンの物語、その旅にご一緒ください。', highlights: ['理想とロマン'] },
      ],
    },
    education: [
      { year: '2021.03 ~ 2024.02', title: 'B.S.', subtitle: 'Computer Engineering, Inha University, February 2024' },
      { year: '2024.03 ~ 2026.02', title: 'M.S.', subtitle: 'Electrical and Computer Engineering, Inha University, February 2026' },
      { year: '2026 ~', title: 'QueryPie Inc.', subtitle: 'AI Platform & Service', active: true },
    ],
    affiliations: [
      { year: '2014 ~ 2018', title: 'Team HSG', subtitle: '代表' },
      { year: '2018 ~ 2020', title: 'Team 秋城 -business', subtitle: '代表' },
      { year: '2018 ~ 2019', title: 'RoS', subtitle: '総管理者' },
      { year: '2019 ~', title: 'Team Campana', subtitle: '代表', active: true },
      { year: '2023 ~', title: 'Team ルーキーボックス', subtitle: 'メイン開発者', active: true },
      { year: '2023 ~ 2024', title: 'Team ダルコミック', subtitle: '代表 & コスプレイヤー' },
      { year: '2024 ~ 2025', title: 'StoneIron', subtitle: 'モルジェ 行政室長' },
      { year: '2025 ~', title: 'Team しろハネ', subtitle: '作家', active: true },
    ],
  },
  projects: {
    title: 'PROJECTS',
    developing: 'DEVELOPING',
    completed: 'COMPLETED',
    items: {
      gdd: {
        title: 'ゲーム開発部の奇妙な冒険.exe ～手伝って、先生！～',
        subtitle: 'Blue Archive Fan Game',
        description: 'ブルーアーカイブJP周年アートコンテスト出品作。ある日アリスが持ってきた怪しいゲームタイトル。先生とゲーム開発部はそのゲームをプレイし、気がつけば…新たな冒険の世界が！',
      },
      shittim: {
        title: 'シッテムの箱',
        subtitle: 'Blue Archive Utility Website',
        description: 'ブルーアーカイブ関連資料を便利に閲覧できるサイト。キャラクターイラストやストーリーを簡単に見られるよう改善。',
      },
      boothmoa: {
        title: 'BoothMoa',
        subtitle: 'Doujin Support Website',
        description: '各種同人イベントのブース配置図をもとに、各ブースを簡単に探せるサイト。参加サークル情報やインフォをまとめて確認可能。',
      },
      mollufestival: {
        title: 'モルジェ',
        subtitle: 'Blue Archive Unofficial Festival',
        description: '韓国のブルーアーカイブ非公式オンリーイベント。サークル＋ステージ＋コスプレの三拍子揃った同人イベント。',
      },
      myfirstsnow: {
        title: '私が初雪を迎える方法',
        subtitle: 'Visual Novel Game',
        description: '現代SF＆推理要素が加わったビジュアルノベルゲーム。\n主人公「スヒョン」とボードゲーム部のメンバーに襲いかかる闇とは何か、そして月の力とともにその運命の中で光を見つけることができるのか。\n「今年守れなかった約束を果たしに行くよ。今度こそ初雪を一緒に迎えよう。」',
      },
      'project-sk': {
        title: 'Project SK',
        subtitle: 'Dating Sim Game',
        description: 'ドキドキの新しい青春が始まる。詳細未公開。',
      },
    },
  },
  contact: {
    heading: '一緒に作りましょう',
    copyEmail: 'メールをコピー',
    copied: 'メールアドレスをクリップボードにコピーしました！',
    emailFallback: 'メールアドレスをコピーしてください：',
  },
};

export default ja;
