import clsx from 'clsx';
import { ReactNode } from 'react';

type CardProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
  direction?: 'row' | 'col';
};

export default function Card({ title, children, className, direction = 'col' }: CardProps) {
  const isRow = direction === 'row';

  return (
    <div className={clsx(
      'flex shadow-sm p-3 md:p-4 rounded-sm',
      isRow ? 'flex-col md:flex-row justify-between' : 'flex-col',
      className
    )}>
      {title && !children && (
        <h3 className={clsx(
          'flex items-center h-full w-full',
        )}>
          {title}
        </h3>
      )}
      {title && children && (
        <>
          <h3 className={clsx(
            'flex items-center',
            isRow ? 'h-[20%] w-full md:h-full md:w-[60%] border border-blue-800 md:border-blue-300' : 'h-[10%] w-full'
          )}>
            {title}
          </h3>
          <div className={clsx(
            isRow ? 'h-[5%] w-full md:w-[5%] md:h-full bg-blue-800 md:bg-blue-300' : 'h-[7.5%] w-full'
          )}></div>
          <div className={clsx(
            'flex items-center',
            isRow ? 'h-[50%] w-full md:h-full md:justify-end border border-blue-800 md:border-blue-300' : 'h-[82.5%] w-full'
          )}>
            {children}
          </div>
        </>
      )}
      {!title && children &&(
        <div className='w-full h-full'> {/* flex items-center */}
          {children}
        </div>
      )}
    </div>
  );
}
