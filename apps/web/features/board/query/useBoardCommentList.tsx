import { useInfiniteQuery } from '@tanstack/react-query';

import { QueryKeys } from '@app/web/shared';

import { boardCommentApi } from '../api';
import { GetBoardCommentListResponse } from '../type';

interface Props {
  boardId: string;
}

export const useBoardCommentList = (props: Props) => {
  const { boardId } = props;

  return useInfiniteQuery({
    queryKey: QueryKeys.board.commentList(boardId),
    queryFn: ({ pageParam }) => boardCommentApi.getBoardCommentList({ boardId, page: pageParam }),
    getNextPageParam: (lastPage) => {
      const { nextPage } = lastPage.data;

      return nextPage;
    },
    select: (data) => {
      return data.pages.reduce(
        (acc: GetBoardCommentListResponse, cur) => {
          const { boardCommentList, total, nextPage } = cur.data;

          return { boardCommentList: [...acc.boardCommentList, ...boardCommentList], total, nextPage };
        },
        { boardCommentList: [], total: 0, nextPage: null },
      );
    },
    initialPageParam: 1,
    enabled: !!boardId,
  });
};
