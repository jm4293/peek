import { Card, EmptyDataView, InternalErrorView } from '@app/web/components';
import { BoardModify, getBoardDetail } from '@app/web/features';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BoardModifyPage(props: Props) {
  const { id } = await props.params;

  const { success, data } = await getBoardDetail(id);

  if (!success) {
    return (
      <Card.MAIN>
        <InternalErrorView />
      </Card.MAIN>
    );
  }

  if (!data) {
    return (
      <Card.MAIN>
        <EmptyDataView text="게시글" />
      </Card.MAIN>
    );
  }

  return (
    <Card.MAIN>
      <BoardModify data={data} id={id} />
    </Card.MAIN>
  );
}
