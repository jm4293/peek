import { Table } from '@/components/table';
import { useState } from 'react';
import { PAGINATION_COUNT } from '@/shared/constant/pagination';

import { useNavigate } from 'react-router-dom';
import { ITable } from '@/interface/table';
import { IStock, useStockListQuery } from '@/services/stock';

const columnList: ITable[] = [
  { key: 'marketType', title: '타입' },
  { key: 'code', title: '종목코드' },
  { key: 'companyName', title: '회사명' },
  { key: 'ceo', title: '대표' },
  { key: 'industry', title: '업종' },
  { key: 'products', title: '상품' },
  { key: 'listingAt', title: '상장일' },
];

export const StockTable = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const { data, isLoading, isSuccess } = useStockListQuery({ page, count: PAGINATION_COUNT });

  const clickHandler = (data: IStock) => {
    navigate({ pathname: '/stock/detail', search: `?code=${data.code}` });
  };

  if (isLoading) return <div>Loading...</div>;

  if (isSuccess) {
    return (
      <Table<IStock>
        dataList={data.stockCompanyList}
        columnList={columnList}
        total={data.total}
        page={page}
        setPage={setPage}
        onClick={clickHandler}
      />
    );
  }
};
