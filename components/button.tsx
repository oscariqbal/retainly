'use client';

import { Loader2 } from 'lucide-react';
import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors transition-opacity',
        !loading && 'hover:opacity-85 hover:cursor-pointer',
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
      {children}
    </button>
  );
};

export default Button;
