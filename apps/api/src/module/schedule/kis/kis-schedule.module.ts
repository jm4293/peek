import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { SecuritiesTokenRepository } from '@packages/database/repositories';

import { KisWebSocketModule } from '../../websocket';
import { KisTokenScheduleService } from './kis-token-schedule.service';

@Module({
  imports: [HttpModule, KisWebSocketModule],
  controllers: [],
  providers: [KisTokenScheduleService, SecuritiesTokenRepository],
  exports: [],
})
export class KisScheduleModule {}
