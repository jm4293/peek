import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/shared/query-key';
import { IUserListDto } from '../dto';
import userApi from '../api/user.api';

interface IProps extends IUserListDto {}

export const useUserList = (props: IProps) => {
  const { page } = props;

  return useQuery({
    queryKey: QueryKeys.user.list(page),
    queryFn: async () => userApi.getUserList(props),
    select: (res) => {
      const { userList, total } = res.data;

      return { userList, total };
    },
  });
};
