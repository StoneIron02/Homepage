# /update-docs

코드 변경 후 README.md와 CLAUDE.md를 점검·갱신하는 스킬.

## 절차

1. **변경사항 분석**: `git diff --cached --name-only` 및 `git diff --name-only`로 최근 변경된 파일 목록 확인
2. **README.md 점검**: 기술 스택, 프로젝트 구조(`src/` 디렉토리), 명령어(`package.json` scripts), 주요 라이브러리(`package.json` dependencies)가 현재 코드와 일치하는지 비교 후 불일치 시 갱신
3. **CLAUDE.md 점검**: 아키텍처, 명령어, 라이브러리, 스타일링 규칙, 타입 정의 등이 변경됐으면 갱신
4. **CLAUDE.md 글자수 체크**: 갱신 후 2000자 초과 시 경고하고, 불필요한 내용 압축·제거를 제안

## 점검 항목

### README.md
- 프로젝트 구조 트리가 실제 `src/` 디렉토리와 일치하는지
- 기술 스택 목록이 `package.json` dependencies와 일치하는지
- 시작 방법의 명령어가 `package.json` scripts와 일치하는지

### CLAUDE.md
- 명령어 섹션이 `package.json` scripts와 일치하는지
- 아키텍처 섹션이 실제 라우트/컴포넌트 구조와 일치하는지
- 주요 라이브러리 섹션이 `package.json` dependencies와 일치하는지
- 스타일링 규칙이 `globals.css` 및 설정 파일과 일치하는지
- 타입 정의 섹션이 `src/types/index.ts`의 export와 일치하는지

## 규칙

- 변경이 필요 없으면 "문서가 최신 상태입니다"라고 보고
- 변경 시 diff를 보여주고 사용자 확인 후 적용
- CLAUDE.md는 2000자 이내로 유지 — 초과 시 압축 제안
