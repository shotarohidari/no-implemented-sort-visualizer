import { Outlet, Scripts } from "@remix-run/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
export function HydrateFallback() {
	return (
		<>
			<p>Loading...</p>
			<Scripts />
		</>
	);
}

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function Component() {
	return (
		<>
			<Outlet />
			<Scripts />
		</>
	);
}
