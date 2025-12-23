import { LoginAnimatedBackground } from '@app/web/features';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoginAnimatedBackground />
      {children}
    </>
  );
}
