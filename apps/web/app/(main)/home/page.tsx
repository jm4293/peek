import { Card, CurrentTimeText } from '@app/web/components';

export default async function HomePage() {
  return (
    <Card.MAIN
      text={
        <div className="flex justify-end">
          <CurrentTimeText />
        </div>
      }
    />
  );
}
