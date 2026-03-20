# /history

history 브랜치의 스냅샷을 조회·비교·롤백하는 스킬.

## 사전 조건
- `history` 브랜치가 존재해야 함 (`git rev-parse --verify refs/heads/history`)
- 없으면 "history 브랜치가 아직 없습니다. 파일 변경 후 자동 생성됩니다." 안내 후 종료

## 기능

### 1. 이력 조회 (기본 동작, 인자 없이 `/history` 실행 시)
- `git log history --oneline -20` 실행
- 각 스냅샷의 타임스탬프와 변경 파일 목록을 표로 정리

### 2. 스냅샷 비교 (`/history diff`)
- 인자 예: `/history diff 3` → 최근 3번째 스냅샷과 현재 비교
- `git diff history~N history -- .` 실행
- 변경사항을 요약하여 보고

### 3. 파일 복원 (`/history restore`)
- 인자 예: `/history restore 2 src/app/page.tsx` → 2번째 이전 스냅샷에서 해당 파일 복원
- `git show history~N:<파일경로>` 로 내용 확인 후 사용자에게 diff를 보여줌
- 사용자 확인 후 `git checkout history~N -- <파일경로>` 실행

### 4. 전체 롤백 (`/history rollback`)
- 인자 예: `//history rollback 3` → 3번째 이전 스냅샷 상태로 작업 트리 전체 복원
- **위험 작업** — 반드시 현재 변경사항 목록을 보여주고 사용자 확인 후 실행
- `git checkout history~N -- .` 실행

## 규칙
- 읽기 작업(조회, 비교)은 확인 없이 바로 실행
- 쓰기 작업(복원, 롤백)은 반드시 diff를 보여주고 사용자 확인 후 실행
- history 브랜치 자체는 절대 삭제·리셋하지 않음
