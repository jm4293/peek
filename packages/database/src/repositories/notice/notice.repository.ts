import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { Notice } from '@packages/database/entities';

@Injectable()
export class NoticeRepository extends Repository<Notice> {
  constructor(manager: EntityManager) {
    super(Notice, manager);
  }
}
