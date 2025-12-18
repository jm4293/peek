import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { UserModule } from '../user';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';

import {
  SecuritiesTokenRepository,
  StockCategoryRepository,
  StockCompanyRepository,
  StockKoreanIndexHistoryRepository,
  UserStockFavoriteRepository,
} from '@packages/database/repositories';

@Module({
  imports: [HttpModule, UserModule],
  controllers: [StockController],
  providers: [
    StockService,

    StockCategoryRepository,
    StockCompanyRepository,
    StockKoreanIndexHistoryRepository,
    SecuritiesTokenRepository,

    UserStockFavoriteRepository,
  ],
  exports: [],
})
export class StockModule {}
