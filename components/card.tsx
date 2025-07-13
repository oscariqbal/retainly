'use client';

import React from 'react';
import clsx from 'clsx';

type CardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, description, children, className }) => {
  return (
    <div
      className={clsx(
        'rounded-lg shadow-sm p-4 md:p-6',
        className
      )}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Card;
