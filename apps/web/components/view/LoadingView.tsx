import { Card } from '../card/Card';
import { LineSkeleton } from '../skeleton';

export const LoadingView = () => {
  return (
    <Card.SECTION>
      <LineSkeleton />
      <LineSkeleton />
    </Card.SECTION>
  );
};
