import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { SecuritiesTokenRepository } from '@packages/database/repositories';

import { KiwoomTokenScheduleService } from './kiwoom-token-schedule.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [KiwoomTokenScheduleService, SecuritiesTokenRepository],
  exports: [],
})
export class KiwoomScheduleModule {}
