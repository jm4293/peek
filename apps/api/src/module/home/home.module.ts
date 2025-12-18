import { Module } from '@nestjs/common';

import { HomeController } from './home.controller';
import { HomeService } from './home.service';

import { BoardRepository } from '@packages/database/repositories';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [HomeService, BoardRepository],
  exports: [],
})
export class HomeModule {}
