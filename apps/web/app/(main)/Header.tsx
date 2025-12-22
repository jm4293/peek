'use client';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { Text } from '@app/web/components';
import { useDeviceLayout } from '@app/web/hooks';
import { LocalStorageKey } from '@app/web/shared';
import { LocalStorageUtil } from '@app/web/utils';

import { StockCategory } from '@packages/shared/constant';

const Logo = () => {
  return <Text.TITLE text="PEEK" className="text-center" />;
};

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { isMobile, isPending } = useDeviceLayout();

  const [boardStockCategory, setBoardStockCategory] = useState(() => {
    const savedCategory = LocalStorageUtil.getItem(LocalStorageKey.boardStockCategory);
    return savedCategory || StockCategory.KOSPI.toString();
  });

  const boardPath = useMemo(() => {
    return `/board?stockCategory=${boardStockCategory}`;
  }, [boardStockCategory]);

  const menuItems = [
    { path: '/home', label: '메인', basePath: '/home' },
    { path: '/stock', label: '주식', basePath: '/stock' },
    { path: boardPath, label: '커뮤니티', basePath: '/board' },
    { path: '/user', label: '내 정보', basePath: '/user' },
  ];

  useEffect(() => {
    const handleCustomStorageChange = () => {
      const savedCategory = LocalStorageUtil.getItem(LocalStorageKey.boardStockCategory);
      setBoardStockCategory(savedCategory || StockCategory.KOSPI.toString());
    };

    window.addEventListener('stockCategoryChange', handleCustomStorageChange);

    return () => {
      window.removeEventListener('stockCategoryChange', handleCustomStorageChange);
    };
  }, []);

  if (isPending) {
    return <header />;
  }

  if (isMobile) {
    return (
      <header className="px-6 h-12 backdrop-blur-md bg-white/70 dark:bg-[#1f1f22]/70 border border-white/20 dark:border-white/10">
        <div className="w-full grid grid-cols-3 items-center">
          {pathname.split('/').length > 2 ? (
            <div onClick={() => router.back()}>
              <ChevronLeft className="text-theme-text-default" size={20} />
            </div>
          ) : (
            <div />
          )}

          <Logo />

          <div />
        </div>
      </header>
    );
  }

  return (
    <header className="py-3">
      <div className="px-12 py-2 backdrop-blur-md bg-white/70 dark:bg-[#1f1f22]/70 rounded-full border border-white/20 dark:border-white/10 shadow-md">
        <div className="flex items-center gap-12">
          <Logo />

          <nav className="flex items-center gap-3">
            {menuItems.map(({ path, label, basePath }) => {
              const isActive = pathname.startsWith(basePath);

              return (
                <Link key={label} href={path} scroll={true}>
                  <div className={`relative px-5 py-1 ease-in-out ${isActive ? 'scale-105' : 'hover:scale-105'}`}>
                    <Text.HEADING
                      text={label}
                      color={isActive ? 'main' : 'gray'}
                      className={`whitespace-nowrap transition-all duration-300 ${isActive ? 'font-semibold' : 'font-medium'}`}
                    />
                    {/* {isActive && <div className="absolute inset-0 rounded-full bg-theme-bg-main -z-10" />} */}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
