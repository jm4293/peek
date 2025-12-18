import { BoardArticleRepository, BoardCommentRepository, BoardRepository } from '@libs/database/repositories/board';
import { Module } from '@nestjs/common';

import { BoardController } from './board.controller';
import { BoardService } from './board.service';

@Module({
  imports: [],
  controllers: [BoardController],
  providers: [BoardService, BoardRepository, BoardArticleRepository, BoardCommentRepository],
  exports: [],
})
export class BoardModule {}
