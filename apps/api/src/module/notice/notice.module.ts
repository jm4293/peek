import { Module } from '@nestjs/common';

import { NoticeController } from './notice.controller';
import { NoticeService } from './notice.service';

import { NoticeRepository } from '@packages/database/repositories';

@Module({
  imports: [],
  controllers: [NoticeController],
  providers: [NoticeService, NoticeRepository],
  exports: [],
})
export class NoticeModule {}
