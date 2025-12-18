import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardController } from './board.controller';
import { BoardService } from './board.service';

import { NotificationHandler } from '@app/api/handler';

import { UserNotification } from '@packages/database/entities';
import {
  BoardArticleRepository,
  BoardCommentRepository,
  BoardLikeRepository,
  BoardRepository,
  StockCategoryRepository,
  UserAccountRepository,
  UserPushTokenRepository,
  UserRepository,
} from '@packages/database/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([UserNotification])],
  controllers: [BoardController],
  providers: [
    BoardService,

    BoardRepository,
    BoardArticleRepository,
    BoardCommentRepository,
    BoardLikeRepository,

    StockCategoryRepository,

    UserRepository,
    UserAccountRepository,
    UserPushTokenRepository,

    NotificationHandler,
  ],
  exports: [],
})
export class BoardModule {}
