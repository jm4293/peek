'use client';

import Link from 'next/link';

import { Text } from '@app/web/components';

const KakaoLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3C6.48 3 2 6.13 2 10c0 2.38 1.91 4.5 4.84 5.85L6 21l5.33-3.11c.35.03.7.05 1.05.05 5.52 0 10-3.13 10-7s-4.48-6.94-10-6.94z"
      fill="#3C1E1E"
    />
  </svg>
);

export const ButtonKakao = () => {
  return (
    <Link
      href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`}
      className="
        w-full flex justify-center items-center gap-2
        px-4 py-3 rounded-lg
        bg-[#ddd6fe]/40 hover:bg-[#ddd6fe]/60
        dark:bg-[#4b5563]/40 dark:hover:bg-[#4b5563]/60
        transition-all duration-200
      ">
      <KakaoLogo />
      <Text.HEADING text="카카오 로그인" />
    </Link>
  );
};
