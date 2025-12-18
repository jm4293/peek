import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { KiwoomTokenScheduleService } from './kiwoom-token-schedule.service';

import { SecuritiesTokenRepository } from '@packages/database/repositories';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [KiwoomTokenScheduleService, SecuritiesTokenRepository],
  exports: [],
})
export class KiwoomScheduleModule {}
