---
name: remove-dead-code
description: 프로젝트에서 사용되지 않는 코드(미사용 파일, export, CSS, 중복 import 등)를 탐색하고 정리합니다.
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Bash(npm run build*), Bash(npm run lint*)
---

# 데드 코드 정리

프로젝트에서 사용되지 않는 코드를 탐색하고, 사용자 승인 후 정리합니다.

## 1단계: 탐색

에이전트를 사용하지 않고, 직접 Glob과 Grep을 사용하여 순차적으로 조사합니다.

### 1-1. 미사용 파일
- `src/` 디렉토리 내 모든 `.ts`, `.tsx` 파일을 Glob으로 나열합니다.
- 엔트리포인트(`page.tsx`, `layout.tsx`, `globals.css`)와 Next.js 특수 파일(`not-found.tsx`, `robots.ts`, `sitemap.ts`)은 제외합니다.
- 각 파일에 대해 **두 가지 방법**으로 import 여부를 확인합니다:
  1. 파일의 basename(확장자 제외)으로 Grep (예: `ScrollProgress`)
  2. 파일의 상대 경로 패턴으로 Grep (예: `ui/ScrollProgress`)
- 두 검색 모두 다른 파일에서 매치가 없는 경우에만 미사용으로 판정합니다.

### 1-2. 미사용 export
- 각 모듈 파일을 Read로 읽어 `export` 키워드로 내보내는 심볼을 추출합니다.
- 해당 심볼이 프로젝트 내 **다른 파일**에서 import 또는 참조되고 있는지 Grep으로 확인합니다.
- `export default`는 파일 자체의 import 여부로 판단합니다 (1-1과 연동).
- 참조되지 않는 named export 목록을 작성합니다.

### 1-3. 미사용 CSS
- `src/app/globals.css`를 Read로 읽어 `@keyframes` 이름과 커스텀 클래스 선택자를 추출합니다.
- `@theme inline` 블록 내 CSS 변수는 Tailwind이 관리하므로 제외합니다.
- 각 항목에 대해 Grep으로 확인합니다:
  - `@keyframes` 이름: `.tsx`, `.ts`, `.css` 파일에서 해당 이름이 `animation` 속성이나 클래스명에 사용되는지 확인.
  - 클래스 선택자: `.` 접두사를 제거한 이름(예: `animate-float`)으로 `.tsx`, `.ts` 파일의 `className` 속성 내에서 검색.
- 참조되지 않는 keyframes/클래스 목록을 작성합니다.

### 1-4. 중복 import
- 각 `.ts`, `.tsx` 파일을 Read로 읽어 import 문의 모듈 경로(from 뒤의 문자열)를 추출합니다.
- 같은 모듈 경로가 2줄 이상에 걸쳐 나타나는 경우를 중복으로 판정합니다.
- 중복 import 목록을 작성합니다.

## 2단계: 이중 검증

보고 전에 발견된 각 항목을 반드시 직접 Grep으로 재확인합니다.
- 미사용 파일: 해당 파일명이 프로젝트 전체에서 정말 참조되지 않는지 `Grep(pattern: "파일명", path: "src/")` 로 최종 확인.
- 미사용 export: 해당 심볼명을 프로젝트 전체에서 Grep하여 정의 파일 외에 참조가 없는지 확인.
- 미사용 CSS: 해당 이름을 프로젝트 전체에서 Grep하여 참조가 없는지 확인.
- **검증에서 참조가 발견되면 해당 항목을 결과에서 제외합니다.**

## 3단계: 보고

탐색 결과를 카테고리별로 정리하여 사용자에게 보고합니다.

```
## 데드 코드 탐색 결과

### 미사용 파일 (N개)
- src/path/to/unused-file.ts

### 미사용 export (N개)
- src/path/to/file.ts: unusedFunction

### 미사용 CSS (N개)
- globals.css: @keyframes unusedAnimation

### 중복 import (N개)
- src/path/to/file.tsx: './module' (2줄)
```

발견된 항목이 없으면 "데드 코드가 발견되지 않았습니다."라고 보고합니다.

## 4단계: 확인

**중요:** 정리할 항목이 있는 경우, 반드시 사용자에게 확인을 요청합니다.
- "위 항목을 정리할까요?" 와 같이 명시적 승인을 받습니다.
- 사용자가 특정 항목만 제외하고 싶을 수 있으므로 선택할 기회를 줍니다.
- 승인 없이 절대 코드를 삭제하지 않습니다.

## 5단계: 정리 실행

사용자 승인을 받은 항목에 대해서만 정리를 실행합니다.
- 미사용 파일: 파일 삭제
- 미사용 export: `export` 키워드 제거 또는 해당 선언 전체 제거 (파일 내에서도 미사용인 경우)
- 미사용 CSS: 해당 규칙 블록 제거
- 중복 import: 하나의 import 문으로 병합

## 6단계: 검증

정리 완료 후 빌드와 린트를 실행하여 변경사항이 문제를 일으키지 않는지 확인합니다.

```bash
npm run build
npm run lint
```

- 빌드 또는 린트 실패 시 원인을 분석하고 수정합니다.
- 모든 검증을 통과하면 결과를 보고합니다.
