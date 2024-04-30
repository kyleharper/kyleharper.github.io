import type { MetaFunction } from "@remix-run/node";
import {Container} from "~/ui/container";

export const meta: MetaFunction = () => {
  return [
    { title: "Kyle Harper" },
    { name: "description", content: "Kyle Harper, Product Engineer" },
  ];
};

export default function Index() {
  return (
    <Container>
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl tracking-tight">
          Kyle Harper, Product Engineer currently Engineering Manager @ <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://www.bynder.com/en/">Bynder</a>. 😊
          <span className="block">
            <a className="p-1 text-blue-600 dark:text-blue-500 hover:underline" href="https://twitter.com/kyleharperllama">@kyleharperllama</a> /
            <a className="p-1 text-blue-600 dark:text-blue-500 hover:underline" href="https://github.com/kyleharper">github</a>
          </span>
        </p>
      </div>
    </Container>
  );
}
