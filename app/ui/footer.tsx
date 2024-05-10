import type { ReactNode } from 'react';
import { Link } from '~/ui/link';

interface Props {
  children?: ReactNode;
  className?: string;
}

export function Footer(props: Props) {
  return (
    <footer className={`w-full ${props.className || ''}`}>
      <nav>
        <Link href="https://twitter.com/kyleharperllama" className="pr-2">
          @kyleharperllama
        </Link>
        <Link href="https://github.com/kyleharper">github</Link>
      </nav>

      {props.children}
    </footer>
  );
}
