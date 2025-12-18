import { Module } from '@nestjs/common';

import { LsKoreanIndexGateway } from './ls-korean-index.gateway';
import { LsKoreanTo10Gateway } from './ls-korean-to-10-gateway';
import { LsUsIndexGateway } from './ls-us-index.gateway';

import { SecuritiesTokenRepository, StockKoreanIndexHistoryRepository } from '@packages/database/repositories';

@Module({
  imports: [],
  controllers: [],
  providers: [
    LsKoreanIndexGateway,
    LsKoreanTo10Gateway,
    LsUsIndexGateway,

    SecuritiesTokenRepository,
    StockKoreanIndexHistoryRepository,
  ],
  exports: [LsKoreanIndexGateway, LsKoreanTo10Gateway, LsUsIndexGateway],
})
export class LsWebSocketModule {}
