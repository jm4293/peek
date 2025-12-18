import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { UserOauthToken } from '@packages/database/entities';

@Injectable()
export class UserOauthTokenRepository extends Repository<UserOauthToken> {
  constructor(manager: EntityManager) {
    super(UserOauthToken, manager);
  }
}
