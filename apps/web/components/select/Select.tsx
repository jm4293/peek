'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Text } from '../text';

interface Props {
  name: string;
  options: { value: string; label: string }[];
  value: string | undefined | null;
  onChange: (value: string) => void;
  defaultValue?: string;
  title?: string;
  className?: string;
}

export const Select = (props: Props) => {
  const { options, title, name, value, defaultValue, onChange, className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined | null>(value || defaultValue);

  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue);
    }
  };

  const selectedOption = options.find((opt) => opt.value === selectedValue);
  const displayText = selectedOption ? selectedOption.label : '선택하세요';

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  return (
    <div className={`w-full flex flex-col gap-2 ${className}`} ref={selectRef}>
      {title && (
        <label className="pl-2" htmlFor={name}>
          <Text.HEADING text={title} />
        </label>
      )}
      <div className="relative">
        <div
          onClick={handleToggle}
          className={`w-full flex items-center justify-between pl-4 pr-10 py-3 bg-layer-0 rounded-xl`}>
          <span className={`${!selectedOption ? 'text-gray' : 'text-foreground'}`}>{displayText}</span>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown
              size={18}
              className={`text-gray transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute z-50 w-full mt-2 rounded-xl bg-layer-0 overflow-hidden max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`w-full text-left px-4 py-3 transition-colors duration-150 ${
                  selectedValue === option.value
                    ? 'bg-theme-main-color/20 text-theme-main-color font-medium'
                    : 'text-theme-text-default hover:bg-theme-bg-card/50 dark:hover:bg-theme-bg-card-hover'
                }`}>
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
