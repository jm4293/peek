import { Card } from '../card/Card';
import { Text } from '../text';

export const InternalErrorView = () => {
  return (
    <Card.SECTION>
      <Text.PARAGRAPH text="서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." color="red" />
    </Card.SECTION>
  );
};
