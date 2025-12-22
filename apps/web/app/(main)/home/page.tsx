import { Card, CurrentTimeText, Text } from '@app/web/components';

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
