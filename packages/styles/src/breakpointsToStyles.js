export default (theme, { breakpoints = {}, ...props }, propsToStyles) =>
	Object.entries(breakpoints).reduce(
		(prev, [breakpoint, changes]) => ({
			...prev,
			[theme.breakpoints.below(breakpoint)]: propsToStyles({ ...props, ...changes })
		}),
		propsToStyles(props)
	)
