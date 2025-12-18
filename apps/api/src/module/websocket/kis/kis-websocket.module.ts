import { Module } from '@nestjs/common';

import { KisKoreanIndexGateway } from './kis-korean-index.gateway';

import { SecuritiesTokenRepository, StockKoreanIndexHistoryRepository } from '@packages/database/repositories';

@Module({
  imports: [],
  controllers: [],
  providers: [KisKoreanIndexGateway, SecuritiesTokenRepository, StockKoreanIndexHistoryRepository],
  exports: [KisKoreanIndexGateway],
})
export class KisWebSocketModule {}
