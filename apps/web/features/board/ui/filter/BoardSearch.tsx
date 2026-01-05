'use client';

import { Search } from 'lucide-react';
import { KeyboardEvent, useState } from 'react';

import { Input } from '@app/web/components';
import { useQueryParams } from '@app/web/hooks';

export const BoardSearch = () => {
  const { getQuery, setQueries } = useQueryParams();
  const value = getQuery('text') || '';

  const [text, setText] = useState(value);

  const handleSearch = () => {
    setQueries({ text: text.trim() });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Input
      name="search"
      placeholder="게시글 검색"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      className="flex-1 min-w-0">
      <Search size={18} className="text-gray" onClick={handleSearch} />
    </Input>
  );
};
