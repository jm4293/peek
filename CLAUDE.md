# Peek 모노레포

주식 정보 서비스 모노레포 프로젝트

## 프로젝트 구조

```
peek/
├── apps/
│   ├── api/           # NestJS 메인 API (포트: 3000)
│   ├── api-admin/     # NestJS 어드민 API (포트: 3001)
│   ├── web/           # Next.js 사용자 웹 (포트: 4000)
│   └── web-admin/     # Vite + React 어드민 웹 (포트: 5173)
├── packages/
│   ├── database/      # 공유 DB 엔티티/레포지토리
│   └── shared/        # 공유 상수/타입
```

## 기술 스택

| 앱 | 프레임워크 | 상태관리 | 스타일 |
|----|-----------|---------|--------|
| api | NestJS 11, TypeORM | DI | - |
| api-admin | NestJS 11, TypeORM | DI | - |
| web | Next.js 15, React 19 | TanStack Query + Jotai | Tailwind |
| web-admin | Vite, React 19 | TanStack Query + Zustand | Tailwind |

## 주요 명령어

```bash
# 개발
pnpm dev:api          # API 서버
pnpm dev:api-admin    # Admin API 서버
pnpm dev:web          # 웹
pnpm dev:web-admin    # 어드민 웹

# 빌드
pnpm build:api
pnpm build:web

# 정리
pnpm clean            # dist 삭제
pnpm clean:all        # dist + node_modules 삭제
```

## 경로 별칭 (Path Alias)

```typescript
// Backend
@peek/*              → apps/api/src/*
@peek-admin/*        → apps/api-admin/src/*
@libs/database/*     → packages/database/src/*
@libs/shared/const/* → packages/shared/src/const/*

// workspace 참조
@peek/database       → packages/database
@peek/shared         → packages/shared
```

## 패키지 의존 관계

```
@peek/api         → @peek/database, @peek/shared
@peek/api-admin   → @peek/database, @peek/shared
@peek/web         → @peek/shared (향후)
@peek/web-admin   → @peek/shared (향후)
```

## 코드 컨벤션

### 파일 네이밍

| 패턴 | 용도 |
|------|------|
| `*.module.ts` | NestJS 모듈 |
| `*.controller.ts` | NestJS 컨트롤러 |
| `*.service.ts` | NestJS 서비스 |
| `*.repository.ts` | DB 레포지토리 |
| `*.entity.ts` | TypeORM 엔티티 |
| `*.dto.ts` | DTO |
| `*.const.ts` | 상수 |
| `*.atom.ts` | Jotai 상태 |
| `*.store.ts` | Zustand 상태 |
| `Component.tsx` | React 컴포넌트 (PascalCase) |

### 폴더 구조

| 폴더 | 용도 |
|------|------|
| `module/` | NestJS 기능 모듈 |
| `components/` | React 컴포넌트 |
| `hooks/` | Custom Hooks |
| `lib/` | 유틸리티 라이브러리 |
| `services/` | API 클라이언트 |
| `stores/` | 상태 관리 |
| `shared/` | 공유 타입/상수 |
| `utils/` | 유틸 함수 |

## Git 커밋 규칙

- 커밋 전 `console.log` 자동 검사 (husky + lint-staged)
- console.log가 있으면 커밋 차단됨

## 환경변수

각 앱별 환경변수 파일 필요:
- `apps/api/.env`
- `apps/api-admin/.env`
- `apps/web/.env.local`
- `apps/web-admin/.env`
