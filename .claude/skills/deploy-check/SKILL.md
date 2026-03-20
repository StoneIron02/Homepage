---
name: deploy-check
description: 배포 전 누락 항목 점검 (favicon, SEO, 404, 메타데이터, 보안, 접근성, CI/CD)
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Bash(npm run build*), Bash(npm run lint*)
---

# 배포 준비 체크

프로젝트의 배포 준비 상태를 점검하고, 누락된 항목을 보고합니다.

## 1단계: 프로젝트 감지

`package.json`과 빌드 설정 파일을 읽어 프로젝트 환경을 파악합니다.

- **프레임워크 감지**: `next.config.*` → Next.js, `vite.config.*` → Vite, `react-scripts` → CRA
- **배포 대상 추정**: `.github/workflows/` → GitHub Pages/Actions, `vercel.json` → Vercel, `netlify.toml` → Netlify
- 감지된 프레임워크에 따라 아래 체크 항목의 경로와 기준을 조정합니다.

## 2단계: 체크리스트 점검

병렬 에이전트를 사용하여 아래 8개 카테고리를 동시에 조사합니다.

### 2-1. Favicon

- `favicon.ico` 파일 존재 여부 확인
  - Next.js App Router: `src/app/favicon.ico`
  - Next.js Pages / 기타: `public/favicon.ico`
- `apple-touch-icon.png`, `icon.svg` 등 추가 아이콘 존재 여부 확인
- 메타데이터 또는 HTML에서 favicon 참조가 올바른지 확인

### 2-2. SEO 파일

- `robots.txt` 존재 여부 (파일 또는 Next.js `robots.ts` 생성 파일)
- `sitemap.xml` 존재 여부 (파일 또는 Next.js `sitemap.ts` 생성 파일)
- `robots.txt`에 `Sitemap:` 지시문이 포함되어 있는지 확인

### 2-3. 에러 페이지

- 404 페이지 존재 여부
  - Next.js App Router: `not-found.tsx`
  - Next.js Pages: `pages/404.tsx`
  - 정적 사이트: `public/404.html` 또는 `404.html`
- 커스텀 에러 페이지가 브랜딩에 맞게 작성되었는지 확인

### 2-4. 메타데이터

소스 파일(레이아웃, 페이지, HTML)에서 아래 항목을 Grep으로 확인합니다:

- `<title>` 또는 `metadata.title` 설정 여부
- `<meta name="description">` 또는 `metadata.description` 설정 여부
- `viewport` 메타 태그 설정 여부
- `canonical` URL 설정 여부
- Open Graph 태그 (`og:title`, `og:description`, `og:image`) 설정 여부
- `theme-color` 메타 태그 설정 여부

### 2-5. 보안

소스 파일 및 설정에서 아래 보안 헤더를 확인합니다:

- `Content-Security-Policy` (CSP) 헤더 또는 `<meta http-equiv="Content-Security-Policy">`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `X-Frame-Options` 또는 CSP `frame-ancestors`
- Next.js의 경우 `next.config.*`의 `headers()` 설정 확인
- 정적 사이트의 경우 `_headers` 파일 또는 서버 설정 확인

### 2-6. 접근성

- `<html lang="...">` 속성 설정 여부
- `prefers-reduced-motion` 미디어 쿼리 대응 여부 (CSS 또는 JS)
- 이미지 태그에 `alt` 속성 존재 여부 (Grep으로 `<img` 또는 `<Image`에서 `alt` 누락 탐색)
- 키보드 네비게이션 관련 요소 확인 (skip link, `tabIndex`, `focus` 스타일 등)
- `aria-label` 등 ARIA 속성 사용 여부

### 2-7. CI/CD

- 배포 워크플로우 파일 존재 여부
  - `.github/workflows/*.yml` — GitHub Actions
  - `vercel.json` — Vercel
  - `netlify.toml` — Netlify
- 워크플로우에 빌드 단계가 포함되어 있는지 확인

### 2-8. 빌드 설정

프레임워크별 빌드 설정의 적절성을 확인합니다:

- Next.js:
  - `output` 설정 (`export` for static, `standalone` for server)
  - `trailingSlash` 설정 (GitHub Pages 배포 시 `true` 권장)
  - `basePath` 설정 (서브 디렉토리 배포 시 필요)
  - `images.unoptimized` 설정 (정적 익스포트 시 `true` 필요)
- Vite: `base` 설정
- 기타: 빌드 출력 디렉토리 확인

## 3단계: 빌드 및 린트 검증

`npm run lint`와 `npm run build`를 순서대로 실행하여 코드 품질과 빌드를 검증합니다.

1. **린트** (`npm run lint`): ESLint 에러/경고 여부를 확인합니다.
2. **빌드** (`npm run build`): 빌드가 성공적으로 완료되는지 확인합니다.

- 린트 에러가 있으면 에러 내용을 보고합니다.
- 빌드 에러가 있으면 에러 내용을 보고합니다.
- 경고가 있으면 함께 보고합니다.

## 4단계: 결과 보고

체크리스트 결과를 카테고리별로 정리하여 보고합니다.

```
## 배포 준비 체크 결과

**프레임워크:** Next.js (App Router)
**배포 대상:** GitHub Pages

| 카테고리 | 상태 | 세부 |
|----------|------|------|
| Favicon | ✅ PASS | favicon.ico 확인 |
| SEO 파일 | ⚠️ WARN | sitemap.xml 없음 |
| 에러 페이지 | ✅ PASS | not-found.tsx 확인 |
| 메타데이터 | ✅ PASS | 모든 필수 태그 확인 |
| 보안 | ❌ MISSING | CSP 헤더 미설정 |
| 접근성 | ⚠️ WARN | skip link 없음 |
| CI/CD | ✅ PASS | deploy.yml 확인 |
| 빌드 설정 | ✅ PASS | 정적 익스포트 설정 확인 |
| 린트 | ✅ PASS | 에러/경고 없음 |
| 빌드 검증 | ✅ PASS | 에러 없음 |

### 권장사항
- [ ] `sitemap.xml` 또는 `sitemap.ts` 파일 추가
- [ ] Content-Security-Policy 헤더 설정
- [ ] Skip navigation 링크 추가
```

상태 기준:
- **✅ PASS**: 해당 항목이 올바르게 설정됨
- **⚠️ WARN**: 설정되어 있으나 개선이 필요하거나, 권장 항목이 누락됨
- **❌ MISSING**: 필수 항목이 누락됨

## 5단계: 수정 제안

누락된 항목이 있는 경우, 사용자에게 자동 수정 여부를 확인합니다.

- "누락된 항목을 자동으로 추가할까요?" 와 같이 명시적 승인을 요청합니다.
- 사용자가 특정 항목만 선택할 수 있도록 합니다.
- 승인 없이 절대 파일을 생성하거나 수정하지 않습니다.
