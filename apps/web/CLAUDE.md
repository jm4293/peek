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
├── app/                    # Next.js App Router (라우팅 전용)
│   ├── layout.tsx          # 루트 레이아웃
│   ├── (main)/             # 메인 레이아웃 그룹
│   │   ├── layout.tsx      # 메인 레이아웃
│   │   ├── home/
│   │   │   └── page.tsx    # 홈 페이지 (라우트 핸들러만)
│   │   ├── board/
│   │   │   ├── page.tsx    # 게시판 목록 (라우트 핸들러만)
│   │   │   └── [id]/
│   │   │       └── page.tsx # 게시판 상세 (라우트 핸들러만)
│   │   ├── stock/
│   │   │   └── page.tsx    # 주식 페이지 (라우트 핸들러만)
│   │   └── user/
│   │       └── page.tsx    # 사용자 페이지 (라우트 핸들러만)
│   ├── (auth)/             # 인증 레이아웃 그룹
│   │   ├── layout.tsx      # 인증 레이아웃
│   │   └── auth/
│   │       ├── login/
│   │       │   └── page.tsx # 로그인 페이지 (라우트 핸들러만)
│   │       └── register/
│   │           └── page.tsx # 회원가입 페이지 (라우트 핸들러만)
│   └── api/                # API 라우트
├── features/               # 기능별 모듈 (Feature-first Architecture)
│   ├── auth/               # 인증 기능
│   │   ├── actions/        # Server Actions
│   │   ├── api/            # API 클라이언트 함수
│   │   ├── mutations/      # TanStack Query Mutations
│   │   ├── queries/        # TanStack Query Queries
│   │   ├── types/          # 타입 정의
│   │   └── ui/             # UI 컴포넌트
│   │       ├── LoginForm/
│   │       ├── RegisterForm/
│   │       └── AuthGuard/
│   └── board/              # 게시판 기능
│       ├── actions/        # Server Actions
│       ├── api/            # API 클라이언트 함수
│       ├── mutations/      # TanStack Query Mutations
│       ├── queries/        # TanStack Query Queries
│       ├── types/          # 타입 정의
│       └── ui/             # UI 컴포넌트
│           ├── BoardList/
│           ├── BoardDetail/
│           ├── BoardForm/
│           └── CommentSection/
├── components/             # 공통 컴포넌트 (재사용 가능한 UI)
│   ├── button/
│   ├── chart/
│   ├── input/
│   ├── modal/
│   └── table/
├── hooks/                  # 공통 Custom Hooks
├── lib/                    # 유틸리티
│   ├── axios/              # HTTP 클라이언트
│   ├── firebase/           # Firebase 설정
│   └── query-provider/     # TanStack Query Provider
├── stores/                 # Jotai 전역 상태
│   ├── modal.atom.ts
│   ├── toast.atom.ts
│   └── notification-token.atom.ts
├── shared/                 # 공유 타입/상수
│   ├── types/
│   └── enum/
└── utils/                  # 유틸 함수
```

### Features 구조 설명

각 feature는 독립적인 도메인 로직을 포함하며, 다음과 같은 하위 디렉토리로 구성됩니다:

- **actions/** - Next.js Server Actions (서버 사이드 로직)
- **api/** - API 클라이언트 함수 (apps/api 백엔드 서버 호출)
- **mutations/** - TanStack Query useMutation 훅
- **queries/** - TanStack Query useQuery 훅
- **types/** - 해당 feature의 타입 정의
- **ui/** - 해당 feature 전용 UI 컴포넌트

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
