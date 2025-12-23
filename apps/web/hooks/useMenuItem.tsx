'use client';

import { ChartCandlestick, House, MessagesSquare, User } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import { StockCategory } from '@packages/shared/constant';

import { LocalStorageKey } from '../shared';
import { LocalStorageUtil } from '../utils';

export const useMenuItem = () => {
  const [boardStockCategory, setBoardStockCategory] = useState(() => {
    return LocalStorageUtil.getItem(LocalStorageKey.boardStockCategory) || StockCategory.KOSPI.toString();
  });

  const boardPath = useMemo(() => {
    return `/board?stockCategory=${boardStockCategory}`;
  }, [boardStockCategory]);

  const menuItems = [
    { path: '/home', icon: House, label: '메인', basePath: '/home' },
    { path: '/stock', icon: ChartCandlestick, label: '주식', basePath: '/stock' },
    { path: boardPath, icon: MessagesSquare, label: '커뮤니티', basePath: '/board' },
    { path: '/user', icon: User, label: '내 정보', basePath: '/user' },
  ];

  useEffect(() => {
    const handleCustomStorageChange = () => {
      const savedCategory = LocalStorageUtil.getItem(LocalStorageKey.boardStockCategory);
      setBoardStockCategory(savedCategory || StockCategory.KOSPI.toString());
    };

    window.addEventListener('stockCategoryChange', handleCustomStorageChange);

    return () => {
      window.removeEventListener('stockCategoryChange', handleCustomStorageChange);
    };
  }, []);

  return { menuItems };
};
