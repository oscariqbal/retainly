'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "text-[var(--foreground)] text-xs sm:text-base md:text-lg lg:text:xl transition-all duration-200 hover:cursor-pointer",
        isActive
          ? "opacity-100 drop-shadow-md"
          : "opacity-60 hover:opacity-100 hover:drop-shadow-sm",
        className
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
