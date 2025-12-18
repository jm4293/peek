import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { UserVisit } from '@packages/database/entities';

@Injectable()
export class UserVisitRepository extends Repository<UserVisit> {
  constructor(manager: EntityManager) {
    super(UserVisit, manager);
  }
}
