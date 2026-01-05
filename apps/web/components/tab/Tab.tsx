'use client';

import { Text } from '../text';

interface TabItem {
  value: string | number;
  label: string;
}

interface Props {
  items: TabItem[];
  value: string | number | null;
  onChange: (value: string | number) => void;
  className?: string;
}

export const Tab = (props: Props) => {
  const { items, value, onChange, className } = props;

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-layer-2 ${className}`}>
      {items.map((item) => {
        const active = value === item.value;

        return (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            className={`
              rounded-lg transition-all duration-200 ease-in-out py-1
              ${active ? 'bg-main text-white shadow-sm' : ''}
            `}>
            <Text.HEADING text={item.label} color={active ? 'white' : 'default'} />
          </button>
        );
      })}
    </div>
  );
};
