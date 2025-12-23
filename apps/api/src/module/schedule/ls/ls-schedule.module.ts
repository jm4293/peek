import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { SecuritiesTokenRepository } from '@packages/database/repositories';

import { LsWebSocketModule } from '../../websocket';
import { LsScheduleService } from './ls-schedule.service';

@Module({
  imports: [HttpModule, LsWebSocketModule],
  controllers: [],
  providers: [LsScheduleService, SecuritiesTokenRepository],
  exports: [],
})
export class LsScheduleModule {}
