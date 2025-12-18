# Web Admin (Vite + React)

관리자용 웹 프론트엔드

## 기술 스택

- React 19
- Vite 6
- React Router 7 (SPA)
- TanStack Query (서버 상태)
- Zustand (클라이언트 상태)
- Tailwind CSS

## 폴더 구조

```
src/
├── App.tsx               # 루트 컴포넌트
├── main.tsx              # 엔트리포인트
├── pages/                # 페이지
│   ├── auth/login/
│   ├── board/
│   ├── user/
│   └── stock/
├── components/           # 컴포넌트
│   ├── button/
│   ├── input/
│   ├── table/
│   └── loading/
├── router/               # React Router 설정
├── hooks/                # Custom Hooks
├── store/                # Zustand 상태
│   └── loading-spinner.store.ts
├── services/             # API 클라이언트
├── lib/                  # 유틸리티
├── shared/               # 공유 타입/상수
│   ├── enum/
│   └── constant/
└── interface/            # TypeScript 인터페이스
```

## 상태 관리

### TanStack Query (서버 상태)

```typescript
const { data } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});
```

### Zustand (클라이언트 상태)

```typescript
// 로딩 스피너 등 UI 상태
const { isLoading } = useLoadingSpinnerStore();
```

## 라우팅

React Router 기반 SPA

- `/auth/login` - 로그인
- `/board` - 게시판 관리
- `/user` - 사용자 관리
- `/stock` - 주식 관리

## 개발 서버

```bash
pnpm dev:web-admin  # http://localhost:5173
```
