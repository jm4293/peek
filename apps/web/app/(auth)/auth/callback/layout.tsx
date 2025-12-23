import { LoadingSpinner } from '@app/web/components';

export default function AuthOAuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <LoadingSpinner />
    </div>
  );
}
