import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { UserStockFavorite } from '@packages/database/entities';

@Injectable()
export class UserStockFavoriteRepository extends Repository<UserStockFavorite> {
  constructor(manager: EntityManager) {
    super(UserStockFavorite, manager);
  }

  async findByUserAccountIdAndStockCompanyId(userAccountId: number, stockKoreanCompanyId: number) {
    return await this.findOneBy({ userAccountId, stockKoreanCompanyId });
  }
}
