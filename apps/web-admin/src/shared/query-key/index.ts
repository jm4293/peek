export class QueryKeys {
  static user = {
    list: (page: number) => ['user', 'list', page],
  };

  static board = {
    detail: (boardId: string) => ['board', 'detail', boardId],
    list: (category?: number) => ['board', 'list', category],
    commentList: (boardId: string) => ['board', 'comment', boardId],
    mineList: () => ['board', 'list-mine'],
    mineCommentList: () => ['board', 'comment', 'mine'],
  };

  static stock = {
    token: () => ['stock', 'token'],
  };
}
