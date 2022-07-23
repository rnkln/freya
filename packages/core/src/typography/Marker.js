import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { capitalise } from '@hs/utils'

const convertMatchToRegex = (match, config) => {
	if (match instanceof RegExp) {
		return match
	}

	const raw = Array.isArray(match) ? match.filter((m) => m).join('|') : match
	const pattern = raw ? `(${raw})` : '(.^)'
	const modifiers = Object.entries(config).reduce(
		(acc, [name, enabled]) => (enabled ? acc + name.charAt(0) : acc),
		''
	)

	return new RegExp(pattern, modifiers)
}

const useStyles = makeStyles({ name: 'Marker' })((theme) => ({
	chunk: {},
	...theme.palette.create('Foreground', (colors) => ({
		color: colors.main,
		background: 'unset'
	})),
	...theme.palette.create('Background', (colors) => ({
		color: 'unset',
		background: colors.main
	}))
}))

const Marker = ({
	value = '',
	color = 'success',
	variant = 'background',
	multiline = true,
	insensitive = true,
	match,
	matchComponent: MatchComponent = 'mark',
	matchClassName: matchClassNameProp,
	chunkComponent: ChunkComponent = 'span',
	chunkClassName: chunkClassNameProp
}) => {
	const { classes, cx } = useStyles()
	const styling = color + capitalise(variant)
	const regex = useMemo(
		() =>
			convertMatchToRegex(match, {
				multiline,
				insensitive
			}),
		[match, multiline, insensitive]
	)

	const chunks = useMemo(() => value.split(regex), [value, regex])
	const chunkClassName = cx(classes.chunk, chunkClassNameProp)
	const matchClassName = cx(classes[styling], matchClassNameProp)

	return (
		<>
			{chunks.map((chunk, index) => {
				if (!chunk) {
					return null
				}

				const matched = index % 2 === 1
				const Component = matched ? MatchComponent : ChunkComponent
				const className = matched ? matchClassName : chunkClassName

				return (
					<Component key={index} className={className}>
						{chunk}
					</Component>
				)
			})}
		</>
	)
}

Marker.displayName = 'Marker'

Marker.propTypes = {
	value: PropTypes.string,
	color: PropTypes.string,
	variant: PropTypes.oneOf(['foreground', 'background']),
	match: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.instanceOf(RegExp)])
		.isRequired,
	matchComponent: PropTypes.elementType,
	matchClassName: PropTypes.string,
	chunkComponent: PropTypes.elementType,
	chunkClassName: PropTypes.string,
	multiline: PropTypes.bool,
	insensitive: PropTypes.bool
}

export default Marker
