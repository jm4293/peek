import { useInfiniteQuery } from '@tanstack/react-query';

import { QueryKeys } from '@app/web/shared';

import noticeApi from '../api/notice.api';
import { GetNoticeListReq, GetNoticeListRes } from '../type/get-notice-list.type';

export interface NoticeListProps extends Omit<GetNoticeListReq, 'page'> {}

export const useNoticeList = (props: NoticeListProps) => {
  const { type } = props;

  return useInfiniteQuery({
    queryKey: QueryKeys.notice.list(type),
    queryFn: ({ pageParam }) => noticeApi.getNoticeList({ ...props, page: pageParam }),
    getNextPageParam: (lastPage) => {
      const { nextPage } = lastPage.data;

      return nextPage;
    },
    select: (data) => {
      return data.pages.reduce(
        (acc: GetNoticeListRes, cur) => {
          const { noticeList, total, nextPage } = cur.data;
          return { noticeList: [...acc.noticeList, ...noticeList], total, nextPage };
        },
        { noticeList: [], total: 0, nextPage: null },
      );
    },
    initialPageParam: 1,
  });
};
