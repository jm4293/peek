# Peek 모노레포

주식 정보 서비스 모노레포 프로젝트

## 프로젝트 구조

```
peek/
├── apps/
│   ├── api/           # NestJS 메인 API (포트: 3000)
│   ├── api-admin/     # NestJS 어드민 API (포트: 3001)
│   ├── web/           # Next.js 사용자 웹 (포트: 3000)
│   └── web-admin/     # Vite + React 어드민 웹 (포트: 5173)
├── packages/
│   ├── database/      # 공유 DB 엔티티/레포지토리
│   └── shared/        # 공유 상수/타입
```

## 기술 스택

| 앱        | 프레임워크           | 상태관리                 | 스타일   |
| --------- | -------------------- | ------------------------ | -------- |
| api       | NestJS 11, TypeORM   | DI                       | -        |
| api-admin | NestJS 11, TypeORM   | DI                       | -        |
| web       | Next.js 15, React 19 | TanStack Query + Jotai   | Tailwind |
| web-admin | Vite, React 19       | TanStack Query + Zustand | Tailwind |

## 주요 명령어

```bash
# 개발
pnpm dev              # API + Admin API 동시 실행
pnpm dev:api          # API 서버
pnpm dev:api-admin    # Admin API 서버
pnpm dev:web          # 웹
pnpm dev:web-admin    # 어드민 웹

# 빌드
pnpm build            # 전체 빌드
pnpm build:api        # API 빌드
pnpm build:api-admin  # Admin API 빌드
pnpm build:web        # 웹 빌드
pnpm build:web-admin  # 어드민 웹 빌드

# 정리
pnpm clean            # dist 삭제
pnpm clean:modules    # node_modules 삭제
pnpm clean:all        # dist + node_modules 삭제

# 포맷팅/린트
pnpm format           # Prettier 포맷팅
pnpm lint             # ESLint 검사
```

## 경로 별칭 (Path Alias)

### apps/api

```typescript
@app/api/config         → apps/api/src/config
@app/api/decorator      → apps/api/src/decorator
@app/api/handler        → apps/api/src/handler
@app/api/module/*       → apps/api/src/module/*
@app/api/shared         → apps/api/src/shared
@app/api/type           → apps/api/src/type

@packages/database/entities     → packages/database/src/entities
@packages/database/repositories → packages/database/src/repositories
@packages/shared/constant       → packages/shared/src/constants
```

### apps/api-admin

```typescript
@app/api-admin/config/*    → apps/api-admin/src/config/*
@app/api-admin/decorator/* → apps/api-admin/src/decorator/*
@app/api-admin/handler/*   → apps/api-admin/src/handler/*
@app/api-admin/module/*    → apps/api-admin/src/module/*
@app/api-admin/shared/*    → apps/api-admin/src/shared/const/*
@app/api-admin/type/*      → apps/api-admin/src/type/*

@packages/database/entities     → packages/database/src/entities
@packages/database/repositories → packages/database/src/repositories
@packages/shared/constant       → packages/shared/src/constant
```

### apps/web

```typescript
@app/web/board/*      → apps/web/app/(main)/board/*
@app/web/home/*       → apps/web/app/(main)/home/*
@app/web/stock/*      → apps/web/app/(main)/stock/*
@app/web/user/*       → apps/web/app/(main)/user/*
@app/web/auth/*       → apps/web/app/(auth)/auth/*

@app/web/assets/*     → apps/web/assets/*
@app/web/components/* → apps/web/components/*
@app/web/hooks/*      → apps/web/hooks/*
@app/web/lib/*        → apps/web/lib/*
@app/web/public/*     → apps/web/public/*
@app/web/services/*   → apps/web/services/*
@app/web/shared/*     → apps/web/shared/*
@app/web/stores/*     → apps/web/stores/*
@app/web/types/*      → apps/web/types/*
@app/web/utils/*      → apps/web/utils/*
```

### apps/web-admin

```typescript
@/* → apps/web-admin/src/*
```

## 패키지 의존 관계

```
@apps/api         → @packages/database, @packages/shared
@apps/api-admin   → @packages/database, @packages/shared
@packages/database → @packages/shared
```

## 코드 컨벤션

### 파일 네이밍

| 패턴                | 용도                        |
| ------------------- | --------------------------- |
| `*.module.ts`       | NestJS 모듈                 |
| `*.controller.ts`   | NestJS 컨트롤러             |
| `*.service.ts`      | NestJS 서비스               |
| `*.repository.ts`   | DB 레포지토리               |
| `*.entity.ts`       | TypeORM 엔티티              |
| `*.dto.ts`          | DTO                         |
| `*.constant.ts`     | 상수                        |
| `*.atom.ts`         | Jotai 상태 (web)            |
| `*.store.ts`        | Zustand 상태 (web-admin)    |
| `Component.tsx`     | React 컴포넌트 (PascalCase) |

### 폴더 구조

| 폴더          | 용도                   |
| ------------- | ---------------------- |
| `module/`     | NestJS 기능 모듈       |
| `config/`     | NestJS 설정            |
| `decorator/`  | 커스텀 데코레이터      |
| `handler/`    | 핸들러/유틸리티        |
| `components/` | React 컴포넌트         |
| `hooks/`      | Custom Hooks           |
| `lib/`        | 유틸리티 라이브러리    |
| `services/`   | API 클라이언트         |
| `stores/`     | 상태 관리              |
| `shared/`     | 공유 타입/상수         |
| `utils/`      | 유틸 함수              |

## Git 커밋 규칙

- 커밋 전 `console.log` 자동 검사 (husky + lint-staged)
- console.log가 있으면 커밋 차단됨

## 환경변수

각 앱별 환경변수 파일 필요:

- `apps/api/.env`
- `apps/api-admin/.env`
- `apps/web/.env.local`
- `apps/web-admin/.env`

## nest-cli.json

모노레포 설정 파일로 NestJS 프로젝트들을 관리:

- `api` - 메인 API (SWC 빌더 사용)
- `api-admin` - 어드민 API (SWC 빌더 사용)
- `shared` - 공유 라이브러리
- `database` - DB 엔티티/레포지토리 라이브러리
