import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { NoticeImage } from '@packages/database/entities';

@Injectable()
export class NoticeImageRepository extends Repository<NoticeImage> {
  constructor(manager: EntityManager) {
    super(NoticeImage, manager);
  }
}
