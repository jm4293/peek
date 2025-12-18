# Peek API

[![NestJS](https://img.shields.io/badge/NestJS-11-red?logo=nestjs)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TypeORM](https://img.shields.io/badge/TypeORM-0.3-orange)](https://typeorm.io/)

> 주식 정보 서비스 메인 API 서버

## 기술 스택

### Core

- **프레임워크**: NestJS 11
- **언어**: TypeScript 5
- **ORM**: TypeORM
- **데이터베이스**: MySQL 8

### 인증 & 보안

- **JWT**: @nestjs/jwt
- **암호화**: bcrypt

### 실시간 통신

- **WebSocket**: Socket.io (@nestjs/websockets)

### 외부 서비스

- **클라우드**: AWS S3 (이미지 업로드)
- **알림**: Firebase Admin (푸시 알림)
- **주식 API**: KIS, 키움, LS

### 개발 도구

- **문서화**: Swagger (@nestjs/swagger)
- **로깅**: Winston
- **테스트**: Jest

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

`apps/api/.env` 파일 생성:

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

# AWS S3
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_S3_BUCKET=your_bucket
AWS_REGION=ap-northeast-2

# Firebase
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
```

### 개발 서버 실행

```bash
# 루트에서
pnpm dev:api

# 또는 직접
nest start --watch api
```

서버가 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### Swagger 문서

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## 주요 스크립트

| 명령어            | 설명                   |
| ----------------- | ---------------------- |
| `pnpm dev:api`    | 개발 서버 (watch 모드) |
| `pnpm build:api`  | 프로덕션 빌드          |
| `pnpm start:prod` | 프로덕션 서버 실행     |

## 프로젝트 구조

```
src/
├── main.ts                 # 엔트리포인트
├── app.module.ts           # 루트 모듈
├── config/                 # 설정
│   ├── auth-guard/         # JWT 인증 가드
│   ├── exception-filter/   # 예외 처리
│   ├── response-interceptor/ # 응답 포맷팅
│   ├── typeorm/            # DB 설정
│   └── validation-pipe/    # 검증
├── decorator/              # 커스텀 데코레이터
│   └── public/             # @Public()
├── handler/                # 유틸 핸들러
│   ├── bcrypt/
│   └── notification/
├── module/                 # 기능 모듈
│   ├── auth/               # 인증
│   ├── board/              # 게시판
│   ├── stock/              # 주식
│   ├── user/               # 사용자
│   ├── currency/           # 환율
│   ├── notice/             # 공지사항
│   ├── inquiry/            # 문의사항
│   ├── image/              # 이미지 업로드
│   ├── schedule/           # 스케줄러
│   └── websocket/          # 실시간 데이터
├── shared/                 # 상수
└── type/                   # 타입/DTO
```

## 모듈 구조

### 기능 모듈

| 모듈     | 설명                           | 엔드포인트    |
| -------- | ------------------------------ | ------------- |
| auth     | 인증 (로그인, 회원가입, OAuth) | `/auth/*`     |
| board    | 게시판 CRUD                    | `/board/*`    |
| stock    | 주식 정보 조회                 | `/stock/*`    |
| user     | 사용자 정보                    | `/user/*`     |
| currency | 환율 정보                      | `/currency/*` |
| notice   | 공지사항                       | `/notice/*`   |
| inquiry  | 문의사항                       | `/inquiry/*`  |
| image    | 이미지 업로드                  | `/image/*`    |

### 스케줄 모듈

| 모듈              | 설명             |
| ----------------- | ---------------- |
| schedule/currency | 환율 데이터 수집 |
| schedule/kis      | KIS API 스케줄   |
| schedule/kiwoom   | 키움 API 스케줄  |
| schedule/ls       | LS API 스케줄    |

### WebSocket 모듈

| 모듈             | 설명               |
| ---------------- | ------------------ |
| websocket/kis    | KIS 실시간 데이터  |
| websocket/kiwoom | 키움 실시간 데이터 |
| websocket/ls     | LS 실시간 데이터   |

## API 인증

### JWT 인증

모든 API는 기본적으로 JWT 인증이 필요합니다.

```typescript
// 인증 면제가 필요한 엔드포인트
@Public()
@Get('health')
healthCheck() {
  return 'OK';
}
```

### 요청 헤더

```
Authorization: Bearer <token>
```

## 배포

### 빌드

```bash
pnpm build:api
```

### PM2로 실행

```bash
pm2 start dist/apps/api/main.js --name peek-api
```

## 작성자

**jm4293**

- GitHub: [@jm4293](https://github.com/jm4293)
