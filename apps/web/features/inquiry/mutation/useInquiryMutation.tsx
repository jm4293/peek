'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useToast } from '@app/web/hooks';
import { QueryKeys } from '@app/web/shared';

import inquiryApi from '../api/inquiry.api';
import { CreateInquiryRequest, DeleteInquiryRequest, UpdateInquiryRequest } from '../type';

export const useInquiryMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { openToast } = useToast();

  const createInquiryMutation = useMutation({
    mutationFn: (dto: CreateInquiryRequest) => inquiryApi.createInquiry(dto),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: QueryKeys.inquiry.list() });

      openToast({ message: '문의가 등록되었습니다.', type: 'success' });
      router.push('/inquiry');
    },
  });

  const updateInquiryMutation = useMutation({
    mutationFn: (dto: UpdateInquiryRequest) => inquiryApi.modifyInquiry(dto),
    onSuccess: async (_, variables) => {
      const { inquiryId } = variables;

      await queryClient.invalidateQueries({ queryKey: QueryKeys.inquiry.list() });

      openToast({ message: '문의가 수정되었습니다.', type: 'success' });
      router.push(`/inquiry/${inquiryId}`);
    },
  });

  const deleteInquiryMutation = useMutation({
    mutationFn: (dto: DeleteInquiryRequest) => inquiryApi.deleteInquiry(dto),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: QueryKeys.inquiry.list() });

      openToast({ message: '문의가 삭제되었습니다.', type: 'success' });
      router.push('/inquiry');
    },
  });

  return {
    createInquiryMutation,
    updateInquiryMutation,
    deleteInquiryMutation,
  };
};
