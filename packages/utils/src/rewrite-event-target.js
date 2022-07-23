export default (event, mutation) => ({
	...event,
	target: {
		...event.target,
		...mutation
	}
})
