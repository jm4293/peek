import { useInfiniteQuery } from '@tanstack/react-query';

import { QueryKeys } from '@app/web/shared';

import { boardCommentApi } from '../api';
import { GetBoardCommentListResponse } from '../type';

export const useBoardCommentListMine = () => {
  return useInfiniteQuery({
    queryKey: QueryKeys.board.mineCommentList(),
    queryFn: ({ pageParam }) => boardCommentApi.getBoardCommentListMine({ page: pageParam }),
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
  });
};
