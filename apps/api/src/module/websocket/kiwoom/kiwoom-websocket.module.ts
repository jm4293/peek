import { Module } from '@nestjs/common';

import { KiwoomKoreanStockGateway } from './kiwoom-korean-stock.gateway';

import { SecuritiesTokenRepository } from '@packages/database/repositories';

@Module({
  imports: [],
  controllers: [],
  providers: [KiwoomKoreanStockGateway, SecuritiesTokenRepository],
  exports: [],
})
export class KiwoomWebSocketModule {}
