import type { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export function Container(props : Props) {
    return (
        <div className="container p-10">
            <div className="flex justify-center">
                { props.children }
            </div>
        </div>
    );
}
