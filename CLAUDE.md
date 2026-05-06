# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 기술 스택

| 항목 | 버전 |
|------|------|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| ESLint | 10 (typescript-eslint, react-hooks, react-refresh) |

## 주요 명령어

```bash
npm run dev       # 개발 서버 실행 (http://localhost:5173)
npm run build     # 타입 체크 후 프로덕션 빌드 (tsc -b && vite build)
npm run preview   # 빌드 결과물 로컬 미리보기
npm run lint      # ESLint 검사
```

> 별도의 테스트 프레임워크(Vitest, Jest 등)는 설정되어 있지 않습니다. 테스트가 필요하다면 Vitest를 추가하는 것을 권장합니다.

## 테스트 방법

현재 자동화된 테스트는 없습니다. 수동 확인 절차:

1. `npm run dev` 실행
2. 브라우저에서 `http://localhost:5173` 접속
3. 타입 오류 확인: `npm run build` (빌드 실패 시 타입 에러 출력)
4. 린트 확인: `npm run lint`

## 아키텍처

- `src/main.tsx` — React 앱 진입점, `#root`에 마운트
- `src/App.tsx` — 최상위 컴포넌트
- `index.html` — Vite HTML 진입점

TypeScript는 **bundler 모드** (`moduleResolution: bundler`)로 설정되어 있고, `noUnusedLocals` / `noUnusedParameters`가 활성화되어 있어 미사용 변수는 빌드 에러로 처리됩니다.
