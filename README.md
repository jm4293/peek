# Peek

주식 정보 서비스 모노레포

## 기술 스택

| 영역 | 기술 |
|------|------|
| Backend | NestJS 11, TypeORM, MySQL |
| Frontend | Next.js 15, React 19 |
| Admin | Vite, React 19, Zustand |
| Package Manager | pnpm |

## 프로젝트 구조

```
peek/
├── apps/
│   ├── api/           # 메인 API 서버 (NestJS)
│   ├── api-admin/     # 어드민 API 서버 (NestJS)
│   ├── web/           # 사용자 웹 (Next.js)
│   └── web-admin/     # 어드민 웹 (Vite + React)
├── packages/
│   ├── database/      # DB 엔티티 및 레포지토리
│   └── shared/        # 공유 상수 및 타입
├── package.json
├── pnpm-workspace.yaml
├── nest-cli.json
└── tsconfig.json
```

## 시작하기

### 요구사항

- Node.js 20+
- pnpm 9+
- MySQL 8+

### 설치

```bash
pnpm install
```

### 환경변수 설정

각 앱에 필요한 환경변수 파일을 생성하세요:

```
apps/api/.env
apps/api-admin/.env
apps/web/.env.local
apps/web-admin/.env
```

### 개발 서버 실행

```bash
# API 서버
pnpm dev:api

# 어드민 API 서버
pnpm dev:api-admin

# API + 어드민 API 동시 실행
pnpm dev

# 사용자 웹
pnpm dev:web

# 어드민 웹
pnpm dev:web-admin
```

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `pnpm dev` | API + Admin API 동시 실행 |
| `pnpm dev:api` | API 개발 서버 |
| `pnpm dev:api-admin` | Admin API 개발 서버 |
| `pnpm dev:web` | 웹 개발 서버 |
| `pnpm dev:web-admin` | 어드민 웹 개발 서버 |
| `pnpm build` | 전체 빌드 |
| `pnpm build:api` | API 빌드 |
| `pnpm build:web` | 웹 빌드 |
| `pnpm lint` | 전체 린트 |
| `pnpm format` | 코드 포맷팅 |
| `pnpm clean` | 빌드 파일 삭제 |
| `pnpm clean:modules` | 모든 node_modules 삭제 |
| `pnpm clean:all` | 빌드 + node_modules 삭제 |

## 패키지 의존 관계

```
@peek/api         → @peek/database, @peek/shared
@peek/api-admin   → @peek/database, @peek/shared
@peek/web         → @peek/shared
@peek/web-admin   → @peek/shared
```

## 배포

### Frontend (AWS Amplify)

```bash
pnpm build:web
# Output: apps/web/.next
```

### Backend (AWS EC2)

```bash
pnpm build:api
pnpm start:prod
# 또는 PM2: pm2 start dist/apps/api/main.js
```
