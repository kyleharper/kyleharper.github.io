import type { MetaFunction } from '@remix-run/node';
import * as blogPosts from '~/data/blog';
import type { Post } from '~/data/blog';
import { About } from '~/ui/about';
import { Extract } from '~/ui/extract';
import { Footer } from '~/ui/footer';
import { Hr } from '~/ui/hr';

export const meta: MetaFunction = () => {
  return [
    { title: 'Kyle Harper' },
    { name: 'description', content: 'Kyle Harper, Product Engineer' },
  ];
};

export default function Index() {
  let posts = Object.entries(blogPosts).filter(
    ([name]) => name !== 'default',
  ) as unknown as [[name: string, module: Post]];

  return (
    <div className="h-screen flex items-center justify-center flex-wrap">
      <div className="tracking-tight text-center">
        <main>
          <h1>Kyle Harper</h1>
          <About />
        </main>

        <Hr />

        <aside>
          <h2 className="mt-0">Blog</h2>
          {posts.map(([name, module]) => (
            <Extract
              key={name}
              title={module.title}
              date={module.date}
              href={module.filepath
                .replace('app/routes/blog.', 'blog/')
                .replace('.mdx', '')}
            />
          ))}
        </aside>

        <Hr />

        <Footer className="text-center" />
      </div>
    </div>
  );
}
