'use client';

import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | React.ReactNode;
  className?: string;
  selected?: boolean;
}

const CONTAINER = (props: Props) => {
  const { text, className, disabled, ...rest } = props;

  return (
    <button
      className={`
        px-6 py-3 rounded-lg
        border-none
        transition-colors duration-200
        disabled:cursor-not-allowed 
        ${disabled ? 'bg-[#9470dc]/60 hover:bg-[#9470dc]/60' : 'bg-main hover:brightness-105'}
        ${className}
      `}
      {...rest}>
      {typeof text === 'string' ? (
        <strong className="text-white disabled:text-gray whitespace-nowrap font-semibold">{text}</strong>
      ) : (
        text
      )}
    </button>
  );
};

const OUTLINE = (props: Props) => {
  const { text, className, ...rest } = props;

  return (
    <button
      className={`
        px-6 py-3 rounded-xl
        border backdrop-blur-sm
        transition-colors duration-200
        focus:outline-none
        disabled:cursor-not-allowed disabled:opacity-60
        disabled:bg-gray/5 dark:disabled:bg-layer-1/50 disabled:border-gray/20
        border-[#9470dc] bg-transparent hover:border-[#9470dc]/60 hover:bg-[#9470dc]/5
        ${className}
      `}
      {...rest}>
      {typeof text === 'string' ? (
        <strong className="whitespace-nowrap font-semibold text-main disabled:text-gray">{text}</strong>
      ) : (
        text
      )}
    </button>
  );
};

export const Button = {
  CONTAINER,
  OUTLINE,
};
