import { BoardTypeValue } from '@packages/shared/constant';

import { StockCategoryModel } from '../../stock';
import { UserAccountModel } from '../../user';
import { BoardArticleModel } from './board-article.model';

export interface BoardModel {
  id: number;
  uuid: string;
  type: BoardTypeValue;
  title: string;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date | null;
  commentCount: number;
  likeCount: number;

  userAccount: UserAccountModel;
  stockCategory: StockCategoryModel;
  boardArticle: BoardArticleModel;
}
