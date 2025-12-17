# Web (Next.js)

사용자용 웹 프론트엔드

## 기술 스택

- Next.js 15 (App Router)
- React 19
- TanStack Query (서버 상태)
- Jotai (클라이언트 상태)
- Tailwind CSS
- Socket.io Client

## 폴더 구조

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃
│   ├── (main)/             # 메인 레이아웃 그룹
│   │   ├── home/
│   │   ├── board/
│   │   ├── stock/
│   │   └── user/
│   ├── (auth)/             # 인증 레이아웃 그룹
│   │   └── auth/
│   └── api/                # API 라우트
├── components/             # 컴포넌트
│   ├── button/
│   ├── chart/
│   ├── input/
│   ├── modal/
│   ├── stock/
│   └── table/
├── hooks/                  # Custom Hooks
├── lib/                    # 유틸리티
│   ├── auth/               # 토큰 관리
│   ├── axios/              # HTTP 클라이언트
│   ├── firebase/           # Firebase 설정
│   └── query-provider/     # TanStack Query
├── stores/                 # Jotai 상태
│   ├── modal.atom.ts
│   ├── toast.atom.ts
│   └── notification-token.atom.ts
├── services/               # API 클라이언트
├── shared/                 # 공유 타입/상수
│   ├── types/
│   └── enum/
└── utils/                  # 유틸 함수
```

## 상태 관리

### TanStack Query (서버 상태)
```typescript
// 데이터 페칭, 캐싱, 동기화
const { data } = useQuery({
  queryKey: ['stocks'],
  queryFn: fetchStocks,
});
```

### Jotai (클라이언트 상태)
```typescript
// UI 상태 (모달, 토스트 등)
const [isOpen, setIsOpen] = useAtom(modalAtom);
```

## 레이아웃 그룹

- `(main)` - 메인 서비스 (헤더/푸터 포함)
- `(auth)` - 인증 페이지 (별도 레이아웃)

## 테스트

- Vitest + Testing Library
- Storybook (컴포넌트 문서)

## 개발 서버

```bash
pnpm dev:web  # http://localhost:4000
```
