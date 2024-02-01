import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Kyle Harper" },
    { name: "description", content: "Kyle Harper, Product Engineer" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-xl tracking-tight">
        Kyle Harper, Product Engineer & Engineering Manager <a
          className="text-blue-600 dark:text-blue-500 hover:underline" href="https://www.bynder.com/en/">@Bynder</a>.
        😊
      </p>
    </div>
  );
}
