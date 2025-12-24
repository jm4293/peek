'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Card } from '../card';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = [
    { value: 'system', icon: Monitor, label: 'System' },
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
  ];

  return (
    <Card.SECTION>
      <div className="flex flex-col gap-3">
        {themes.map(({ value, icon: Icon, label }) => {
          const isActive = theme === value;

          return (
            <button
              key={value}
              onClick={() => setTheme(value)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all border-[1px]
                ${
                  isActive
                    ? 'bg-[#9470dc]/10 border-[#9470dc] text-main'
                    : 'bg-layer-2 border-layer-2 text-foreground hover:border-[#9470dc]/50 hover:text-main'
                }
              `}>
              <Icon size={20} className={isActive ? 'text-main' : ''} />
              <span className={`${isActive ? 'text-main' : ''} font-medium`}>{label}</span>
              {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-main" />}
            </button>
          );
        })}
      </div>
    </Card.SECTION>
  );
};
