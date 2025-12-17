# Peek Admin API

[![NestJS](https://img.shields.io/badge/NestJS-11-red?logo=nestjs)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TypeORM](https://img.shields.io/badge/TypeORM-0.3-orange)](https://typeorm.io/)

> 주식 정보 서비스 관리자 API 서버

## 기술 스택

- **프레임워크**: NestJS 11
- **언어**: TypeScript 5
- **ORM**: TypeORM
- **데이터베이스**: MySQL 8

## API 서버와의 차이점

| 항목 | API | API-Admin |
|------|-----|-----------|
| 용도 | 사용자 서비스 | 관리자 기능 |
| 모듈 수 | 13개 | 4개 |
| WebSocket | O | X |
| 스케줄러 | O | X |
| 이미지 업로드 | O | X |
| AWS S3 | O | X |

## 시작하기

### 요구사항

- Node.js 20+
- pnpm 9+
- MySQL 8+

### 설치

루트 디렉토리에서:

```bash
pnpm install
```

### 환경변수 설정

`apps/api-admin/.env` 파일 생성:

```env
# Database
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=password
DB_DATABASE=peek

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
```

### 개발 서버 실행

```bash
# 루트에서
pnpm dev:api-admin

# 또는 직접
nest start --watch api-admin
```

서버가 [http://localhost:3001](http://localhost:3001)에서 실행됩니다.

## 주요 스크립트

| 명령어 | 설명 |
|--------|------|
| `pnpm dev:api-admin` | 개발 서버 (watch 모드) |
| `pnpm build:api-admin` | 프로덕션 빌드 |

## 프로젝트 구조

```
src/
├── main.ts           # 엔트리포인트
├── app.module.ts     # 루트 모듈
├── config/           # 설정
│   ├── config-module/
│   ├── jwt/
│   └── typeorm/
├── handler/          # 유틸 핸들러
│   └── bcrypt/
├── module/           # 기능 모듈
│   ├── auth/         # 관리자 인증
│   ├── board/        # 게시판 관리
│   ├── stock/        # 주식 데이터 관리
│   └── user/         # 사용자 관리
├── shared/const/     # 상수
└── type/dto/         # DTO
```

## 기능 모듈

| 모듈 | 설명 | 주요 기능 |
|------|------|----------|
| auth | 관리자 인증 | 로그인, 토큰 갱신 |
| user | 사용자 관리 | 조회, 수정, 삭제, 상태 변경 |
| board | 게시판 관리 | 게시글 관리, 댓글 관리 |
| stock | 주식 관리 | 종목 정보 관리 |

## 배포

### 빌드

```bash
pnpm build:api-admin
```

### PM2로 실행

```bash
pm2 start dist/apps/api-admin/main.js --name peek-api-admin
```

## 작성자

**jm4293**

- GitHub: [@jm4293](https://github.com/jm4293)
