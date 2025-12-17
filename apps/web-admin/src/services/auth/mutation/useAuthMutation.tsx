import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LocalStorage, SessionStorage } from '@/utils';
import { ILoginDto } from '../dto';
import AuthApi from '../api/auth.api';

export const useAuthMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: (dto: ILoginDto) => AuthApi.postLogin(dto),
    onSuccess: (res) => {
      const { accessToken } = res.data;

      LocalStorage.setItem('__xt__', accessToken);

      navigate('/user');
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => AuthApi.postLogout(),
    onSuccess: () => {
      queryClient.clear();
      LocalStorage.clear();
      SessionStorage.clear();

      navigate('/auth/login');
    },
  });

  return {
    loginMutation,
    logoutMutation,
  };
};
