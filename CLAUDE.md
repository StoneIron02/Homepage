# CLAUDE.md

## 명령어

- `npm run dev` — 개발 서버 (localhost:3000)
- `npm run build` — 정적 빌드 (`out/` 출력)
- `npm run lint` — ESLint (core-web-vitals + TypeScript)
- 테스트 프레임워크 미설정

## 아키텍처

- **정적 익스포트** — `next.config.ts`에서 `output: 'export'`, 이미지 비최적화. 서버 기능 없음.
- **싱글 페이지** — `src/app/page.tsx`가 유일한 라우트. 4개 섹션: Hero → About → Projects → Contact.
- **데이터 분리** — `src/data/`에 콘텐츠 데이터 관리. 수정 시 data 파일만 변경.
- **타입 정의** — `src/types/index.ts`에 공유 인터페이스 집중.

## 스타일링

- Tailwind CSS v4. `globals.css`에서 `@theme inline`으로 커스텀 토큰 정의.
- 커스텀 애니메이션(커튼, 궤도, 부유, 타이핑 커서 등)은 `globals.css`에 정의.
- 폰트: Pretendard (CDN, `--font-sans`). 경로 별칭: `@/*` → `./src/*`

## 주요 라이브러리

- **framer-motion** — 애니메이션 / **@tsparticles** — 파티클 배경
- **lenis** — 스무스 스크롤 (`page.tsx` 초기화) / **lucide-react** — 아이콘

## 커밋 규칙

- Conventional Commits: `type(scope): 설명` (한국어)
- 타입: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`, `perf`
- 한 커밋에 하나의 논리적 변경만 포함

## 참고 사항

- 사이트 언어는 한국어 (`lang="ko"`). UI 텍스트는 한국어로 작성.
- 스무스 스크롤은 Lenis 관리 → CSS `scroll-behavior: auto`.
- `/history` 스킬로 history 브랜치 스냅샷 조회·비교·롤백 가능. Stop hook이 자동 스냅샷 생성.

## 문서 관리

- CLAUDE.md는 **2000자 이내** 유지. 초과 시 압축·제거.
- 코드 변경 후 `/update-docs`로 README.md·CLAUDE.md 갱신 점검.
