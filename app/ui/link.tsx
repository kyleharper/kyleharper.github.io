import { NavLink } from '@remix-run/react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  className?: string;
}

export function Link(props: Props) {
  return (
    <NavLink
      prefetch="intent"
      className={`text-blue-600 dark:text-blue-500 no-underline hover:underline ${props.className || ''}`}
      to={props.href}
    >
      {props.children}
    </NavLink>
  );
}
