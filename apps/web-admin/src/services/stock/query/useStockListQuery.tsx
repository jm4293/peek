import { useQuery } from '@tanstack/react-query';
import { IStockListDto } from '../dto';
import StockApi from '../api/stock.api';

interface IProps extends IStockListDto {}

export const useStockListQuery = (props: IProps) => {
  return useQuery({
    queryKey: ['stock-list', props.page],
    queryFn: () => StockApi.getStockList(props),
    select: (res) => {
      const { stockCompanyList, total } = res.data;

      return { stockCompanyList, total };
    },
  });
};
