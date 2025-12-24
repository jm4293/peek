import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QueryKeys } from '@app/web/shared';

import { boardCommentApi } from '../api';
import { DeleteBoardCommentRequest, UpdateBoardCommentRequest, createBoardCommentRequest } from '../type';

export const useBoardCommentMutation = () => {
  const queryClient = useQueryClient();

  const createBoardCommentMutation = useMutation({
    mutationFn: (dto: createBoardCommentRequest) => boardCommentApi.createBoardComment(dto),
    onSuccess: async (_, variables) => {
      const { boardId } = variables;

      await queryClient.invalidateQueries({ queryKey: QueryKeys.board.commentList(String(boardId)) });
    },
  });

  const updateBoardCommentMutation = useMutation({
    mutationFn: (dto: UpdateBoardCommentRequest) => boardCommentApi.updateBoardComment(dto),
    onSuccess: async (_, variables) => {
      const { boardId } = variables;

      await queryClient.invalidateQueries({ queryKey: QueryKeys.board.commentList(String(boardId)) });
    },
  });

  const deleteBoardCommentMutation = useMutation({
    mutationFn: (dto: DeleteBoardCommentRequest) => boardCommentApi.deleteBoardComment(dto),
    onSuccess: async (_, variables) => {
      const { boardId } = variables;

      await queryClient.invalidateQueries({ queryKey: QueryKeys.board.commentList(String(boardId)) });
    },
  });

  return {
    createBoardCommentMutation,
    updateBoardCommentMutation,
    deleteBoardCommentMutation,
  };
};
