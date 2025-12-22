'use client';

import { Card, Text } from '@app/web/components';
import { useUserMutation } from '@app/web/features';
import { useModal } from '@app/web/hooks';

export default function UserWithdraw() {
  const { withdrawMutation } = useUserMutation();

  const { openModal, closeModal } = useModal();

  const withdrawHandler = async () => {
    if (withdrawMutation.isPending) {
      return;
    }

    openModal({
      title: '회원 탈퇴',
      content: '정말로 탈퇴하시겠습니까?',
      onConfirm: () => {
        withdrawMutation.mutate();
        closeModal();
      },
      onCancel: closeModal,
    });
  };

  return (
    <Card.SECTION>
      <div className="cursor-pointer" onClick={withdrawHandler}>
        <Text.HEADING text="탈퇴하기" color="red" />
      </div>
    </Card.SECTION>
  );
}
