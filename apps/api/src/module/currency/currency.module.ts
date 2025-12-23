import { Module } from '@nestjs/common';

import { CurrencyHistoryRepository } from '@packages/database/repositories';

import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

@Module({
  imports: [],
  controllers: [CurrencyController],
  providers: [CurrencyService, CurrencyHistoryRepository],
  exports: [],
})
export class CurrencyModule {}
