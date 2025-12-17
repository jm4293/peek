import { Outlet } from 'react-router-dom';
import { useDeviceLayout } from '@/hooks/useDeviceLayout';
import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';

export const Layout = () => {
  const { isMobile } = useDeviceLayout();

  return (
    <div className="layout">
      <header className="header-container">{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</header>
      <main className="outlet">
        <Outlet />
      </main>
    </div>
  );
};
