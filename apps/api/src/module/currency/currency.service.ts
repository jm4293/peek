import { Injectable } from '@nestjs/common';

import { CurrencyHistory } from '@packages/database/entities';
import { CurrencyHistoryRepository } from '@packages/database/repositories';

@Injectable()
export class CurrencyService {
  constructor(private readonly currencyHistoryRepository: CurrencyHistoryRepository) {}

  async getCurrencyList() {
    const currencyList = await this.currencyHistoryRepository
      .createQueryBuilder('currency')
      .where((qb) => {
        const subQuery = qb.subQuery().select('MAX(sub.createdAt)').from(CurrencyHistory, 'sub').getQuery();
        return 'currency.createdAt = ' + subQuery;
      })
      .orderBy('currency.id', 'DESC')
      .getMany();

    return { data: currencyList, total: currencyList.length };
  }
}
