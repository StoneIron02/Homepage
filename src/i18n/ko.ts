import type { Dictionary } from './index';

const ko: Dictionary = {
  meta: {
    title: 'KISHI — 이상을 좇는 크리에이터',
    description: '상상을 현실로 만드는 크리에이터 키시의 포트폴리오.',
    ogDescription: '상상을 현실로 만들어가는 키시의 이야기.',
  },
  nav: {
    hero: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  loading: {
    skip: '클릭하여 건너뛰기',
  },
  hero: {
    caption: 'Creator pursuing ideals',
    subtitle: '키시',
    typewriter: '이상을 좇는 크리에이터',
    scroll: 'Scroll',
  },
  about: {
    title: 'ABOUT',
    background: 'Background',
    activities: 'Activities',
    interests: 'Interests',
    introduction: {
      quote: '어떤 상상이든 현실로 만드는 공간',
      paragraphs: [
        { text: '키시는 관심있는 주제를 구체화하여 상품이나 서비스로 실현해내는 크리에이터입니다.', highlights: ['크리에이터'] },
        { text: '비주얼노벨을 기반으로 한 다양한 장르의 게임을 기획하고, 구성하고, 제작해나가고 있습니다.', highlights: ['게임', '기획', '구성', '제작'] },
        { text: 'Live2D, 작곡, 영상 편집 등 다양한 분야에서도 활동하고 있습니다.', highlights: ['Live2D', '작곡', '영상 편집'] },
        { text: '최근에는 디지털 드로잉을 연습하고 있습니다. 언젠가 흑백만화를 그리는 것이 목표입니다.', highlights: ['디지털 드로잉', '흑백만화'] },
        { text: '관심이 가는 활동이라면 여러 가지 자료를 찾아보며 공부하는 것을 좋아합니다.' },
        { text: '키시가 펼치는 이상과 낭만의 이야기, 그 여정에 함께하세요.', highlights: ['이상과 낭만'] },
      ],
    },
    education: [
      { year: '2021.03 ~ 2024.02', title: 'B.S.', subtitle: 'Computer Engineering, Inha University, February 2024' },
      { year: '2024.03 ~ 2026.02', title: 'M.S.', subtitle: 'Electrical and Computer Engineering, Inha University, February 2026' },
      { year: '2026 ~', title: 'QueryPie Inc.', subtitle: 'AI Platform & Service', active: true },
    ],
    affiliations: [
      { year: '2014 ~ 2018', title: 'Team HSG', subtitle: '대표' },
      { year: '2018 ~ 2020', title: 'Team 아키시로 -business', subtitle: '대표' },
      { year: '2018 ~ 2019', title: 'RoS', subtitle: '총관리자' },
      { year: '2019 ~', title: 'Team Campana', subtitle: '대표', active: true },
      { year: '2023 ~', title: 'Team 루키박스', subtitle: '주 개발자', active: true },
      { year: '2023 ~ 2024', title: 'Team 달코믹', subtitle: '대표 & 코스플레이어' },
      { year: '2024 ~ 2025', title: 'StoneIron', subtitle: '몰루제 행정실장' },
      { year: '2025 ~', title: 'Team 시로하네', subtitle: '작가', active: true },
    ],
  },
  projects: {
    title: 'PROJECTS',
    developing: 'DEVELOPING',
    completed: 'COMPLETED',
    items: {
      gdd: {
        title: '기묘한 파일과 게임개발부의 모험.exe ~도와줘! 선생님!!~',
        subtitle: 'Blue Archive Fan Game',
        description: '블루아카이브 JP 주년 아트 공모전 출품작. 어느 날 아리스가 가져온 수상한 게임 타이틀. 선생님과 게임개발부는 그 게임을 플레이하게 되고, 정신을 차린 순간… 새로운 모험의 세계가!',
      },
      shittim: {
        title: '싯딤의 상자',
        subtitle: 'Blue Archive Utility Website',
        description: '게임 블루아카이브 관련 자료를 편하게 볼 수 있도록 제공하는 사이트. 캐릭터 일러스트나 스토리를 간편하게 볼 수 있도록 개선.',
      },
      boothmoa: {
        title: '부스모아',
        subtitle: 'Doujin Support Website',
        description: '각종 동인행사의 부스배치도를 바탕으로 각 부스를 쉽게 찾아볼 수 있게 만드는 사이트. 참가 서클 정보, 인포 등을 한 사이트에서 정리할 수 있도록 한다.',
      },
      mollufestival: {
        title: '몰루제',
        subtitle: 'Blue Archive Unofficial Festival',
        description: '한국의 블루아카이브 비공식 온리전. 서클 + 무대 + 코스프레 3박자를 갖춘 동인 행사.',
      },
      myfirstsnow: {
        title: '내가 첫눈을 맞이하는 방법',
        subtitle: 'Visual Novel Game',
        description: '현대 SF & 추리 요소가 가미된 비주얼노벨 게임.\n주인공 \'수현\'과 보드게임부 일원에게 들이닥치는 어둠이란 무엇일까, 그리고 그들은 달의 힘과 함께 그 운명 속에서 빛을 찾을 수 있을까.\n"올해 지키지 못한 약속을 지키러 갈게. 이번에는 꼭 첫눈을 맞이하자."',
      },
      'project-sk': {
        title: 'Project SK',
        subtitle: 'Dating Sim Game',
        description: '두근두근한 새로운 청춘이 시작된다. 세부 정보 미공개.',
      },
    },
  },
  contact: {
    heading: '함께 만들어가요',
    copyEmail: '이메일 복사',
    copied: '이메일이 클립보드에 복사되었습니다!',
    emailFallback: '이메일 주소를 복사하세요:',
  },
};

export default ko;
