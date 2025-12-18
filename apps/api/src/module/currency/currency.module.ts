import { Module } from '@nestjs/common';

import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

import { CurrencyHistoryRepository } from '@packages/database/repositories';

@Module({
  imports: [],
  controllers: [CurrencyController],
  providers: [CurrencyService, CurrencyHistoryRepository],
  exports: [],
})
export class CurrencyModule {}
