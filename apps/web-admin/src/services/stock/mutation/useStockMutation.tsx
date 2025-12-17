import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLoadingStore } from '@/store';
import StockApi from '../api/stock.api';

export const useStockMutation = () => {
  const queryClient = useQueryClient();
  const { stopLoading } = useLoadingStore();

  const uploadFileMutation = useMutation({
    mutationFn: (dto: { formData: FormData; dataType: string }) => StockApi.uploadFile(dto),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ['stock-list'] });
    },

    onSettled: () => {
      stopLoading();
    },
  });

  const deleteStockMutation = useMutation({
    mutationFn: () => StockApi.deleteStock(),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ['stock-list'] });
    },
  });

  return {
    uploadFileMutation,
    deleteStockMutation,
  };
};
