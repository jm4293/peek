'use client';

import { ChartCandlestick, House, MessagesSquare, User } from 'lucide-react';

import { LocalStorageKey } from '../shared';
import { LocalStorageUtil } from '../utils';

export const useMenuItem = () => {
  const boardPath = () => {
    const boardStockCategory = LocalStorageUtil.getItem(LocalStorageKey.boardStockCategory) || 'KOSPI';

    return `/board?category=${boardStockCategory}`;
  };

  const menuItems = [
    { path: '/home', icon: House, label: '메인', basePath: '/home' },
    { path: '/stock', icon: ChartCandlestick, label: '주식', basePath: '/stock' },
    { path: boardPath(), icon: MessagesSquare, label: '커뮤니티', basePath: '/board' },
    { path: '/user', icon: User, label: '내 정보', basePath: '/user' },
  ];

  return { menuItems };
};
