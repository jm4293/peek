# Admin API 서버 (NestJS)

관리자용 REST API 서버

## 폴더 구조

```
src/
├── main.ts           # 엔트리포인트
├── app.module.ts     # 루트 모듈
├── config/           # 설정 (간소화)
│   ├── config-module/
│   ├── jwt/
│   └── typeorm/
├── handler/          # 유틸 핸들러
│   └── bcrypt/
├── module/           # 기능 모듈 (4개만)
│   ├── auth/
│   ├── board/
│   ├── stock/
│   └── user/
├── shared/const/     # 상수
└── type/dto/         # DTO
```

## API 서버와의 차이점

| 항목 | API | API-Admin |
|------|-----|-----------|
| 모듈 수 | 13개 | 4개 |
| WebSocket | O | X |
| 스케줄러 | O | X |
| 이미지 업로드 | O | X |
| AWS S3 | O | X |

## 주요 기능

- 관리자 로그인/인증
- 사용자 관리 (조회, 수정, 삭제)
- 게시판 관리
- 주식 데이터 관리

## DTO 위치

모든 DTO는 `type/dto/` 폴더에 통합 관리
