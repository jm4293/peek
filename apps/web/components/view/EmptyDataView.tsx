import { Card } from '../card/Card';
import { Text } from '../text';

interface Props {
  text: string;
  className?: string;
}

export const EmptyDataView = (props: Props) => {
  const { text, className } = props;

  return (
    <Card.SECTION>
      <Text.PARAGRAPH text={`${text}이(가) 없습니다.`} className={`text-center ${className}`} />
    </Card.SECTION>
  );
};
