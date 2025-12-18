import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { CurrencyScheduleService } from './currency-schedule.service';

import { CurrencyHistoryRepository } from '@packages/database/repositories';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [CurrencyScheduleService, CurrencyHistoryRepository],
  exports: [],
})
export class CurrencyScheduleModule {}
