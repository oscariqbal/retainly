'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  asButton?: boolean;
};

export default function NavLink({ 
  href,
  children,
  className = '',
  asButton = false
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = !asButton && pathname === href;

  const baseClass = clsx(
    'transition-all duration-200 hover:cursor-pointer',
    asButton
      ? 'inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium hover:opacity-85'
      : 'text-xs sm:text-base md:text-lg lg:text-xl',
    isActive
      ? 'opacity-100 drop-shadow-md'
      : !asButton && 'opacity-60 hover:opacity-100 hover:drop-shadow-sm',
    className
  );

  return (
    <Link
      href={href}
      className={baseClass}
      aria-current={!asButton && isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
