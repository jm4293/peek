import { Card } from '@/components/card';
import { CurrentTimeText, Text } from '@/components/text';

export default async function HomePage() {
  return (
    <Card.MAIN
      text={
        <div className="flex items-center justify-between">
          <Text.TITLE text="메인" />
          <CurrentTimeText />
        </div>
      }
    />
  );
}
