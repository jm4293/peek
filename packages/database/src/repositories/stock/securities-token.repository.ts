import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { securitiesToken } from '@packages/database/entities';

import { TokenProviderValue, TokenType } from '@packages/shared/constant';

@Injectable()
export class SecuritiesTokenRepository extends Repository<securitiesToken> {
  constructor(manager: EntityManager) {
    super(securitiesToken, manager);
  }

  async getSocketToken(provider: TokenProviderValue) {
    const ret = await this.findOne({ where: { type: TokenType.SOCKET, provider } });

    if (!ret) {
      throw new Error(`${provider} socket token이 DB에 존재하지 않습니다.`);
    }

    return ret;
  }

  async getOAuthToken(provider: TokenProviderValue) {
    const ret = await this.findOne({ where: { type: TokenType.OAUTH, provider } });

    if (!ret) {
      throw new Error('oauth token이 DB에 존재하지 않습니다.');
    }

    return ret;
  }
}
