import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

import { Modal, Toast } from '../components';
import { MessagingConfig, NetworkError, QueryProvider } from '../lib';
import './globals.css';
import { ThemeProvider } from './providers';

export const metadata: Metadata = {
  title: `${process.env.NODE_ENV === 'production' ? '' : '[DEV] '}PEEK`,
  description: '주식 정보와 커뮤니티 서비스',
  keywords: '주식, 실시간, stock, 커뮤니티',
  icons: {
    icon: [
      { rel: 'apple-touch-icon', url: '/favicon.ico', sizes: '180x180' },
      { rel: 'icon', url: '/favicon.ico' },
    ],
  },
  verification: {
    google: 'uJW_8OCDzvQJqQgfYwsslu44VsruK8gm346PCn8lVKE',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'PEEK',
    images: {
      url: 'https://stock.peek.run/peek-logo.png',
    },
    description: '주식 정보와 커뮤니티 서비스',
    url: 'https://stock.peek.run',
    type: 'website',
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NetworkError>
            <QueryProvider>
              <MessagingConfig>
                {children}
                {/* <GlobalLoading /> */}
              </MessagingConfig>
            </QueryProvider>
          </NetworkError>

          <Modal />
          <Toast />

          <div id="modal-root" />
          <div id="toast-root" />
        </ThemeProvider>
      </body>

      <GoogleAnalytics gaId={String(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)} />
    </html>
  );
}
