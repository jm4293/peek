'use client';

import { Text } from '@app/web/components';
import { useNewsPanel } from '@app/web/hooks';

export const NewsButton = () => {
  const { openPanel } = useNewsPanel();

  return (
    <div
      onClick={openPanel}
      className="fixed left-0 bottom-28 z-40 bg-gradient-to-b from-blue from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 p-2 rounded-r-lg cursor-pointer min-h-[80px] flex items-center justify-center"
      style={{ writingMode: 'vertical-rl', WebkitWritingMode: 'vertical-rl' }}>
      <Text.PARAGRAPH text="새로운 소식" className="text-white font-medium whitespace-nowrap" />
    </div>
  );
};
