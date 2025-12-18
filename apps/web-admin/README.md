# Peek Admin Web

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

> 주식 정보 서비스 관리자 웹 애플리케이션

## 기술 스택

### Core

- **프레임워크**: React 19
- **빌드 도구**: Vite 6
- **언어**: TypeScript 5
- **라우팅**: React Router 7

### 스타일링

- **CSS 프레임워크**: Tailwind CSS
- **아이콘**: Lucide React

### 상태 관리

- **서버 상태**: TanStack React Query
- **클라이언트 상태**: Zustand

### 데이터 통신

- **HTTP 클라이언트**: Axios

## 시작하기

### 요구사항

- Node.js 20+
- pnpm 9+

### 설치

루트 디렉토리에서:

```bash
pnpm install
```

### 환경변수 설정

`apps/web-admin/.env` 파일 생성:

```env
VITE_API_URL=http://localhost:3001
```

### 개발 서버 실행

```bash
# 루트에서
pnpm dev:web-admin

# 또는 직접
cd apps/web-admin && pnpm dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173)으로 접속하세요.

## 주요 스크립트

| 명령어                 | 설명           |
| ---------------------- | -------------- |
| `pnpm dev:web-admin`   | 개발 서버 실행 |
| `pnpm build:web-admin` | 프로덕션 빌드  |

## 프로젝트 구조

```
src/
├── App.tsx               # 루트 컴포넌트
├── main.tsx              # 엔트리포인트
├── pages/                # 페이지 컴포넌트
│   ├── auth/
│   │   └── login/        # 로그인 페이지
│   ├── board/            # 게시판 관리
│   ├── user/             # 사용자 관리
│   └── stock/            # 주식 관리
├── components/           # 공통 컴포넌트
│   ├── button/
│   ├── input/
│   ├── table/
│   ├── textarea/
│   └── loading/
├── router/               # React Router 설정
├── hooks/                # Custom Hooks
├── store/                # Zustand 상태
│   └── loading-spinner.store.ts
├── services/             # API 클라이언트
├── lib/                  # 유틸리티 라이브러리
├── shared/               # 공유 리소스
│   ├── enum/             # 열거형
│   └── constant/         # 상수
├── interface/            # TypeScript 인터페이스
├── utils/                # 유틸 함수
└── assets/               # 정적 자산
```

## 페이지 구조

| 경로          | 페이지      | 설명                    |
| ------------- | ----------- | ----------------------- |
| `/auth/login` | 로그인      | 관리자 로그인           |
| `/user`       | 사용자 관리 | 사용자 목록, 상세, 수정 |
| `/board`      | 게시판 관리 | 게시글 목록, 상세, 삭제 |
| `/stock`      | 주식 관리   | 종목 정보 관리          |

## 상태 관리

### TanStack Query (서버 상태)

```typescript
const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});
```

### Zustand (클라이언트 상태)

```typescript
// 로딩 스피너 상태
const { isLoading, setLoading } = useLoadingSpinnerStore();
```

## 코딩 컨벤션

### 명명 규칙

- **컴포넌트**: PascalCase (`UserTable.tsx`)
- **훅**: camelCase with `use` prefix (`useAuth.ts`)
- **상수**: UPPER_SNAKE_CASE (`API_URL`)
- **인터페이스**: PascalCase (`IUserResponse`)

### 폴더 구조

- 각 페이지는 `pages/` 하위에 도메인별로 구성
- 공통 컴포넌트는 `components/` 에 기능별로 구성
- API 호출은 `services/` 에서 관리

## 커밋 컨벤션

```
Feat: 새로운 기능 추가
Fix: 버그 수정
Docs: 문서 수정
Style: 코드 스타일 변경
Design: UI 디자인 변경
Test: 테스트 코드
Refactor: 리팩토링
Build: 빌드 파일 수정
Perf: 성능 개선
Chore: 기타 수정
```

## 배포

### 빌드

```bash
pnpm build:web-admin
```

빌드 결과물은 `apps/web-admin/dist` 폴더에 생성됩니다.

### 정적 호스팅

빌드된 파일을 정적 호스팅 서비스에 배포:

- AWS S3 + CloudFront
- Vercel
- Netlify

## 작성자

**jm4293**

- GitHub: [@jm4293](https://github.com/jm4293)
