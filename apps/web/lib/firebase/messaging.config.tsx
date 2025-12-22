'use client';

import { useSetAtom } from 'jotai';
import { useEffect, useRef } from 'react';

import { notificationTokenAtom } from '@app/web/stores';

import { requestForToken } from './firebase.config';

interface Props {
  children: React.ReactNode;
}

export function MessagingConfig(props: Props) {
  const { children } = props;

  const hasRequested = useRef(false);

  const setNotificationToken = useSetAtom(notificationTokenAtom);

  useEffect(() => {
    if (hasRequested.current) {
      return;
    }

    hasRequested.current = true;

    (async () => {
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
          const token = await requestForToken();

          if (!token) {
            setNotificationToken(null);
            return;
          }

          setNotificationToken(token);
        } else {
          setNotificationToken(null);
        }
      } else {
        setNotificationToken(null);
      }
    })();
  }, []);

  return <div>{children}</div>;
}
