export function randInt(begin: number, end: number) {
	if (!(Number.isInteger(begin) && Number.isInteger(end))) {
		throw new Error(`inputs should be integer. begin: ${begin}, end: ${end}`);
	}
	return Math.max(begin, Math.ceil(Math.random() * end));
}

export function shuffle<T>(ary: T[]) {
	const aryLength = ary.length;
	const source = structuredClone(ary);
	const shuffledArray: T[] = [];
	while (true) {
		if (shuffledArray.length === aryLength) {
			break;
		}
		const randIndex = randInt(0, source.length - 1);

		const val = source.splice(randIndex, 1)[0];
		shuffledArray.push(val);
	}
	return shuffledArray;
}
