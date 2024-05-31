import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Footer } from "~/ui/footer";
import { Header } from "~/ui/header";
import { Hr } from "~/ui/hr";

export const meta: MetaFunction = () => {
	return [
		{ title: "Kyle Harper Blog" },
		{ name: "description", content: "Kyle Harper, Product Engineer" },
	];
};

export default function Blog() {
	return (
		<article
			className={
				"w-full prose-h2:text-3xl prose-headings:tracking-tight prose-blockquote:bg-slate-50 prose-blockquote:border-slate-300 prose-blockquote:px-10 prose-blockquote:py-2"
			}
		>
			<Header />
			<Outlet />
			<Footer />
		</article>
	);
}
