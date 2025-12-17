import { ThemeSwitcher } from '@/components/button';
import { Card } from '@/components/card';

export default function UserSettingThemePage() {
  return (
    <Card.MAIN text="테마 설정">
      <ThemeSwitcher />
    </Card.MAIN>
  );
}
