# API 서버 (NestJS)

메인 사용자용 REST API 서버

## 폴더 구조

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
│   └── public/             # @Public() - 인증 면제
├── handler/                # 유틸 핸들러
│   ├── bcrypt/             # 암호화
│   └── notification/       # 알림 발송
├── module/                 # 기능 모듈
│   ├── auth/               # 인증
│   ├── board/              # 게시판
│   ├── stock/              # 주식
│   ├── user/               # 사용자
│   ├── schedule/           # 정기 작업
│   └── websocket/          # 실시간 데이터
├── shared/                 # 상수
└── type/                   # 타입/DTO
```

## 모듈 패턴

```typescript
// module/auth/auth.module.ts
@Module({
  imports: [JwtModule.registerAsync(jwtModuleConfig)],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, ...],
})
export class AuthModule {}
```

## 요청 처리 흐름

```
Request
  → Middleware (CORS, Cookie)
  → Guard (JWT 인증)
  → Interceptor (로깅)
  → Pipe (검증)
  → Controller → Service → Repository
  → Interceptor (응답 포맷)
  → ExceptionFilter (에러)
  → Response
```

## 인증

- JWT 기반 인증
- `@Public()` 데코레이터로 인증 면제
- Guard에서 자동 검증

## 주요 모듈

| 모듈      | 역할                    |
| --------- | ----------------------- |
| auth      | 로그인, 회원가입, OAuth |
| board     | 게시판 CRUD             |
| stock     | 주식 정보 조회          |
| user      | 사용자 정보             |
| schedule  | 환율/주식 데이터 수집   |
| websocket | 실시간 주식 데이터      |

## 외부 연동

- Firebase Admin (푸시 알림)
- AWS S3 (이미지 업로드)
- KIS/키움/LS API (주식 데이터)
