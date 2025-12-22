import { useAtom } from 'jotai';

import { ToastState, toastAtom } from '@app/web/stores';

export const useToast = () => {
  const [toast, setToast] = useAtom(toastAtom);

  const openToast = (params: Omit<ToastState, 'visible'>) => {
    const { message, type = 'info' } = params;

    setToast({
      visible: true,
      message,
      type,
    });
  };

  const closeToast = () => {
    setToast({
      visible: false,
      message: '',
      type: 'info',
    });
  };

  return { toast, openToast, closeToast };
};
