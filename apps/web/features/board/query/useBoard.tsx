import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@app/web/shared';

import boardApi from '../api/board.api';

export const useBoard = (boardId: string) => {
  return useQuery({
    queryKey: QueryKeys.board.detail(boardId),
    queryFn: () => boardApi.getBoardDetail(Number(boardId)),
    select: (res) => res.data.board,
    enabled: !!boardId,
  });
};
