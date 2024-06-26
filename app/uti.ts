export function randInt(begin: number, end: number) {
	if (!(Number.isInteger(begin) && Number.isInteger(end))) {
		throw new Error(`inputs should be integer. begin: ${begin}, end: ${end}`);
	}
	return Math.max(begin, Math.ceil(Math.random() * end));
}
