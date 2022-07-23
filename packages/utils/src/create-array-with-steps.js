export default (start = 0, end = 10, step = 1) => {
	const length = (end - start) / step + 1

	if (length < 0) return []
	return Array.from({ length }, (_, i) => Number((start + i * step).toFixed(2)))
}
