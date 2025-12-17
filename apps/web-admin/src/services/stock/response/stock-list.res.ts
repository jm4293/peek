import { IStock } from '../model';

export interface IStockListResponse {
  stockCompanyList: IStock[];
  total: number;
}
