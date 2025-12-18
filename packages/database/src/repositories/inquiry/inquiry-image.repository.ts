import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { InquiryImage } from '@packages/database/entities';

@Injectable()
export class InquiryImageRepository extends Repository<InquiryImage> {
  constructor(manager: EntityManager) {
    super(InquiryImage, manager);
  }
}
