import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { LsWebSocketModule } from '../../websocket';
import { LsScheduleService } from './ls-schedule.service';

import { SecuritiesTokenRepository } from '@packages/database/repositories';

@Module({
  imports: [HttpModule, LsWebSocketModule],
  controllers: [],
  providers: [LsScheduleService, SecuritiesTokenRepository],
  exports: [],
})
export class LsScheduleModule {}
