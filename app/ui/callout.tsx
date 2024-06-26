import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export function Callout(props: Props) {
	return (
		<div className="font-semibold text-2xl tracking-tight leading-snug">
			{props.children}
		</div>
	);
}
