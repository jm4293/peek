import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { UserNotification } from '@packages/database/entities';

@Injectable()
export class UserNotificationRepository extends Repository<UserNotification> {
  constructor(manager: EntityManager) {
    super(UserNotification, manager);
  }
}
