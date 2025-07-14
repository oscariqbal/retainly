import clsx from 'clsx';
import { ReactNode } from 'react';

type CardProps = {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export default function Card({ title, description, children, className }: CardProps) {
  return (
    <div className={clsx('rounded-lg shadow-sm p-4 md:p-6', className)}>
      <h3>{title}</h3>
      <p>{description}</p>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}
