import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { CurrencyHistory } from '@packages/database/entities';

@Injectable()
export class CurrencyHistoryRepository extends Repository<CurrencyHistory> {
  constructor(manager: EntityManager) {
    super(CurrencyHistory, manager);
  }
}
