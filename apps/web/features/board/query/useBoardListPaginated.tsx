import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@app/web/shared';

import { boardApi } from '../api';
import { BoardSortType } from '../type';

interface Props {
  page: number;
  stockCategory: string | undefined;
  sort: BoardSortType;
  text: string | undefined;
}

export const useBoardListPaginated = (props: Props) => {
  const { page, stockCategory, sort, text } = props;

  return useQuery({
    queryKey: QueryKeys.board.listPaginated(stockCategory, sort, text, page),
    queryFn: () => boardApi.getBoardList({ page, stockCategory, sort, text }),
    select: (data) => ({
      boardList: data.data.boardList,
      total: data.data.total,
      nextPage: data.data.nextPage,
      totalPages: Math.ceil(data.data.total / 20),
    }),
  });
};
