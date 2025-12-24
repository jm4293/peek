import { useInfiniteQuery } from '@tanstack/react-query';

import { QueryKeys } from '@app/web/shared';

import { boardApi } from '../api';
import { GetBoardListRequest, GetBoardListResponse } from '../type';

interface Props extends Omit<GetBoardListRequest, 'page'> {}

export const useBoardList = (props: Props) => {
  const { stockCategory, sort, text } = props;

  return useInfiniteQuery({
    queryKey: QueryKeys.board.list(stockCategory, sort, text),
    queryFn: ({ pageParam }) => boardApi.getBoardList({ page: pageParam, stockCategory, sort, text }),
    getNextPageParam: (lastPage) => {
      const { nextPage } = lastPage.data;

      return nextPage;
    },
    select: (data) => {
      return data.pages.reduce(
        (acc: GetBoardListResponse, cur) => {
          const { boardList, total, nextPage } = cur.data;

          return { boardList: [...acc.boardList, ...boardList], total, nextPage };
        },
        { boardList: [], total: 0, nextPage: null },
      );
    },
    initialPageParam: 1,
  });
};
