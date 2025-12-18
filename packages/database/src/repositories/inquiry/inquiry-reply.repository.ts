import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { InquiryReply } from '@packages/database/entities';

@Injectable()
export class InquiryReplyRepository extends Repository<InquiryReply> {
  constructor(manager: EntityManager) {
    super(InquiryReply, manager);
  }
}
