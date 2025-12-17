import { StockKindEnum } from '@/shared/enum/stock';

export interface IStockListDto {
  page: number;
  count: number;
  kind?: StockKindEnum;
  text?: string;
}
