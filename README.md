# KISHI Homepage

크리에이터 KISHI(키시)의 개인 포트폴리오 홈페이지입니다.

상상을 현실로 만드는 크리에이터의 작업물과 소개를 담고 있습니다.

## 기술 스택

- **프레임워크:** Next.js 16 (App Router)
- **언어:** TypeScript, React 19
- **스타일링:** Tailwind CSS v4
- **애니메이션:** Framer Motion, tsParticles
- **스크롤:** Lenis (스무스 스크롤)
- **폰트:** Pretendard

## 시작하기

### 요구사항

- Node.js 18 이상
- npm

### 종속성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속합니다.

### 빌드

정적 사이트로 빌드됩니다. 빌드 결과물은 `out/` 디렉토리에 출력됩니다.

```bash
npm run build
```

### 린트

```bash
npm run lint
```

## 프로젝트 구조

```
src/
├── app/                 # Next.js App Router (레이아웃, 페이지, 글로벌 스타일)
├── components/
│   ├── layout/          # 로딩 스크린, 내비게이션
│   ├── providers/       # 컨텍스트 프로바이더 (모션)
│   ├── sections/        # 페이지 섹션 (Hero, About, Projects, Contact)
│   └── ui/              # 재사용 UI 컴포넌트 (애니메이션, 카드, 아이콘 등)
├── data/                # 정적 콘텐츠 데이터 (프로젝트, 소개, 스킬)
├── hooks/               # 커스텀 React 훅
├── lib/                 # 애니메이션 및 파티클 설정
└── types/               # TypeScript 타입 정의
```
