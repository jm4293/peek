import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const ACCESS_TOKEN_NAME = 'TKN';
const REFRESH_TOKEN_NAME = 'RTKN';

/**
 * Refresh token으로 새로운 access token을 발급받습니다.
 * NestJS에서 설정한 Set-Cookie 헤더를 반환합니다.
 */
async function refreshAccessToken(refreshToken: string): Promise<Response | null> {
  try {
    const response = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        cookie: `${REFRESH_TOKEN_NAME}=${refreshToken}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    return response;
  } catch {
    // 토큰 갱신 실패 시 null 반환
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  const accessToken = request.cookies.get(ACCESS_TOKEN_NAME);
  const refreshToken = request.cookies.get(REFRESH_TOKEN_NAME);

  if (!refreshToken) {
    const response = NextResponse.next();
    response.cookies.delete(ACCESS_TOKEN_NAME);
    response.cookies.delete(REFRESH_TOKEN_NAME);

    return response;
  }

  if (!accessToken && refreshToken) {
    const refreshResponse = await refreshAccessToken(refreshToken.value);

    if (refreshResponse) {
      // NestJS에서 설정한 Set-Cookie 헤더를 클라이언트에 전달
      const response = NextResponse.next();
      const setCookie = refreshResponse.headers.get('set-cookie');

      if (setCookie) {
        response.headers.set('set-cookie', setCookie);
      }

      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
