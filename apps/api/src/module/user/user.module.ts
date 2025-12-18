import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { AWSService } from '../aws';
import { EmailVerificationService } from '../email-verification';
import { UserController } from './user.controller';
import { UserService } from './user.service';

import {
  UserAccountRepository,
  UserNotificationRepository,
  UserOauthTokenRepository,
  UserPushTokenRepository,
  UserRepository,
  UserVisitRepository,
} from '@packages/database/repositories';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [
    UserService,
    AWSService,
    EmailVerificationService,

    UserRepository,
    UserAccountRepository,
    UserPushTokenRepository,
    UserNotificationRepository,
    UserVisitRepository,
    UserOauthTokenRepository,
  ],
  exports: [UserService],
})
export class UserModule {}
