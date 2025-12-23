'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Text } from '@app/web/components';
import { useDeviceLayout, useDevicePlatform, useFooterVisibility, useMenuItem } from '@app/web/hooks';

export const Footer = () => {
  const pathname = usePathname();

  const { isVisible } = useFooterVisibility();
  const { isMobile } = useDeviceLayout();
  const { platform } = useDevicePlatform();
  const { menuItems } = useMenuItem();

  // 게시글 상세 페이지에서는 Footer 숨김
  if (pathname.startsWith('/board') && !isNaN(Number(pathname.split('/').pop()))) {
    return null;
  }

  if (!isMobile) {
    return null;
  }

  return (
    <footer
      className={`
          py-2 flex justify-center backdrop-blur-md 
          transition-transform duration-500 ease-in-out
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}>
      <div
        className={`w-full px-4 py-3 flex justify-between items-center rounded-full bg-layer-2
          ${platform === 'ios' ? 'mb-4' : 'mb-2'}
        `}>
        {menuItems.map(({ path, icon: Icon, label, basePath }) => {
          const isActive = pathname.startsWith(basePath);

          return (
            <Link key={basePath} href={path}>
              <div className="px-2 py-0 flex flex-col items-center">
                <Icon className={isActive ? 'text-main' : 'text-foreground'} size={18} />
                <Text.PARAGRAPH text={label} color={isActive ? 'main' : 'default'} />
              </div>
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

//         ${platform === 'ios' ? 'mb-6' : 'mb-2'}
