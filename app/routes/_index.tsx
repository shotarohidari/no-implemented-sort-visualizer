// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import "../styles/index.css";
import { BubbleSortVisualizer } from "../components/SortVisualizer";
// biome-ignore lint/style/noDefaultExport: <explanation>
export default function Index() {
	return (
		<main>
			<BubbleSortVisualizer />
		</main>
	);
}
