'use client';

import { BoardSearch } from './BoardSearch';
import { BoardSortSelect } from './BoardSortSelect';

export const BoardFilter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
      <div className="col-span-1 md:col-span-1">
        <BoardSortSelect />
      </div>
      <div className="col-span-1 md:col-span-4">
        <BoardSearch />
      </div>
    </div>
  );
};
