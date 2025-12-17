import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from '@/components/not-found';
import { BoardList } from '@/pages/board';
import { Stock } from '@/pages/stock';
import { UserPage } from '@/pages/user';
import { LoginPage } from '@/pages/auth';
import { Layout } from '@/lib/layout';

export const Router = () => {
  // const _BASE_URL = process.env.PUBLIC_URL;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<LoginPage />} />

        <Route element={<Layout />}>
          <Route path="/user" element={<UserPage />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/stock" element={<Stock />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
