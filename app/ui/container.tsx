import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Container(props: Props) {
  return (
    <div className="flex justify-center">
      <div className="prose lg:prose-lg flex justify-center p-5 lg:p-10">
        {props.children}
      </div>
    </div>
  );
}
