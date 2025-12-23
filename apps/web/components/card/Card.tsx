import { Text } from '@app/web/components';

interface Props {
  id?: string;
  text?: string | React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const MAIN = (props: Props) => {
  const { id, text, className, children } = props;

  return (
    <section className={`flex flex-col gap-4 ${className}`} key={id}>
      {typeof text === 'string' ? <Text.TITLE text={text} /> : text}
      {children}
    </section>
  );
};

const SECTION = (props: Props) => {
  const { id, text, className, children } = props;

  return (
    <section key={id} className={`flex flex-col justify-center gap-4 p-4 rounded-xl bg-layer-1 ${className}`}>
      {typeof text === 'string' ? <Text.SUBTITLE text={text} /> : text}
      {children}
    </section>
  );
};

export const Card = {
  MAIN,
  SECTION,
};
