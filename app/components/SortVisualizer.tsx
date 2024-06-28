import { useEffect, useState } from "react";
import { iterBubbleSort, shuffle } from "../util";

const barLength = 5;
const shuffledBars = shuffle(
	Array.from({ length: barLength }, (_, i) => {
		return i;
	}),
);

const bubbleSortGen = iterBubbleSort(shuffledBars);
export function BubbleSortVisualizer() {
	const [bars, setBars] = useState(shuffledBars);
	useEffect(() => {
		const id = window.setInterval(() => {
			const next = bubbleSortGen.next();
			if (next.done) {
				clearInterval(id);
			}
			setBars(next.value);
		}, 1000);
		return () => {
			clearInterval(id);
		};
	}, []);
	return (
		<div style={{ height: "100%" }}>
			{bars.map((bar) => {
				return (
					<div
						key={`${bar * Math.random()}`}
						style={{
							border: "0.1px solid black",
							borderRadius: "1px",
							backgroundColor: `rgb(${255 / bar},${
								(255 - 255 / bar) % 255
							},${bar})`,
							height: `calc(100% / ${barLength})`,
							width: `calc(100vw / ${barLength - bar})`,
						}}
					>
						{bar}
					</div>
				);
			})}
		</div>
	);
}
