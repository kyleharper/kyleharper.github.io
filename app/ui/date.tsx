import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Date(props: Props) {
  return (
    <p className="w-full m-0 text-slate-400 m-0 lg:m-0">{props.children}</p>
  );
}
