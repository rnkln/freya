import { merge } from 'lodash-es'
import color from 'color'
import createShadow from './internals/createShadow'
import createPalette from './internals/createPalette'
import createShorthand from './internals/createShorthand'
import createTypography from './internals/createTypography'
import createBreakpoints from './internals/createBreakpoints'
import createTransitions from './internals/createTransitions'

export default (theme = {}) => {
	const { palette = {}, typography = {}, breakpoints = {}, transitions = {}, ...others } = theme

	return merge(
		{
			palette: createPalette(palette),
			typography: createTypography(typography),
			breakpoints: createBreakpoints(breakpoints),
			transitions: createTransitions(transitions),
			alpha: (input, factor) => color(input).alpha(factor).string(),
			lightness: (input, factor) =>
				color(input)
					.lightness(factor * 100)
					.string(),
			enum: createShorthand((value) => value),
			size: createShorthand((factor) => `${factor}rem`),
			radius: createShorthand((factor) => `${(factor * 0.3).toFixed(2)}rem`),
			shadow: createShadow(),
			spacing: createShorthand((factor) => `${(factor * 0.8).toFixed(2)}rem`),
			__unstable_hover: (style) => ({
				'&.active': style,
				'&:hover': style,
				'&:focus-visible': style,
				'&:-moz-focusring': style
			})
		},
		others
	)
}
