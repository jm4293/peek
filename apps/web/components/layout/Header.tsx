'use client';

import { Bell, ChevronLeft, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Text } from '@app/web/components';
import { useDeviceLayout, useMenuItem } from '@app/web/hooks';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { isMobile, isPending } = useDeviceLayout();
  const { menuItems } = useMenuItem();

  if (isPending) {
    return null;
  }

  if (isMobile) {
    return (
      <header className="backdrop-blur-md">
        <div className="w-full grid grid-cols-3 items-center">
          {pathname.split('/').length > 2 ? (
            <div onClick={() => router.back()}>
              <ChevronLeft className="text-theme-text-default" size={24} />
            </div>
          ) : (
            <div />
          )}

          <div />

          <div className="flex justify-end">
            <Bell size={20} />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="">
      <div className="w-full px-12 py-3 rounded-full bg-layer-1 opacity-95 shadow-lg">
        <div className="grid grid-cols-5 items-center">
          <Text.TITLE text="PEEK" />

          <nav className="col-span-3 flex justify-center items-center gap-12">
            {menuItems.map(({ path, label, basePath }) => {
              const isActive = pathname.startsWith(basePath);

              return (
                <Link key={label} href={path}>
                  <div className={`ease-in-out ${isActive ? 'scale-110' : 'hover:scale-110'}`}>
                    <Text.HEADING
                      text={label}
                      color={isActive ? 'default' : 'gray'}
                      className={`whitespace-nowrap transition-all duration-300 ${isActive ? 'font-semibold' : 'font-medium'}`}
                    />
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="flex justify-end">
            <Bell size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};
