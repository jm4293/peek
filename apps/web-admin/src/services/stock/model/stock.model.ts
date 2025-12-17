import { StockKindEnum } from '@/shared/enum/stock';

export interface IStock {
  ceo: string;
  code: number;
  companyName: string;
  createdAt: Date;
  homePage: string;
  industry: string;
  listingAt: string;
  marketType: StockKindEnum;
  products: string;
  stockCodeSeq: number;
  updatedAt: Date;
}
