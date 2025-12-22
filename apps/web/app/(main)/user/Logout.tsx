'use client';

import { Card, Text } from '@app/web/components';
import { useAuthMutation } from '@app/web/features';
import { useModal } from '@app/web/hooks';

export default function UserLogout() {
  const { signoutMutation } = useAuthMutation();

  const { openModal, closeModal } = useModal();

  const logoutHandler = async () => {
    if (signoutMutation.isPending) {
      return;
    }

    openModal({
      title: '알림',
      content: '로그아웃 하시겠습니까?',
      onConfirm: () => {
        closeModal();
        signoutMutation.mutate();
      },
      onCancel: () => {
        closeModal();
      },
    });
  };

  return (
    <Card.SECTION>
      <div className="cursor-pointer" onClick={logoutHandler}>
        <Text.HEADING text="로그아웃" color="red" />
      </div>
    </Card.SECTION>
  );
}
