import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Container(props: Props) {
  return (
    <div className="flex justify-center">
      <div className="prose lg:prose-lg tracking-tight flex flex-wrap justify-center p-5 lg:px-0">
        {props.children}
      </div>
    </div>
  );
}
