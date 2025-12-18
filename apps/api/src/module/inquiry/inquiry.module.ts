import { Module } from '@nestjs/common';

import { InquiryController } from './inquiry.controller';
import { InquiryService } from './inquiry.service';

import { InquiryImageRepository, InquiryReplyRepository, InquiryRepository } from '@packages/database/repositories';

@Module({
  imports: [],
  controllers: [InquiryController],
  providers: [InquiryService, InquiryRepository, InquiryReplyRepository, InquiryImageRepository],
  exports: [],
})
export class InquiryModule {}
