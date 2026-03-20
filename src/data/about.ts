import { TimelineEntry, SocialLink } from '@/types';

export const introduction = {
  quote: '어떤 상상이든 현실로 만드는 공간',
  paragraphs: [
    { text: '키시는 관심있는 주제를 구체화하여 상품이나 서비스로 실현해내는 크리에이터입니다.', highlights: ['크리에이터'] },
    { text: '비주얼노벨을 기반으로 한 다양한 장르의 게임을 기획하고, 구성하고, 제작해나가고 있습니다.', highlights: ['게임', '기획', '구성', '제작'] },
    { text: 'Live2D, 작곡, 영상 편집 등 다양한 분야에서도 활동하고 있습니다.', highlights: ['Live2D', '작곡', '영상 편집'] },
    { text: '최근에는 디지털 드로잉을 연습하고 있습니다. 언젠가 흑백만화를 그리는 것이 목표입니다.', highlights: ['디지털 드로잉', '흑백만화'] },
    { text: '관심이 가는 활동이라면 여러 가지 자료를 찾아보며 공부하는 것을 좋아합니다.' },
    { text: '키시가 펼치는 이상과 낭만의 이야기, 그 여정에 함께하세요.', highlights: ['이상과 낭만'] },
  ],
};

export const education: TimelineEntry[] = [
  {
    year: '2021.03 ~ 2024.02',
    title: 'B.S.',
    subtitle: 'Computer Engineering, Inha University, February 2024',
  },
  {
    year: '2024.03 ~ 2026.02',
    title: 'M.S.',
    subtitle: 'Electrical and Computer Engineering, Inha University, February 2026',
  },
  {
    year: '2026 ~',
    title: 'QueryPie Inc.',
    subtitle: 'AI Platform & Service',
    active: true,
  },
];

export const affiliations: TimelineEntry[] = [
  { year: '2014 ~ 2018', title: 'Team HSG', subtitle: '대표', active: false },
  { year: '2018 ~ 2020', title: 'Team Akishiro -business', subtitle: '대표', active: false },
  { year: '2018 ~ 2019', title: 'RoS', subtitle: '총관리자', active: false },
  { year: '2023 ~ 2024', title: 'Team 달코믹', subtitle: '대표 & 코스플레이어', active: false },
  { year: '2019 ~', title: 'Team Campana', subtitle: '대표', active: true },
  { year: '2023 ~', title: 'Team 루키박스', subtitle: '주 개발자', active: true },
  { year: '2024 ~ 2025', title: 'StoneIron', subtitle: '몰루제 행정실장', active: false },
  { year: '2025 ~', title: 'Team 시로하네', subtitle: '작가', active: true },
];


export const socialLinks: SocialLink[] = [
  { name: 'X (Twitter)', url: 'https://x.com/SI_kishi', icon: 'twitter' },
  { name: 'Pixiv', url: 'https://www.pixiv.net/users/62797148', icon: 'pixiv' },
  { name: 'YouTube', url: 'https://www.youtube.com/@%ED%82%A4%EC%8B%9C', icon: 'youtube' },
  { name: 'GitHub', url: 'https://github.com/StoneIron02', icon: 'github' },
];
