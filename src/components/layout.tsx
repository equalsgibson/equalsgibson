import type { PropsWithChildren } from "react";

interface Props {
	something?: string;
}

export default function Layout(props: PropsWithChildren<Props>) {
	return (
		<>
			<main>{props.children}</main>
		</>
	);
}
