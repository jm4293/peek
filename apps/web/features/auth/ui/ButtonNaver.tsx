'use client';

import Link from 'next/link';

import { Text } from '@app/web/components';

const NaverLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z" fill="#03C75A" />
  </svg>
);

export const ButtonNaver = () => {
  return (
    <Link
      href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}&state=peek`}
      className="
        w-full flex justify-center items-center gap-2
        px-4 py-3 rounded-lg
        bg-[#ffffff]/40 hover:bg-[#ffffff]/60
        dark:bg-[#4b5563]/40 dark:hover:bg-[#4b5563]/60
        transition-all duration-200
      ">
      <NaverLogo />
      <Text.HEADING text="네이버 로그인" />
    </Link>
  );
};
