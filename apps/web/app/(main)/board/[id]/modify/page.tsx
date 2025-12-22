import { Card, EmptyDataView, InternalErrorView } from '@app/web/components';
import { getBoardDetail } from '@app/web/features';

import BoardModify from './BoardModify';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BoardModifyPage(props: Props) {
  const { id } = await props.params;

  const { success, data } = await getBoardDetail(id);

  if (!success) {
    return (
      <Card.MAIN text="게시글 수정">
        <InternalErrorView />
      </Card.MAIN>
    );
  }

  if (!data) {
    return (
      <Card.MAIN text="게시글 수정">
        <EmptyDataView text="게시글" />
      </Card.MAIN>
    );
  }

  return (
    <Card.MAIN text="게시글 수정">
      <BoardModify data={data} id={id} />
    </Card.MAIN>
  );
}
