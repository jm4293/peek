'use client';

import { PencilLine } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Text } from '@app/web/components';
import { useDeviceLayout, useFooterVisibility, useModal } from '@app/web/hooks';

import { UserAccountModel } from '../../../user';

interface Props {
  userInfo: UserAccountModel | null;
}

export const BoardRegisterButton = (props: Props) => {
  const { userInfo } = props;
  const router = useRouter();

  const { isMobile, isPending } = useDeviceLayout();
  const { openModal, closeModal } = useModal();
  const { isVisible: isFooterVisible } = useFooterVisibility();

  const clickHandler = () => {
    if (!userInfo) {
      openModal({
        title: '알림',
        content: (
          <div className="text-center">
            <Text.SUBTITLE text="로그인 후 이용가능한 서비스입니다." />
            <Text.SUBTITLE text="지금 로그인하고 시작하세요!" />
          </div>
        ),
        onConfirm: () => {
          closeModal();
          router.push('/auth/login');
        },
      });
      return;
    }

    router.push('/board/register');
  };

  if (isPending) {
    return null;
  }

  const bottomValue = isMobile && !isFooterVisible ? '0rem' : '4rem';

  return (
    <div
      className="fixed -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out cursor-pointer group"
      style={{
        right: 'max(0rem, calc((100vw - min(100vw, 2345px)) / 2))',
        bottom: bottomValue,
      }}
      onClick={clickHandler}>
      <div className="relative bg-layer-0 rounded-full shadow-lg p-4 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 hover:shadow-xl">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-main-color/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <PencilLine className="relative text-main" size={20} />
      </div>
    </div>
  );
};
