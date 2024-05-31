import { Logo } from "~/ui/logo";

export function Header() {
	return (
		<header className="mt-10 mb-10">
			<nav>
				<a className="inline-flex" href="/">
					<span className="invisible absolute">home</span>
					<Logo />
				</a>
			</nav>
		</header>
	);
}
