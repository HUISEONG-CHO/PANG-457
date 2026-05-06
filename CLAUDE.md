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
- `src/App.tsx` — 최상위 컴포넌트, `screen` 상태로 현재 화면 관리 (`'main' | 'game'`)
- `src/screens/` — 화면 단위 컴포넌트 디렉토리
- `index.html` — Vite HTML 진입점

TypeScript는 **bundler 모드** (`moduleResolution: bundler`)로 설정되어 있고, `noUnusedLocals` / `noUnusedParameters`가 활성화되어 있어 미사용 변수는 빌드 에러로 처리됩니다.

---

## 개발 계획

전체 계획: [`docs/PLAN.md`](docs/PLAN.md) — 11단계 Phase 구성

### Phase별 설계 문서

각 Phase의 상세 설계는 [`docs/design/`](docs/design/) 디렉토리에 위치한다.  
새 Phase 설계 시 `docs/design/phaseN.md` 파일을 추가하고 아래 표에 등록한다.

| Phase | 목표 | 설계 문서 | 상태 |
|-------|------|-----------|------|
| 1 | 메인 화면 UI | [phase1.md](docs/design/phase1.md) | 설계 완료 |
| 2 | 화면 전환 | — | 예정 |
| 3 | 플레이어 이동 | — | 예정 |
| 4 | 풍선 물리 | — | 예정 |
| 5 | 작살 발사 | — | 예정 |
| 6 | 풍선 분열 + 충돌 | — | 예정 |
| 7 | 라이프 + 게임 오버 | — | 예정 |
| 8 | 스테이지 클리어 + Mission 1 | — | 예정 |
| 9 | 점수 + HUD | — | 예정 |
| 10 | 아이템 | — | 예정 |
| 11 | 배경 + 사운드 + 연출 | — | 예정 |
