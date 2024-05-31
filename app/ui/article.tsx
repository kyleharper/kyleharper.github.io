import { NavLink } from "@remix-run/react";
import type { ReactNode } from "react";
import { Footer } from "~/ui/footer";
import { Hr } from "~/ui/hr";

interface Props {
	children: ReactNode;
}

export function Article(props: Props) {
	return (
		<article
			className={
				"w-full prose-headings:tracking-tight prose-blockquote:bg-slate-50 prose-blockquote:border-slate-300 prose-blockquote:px-10 prose-blockquote:py-2"
			}
		>
			<header className="mb-20">
				<nav>
					<NavLink to="/" prefetch="render" className="mr-2">
						Kyle Harper
					</NavLink>
				</nav>
			</header>

			{props.children}

			<Hr />
			<Footer />
		</article>
	);
}
