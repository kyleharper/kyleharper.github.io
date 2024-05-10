import type { MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import { Footer } from '~/ui/footer';
import { Hr } from '~/ui/hr';

export const meta: MetaFunction = () => {
  return [
    { title: 'Kyle Harper Blog' },
    { name: 'description', content: 'Kyle Harper, Product Engineer' },
  ];
};

export default function Blog() {
  return (
    <article
      className={
        'w-full prose-headings:tracking-tight prose-blockquote:bg-slate-50 prose-blockquote:border-slate-300 prose-blockquote:px-10 prose-blockquote:py-2'
      }
    >
      <header className="mb-20">
        <nav>
          <a href="/" className="mr-2 no-underline hover:underline">
            Kyle Harper
          </a>
        </nav>
      </header>

      <Outlet />
      <Hr />
      <Footer />
    </article>
  );
}
