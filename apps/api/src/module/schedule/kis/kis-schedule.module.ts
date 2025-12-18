import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { KisWebSocketModule } from '../../websocket';
import { KisTokenScheduleService } from './kis-token-schedule.service';

import { SecuritiesTokenRepository } from '@packages/database/repositories';

@Module({
  imports: [HttpModule, KisWebSocketModule],
  controllers: [],
  providers: [KisTokenScheduleService, SecuritiesTokenRepository],
  exports: [],
})
export class KisScheduleModule {}
