import { Loading } from '@/components/loading';
import { IUserListDto, useUserList } from '@/services/user';

const initialValues: IUserListDto = {
  page: 1,
};

export const UserPage = () => {
  const { data, isLoading, isSuccess } = useUserList(initialValues);

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    return (
      <div>
        {data.userList.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }

  return <Loading />;
};
