'use client';

import { Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  loading?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  loading = false,
  className,
  ...props
}: ButtonProps) {
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
}
