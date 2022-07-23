import { useContext } from 'react'
import { createMakeStyles } from 'tss-react'
import { ThemeContext } from './ThemeProvider'

const { makeStyles, useStyles } = createMakeStyles({
	useTheme: () => useContext(ThemeContext)
})

const isDevelopment = process.env.NODE_ENV === 'development'

const cleanLabels = (obj) =>
	Object.entries(obj).reduce(
		(acc, [key, rules]) => ({
			...acc,
			[key]: {
				...rules,
				label: ' '
			}
		}),
		{}
	)

const makeStylesWithCleanUp = ({ name, ...rest } = {}) => {
	const makeStylesArgument = isDevelopment ? { name, ...rest } : rest

	return isDevelopment
		? makeStyles(makeStylesArgument)
		: (callbackArgument) =>
				makeStyles(makeStylesArgument)(
					typeof callbackArgument === 'function'
						? (...args) => cleanLabels(callbackArgument(...args))
						: cleanLabels(callbackArgument)
				)
}

export { makeStylesWithCleanUp as makeStyles, useStyles }
