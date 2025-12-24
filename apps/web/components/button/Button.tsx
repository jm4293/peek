'use client';

import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | React.ReactNode;
  className?: string;
}

const CONTAINER = (props: Props) => {
  const { text, className, ...rest } = props;

  return (
    <button
      className={`
        px-6 py-3 rounded-lg
        border-none
        transition-colors duration-200
        disabled:cursor-not-allowed
        bg-main hover:brightness-105 disabled:bg-gray/20
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
        border
        bg-layer-2/30 dark:bg-layer-1/30 backdrop-blur-sm
        transition-colors duration-200
        focus:outline-none
        disabled:cursor-not-allowed disabled:opacity-60
        border-main hover:border-layer-3 focus:ring-2 focus:ring-main/20 focus:border-main disabled:bg-gray/5 dark:disabled:bg-layer-1/50 disabled:border-gray/30
        ${className}
      `}
      {...rest}>
      <strong className="whitespace-nowrap font-semibold text-main disabled:text-gray">{text}</strong>
    </button>
  );
};

export const Button = {
  CONTAINER,
  OUTLINE,
};
