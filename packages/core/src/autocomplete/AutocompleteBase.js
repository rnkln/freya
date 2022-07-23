import { useRef, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@hs/styles'
import { rewriteEventTarget } from '@hs/utils'
import useUniqueId from '../hooks/useUniqueId'
import useMenuNavigation from '../menu/useMenuNavigation'
import InputBase from '../input/InputBase'
import AutocompleteButton from './AutocompleteButton'
import AutocompletePopup from './AutocompletePopup'
import AutocompleteList from './AutocompleteList'
import AutocompleteMessage from './AutocompleteMessage'
import AutocompleteOption from './AutocompleteOption'

const useButton = (button) => {
	if (button === true) {
		return AutocompleteButton
	}

	if (button === false) {
		return undefined
	}

	return button
}

const filterOptionDefault = (option, query) =>
	option.label?.toLowerCase().includes(query.toLowerCase())

const renderOptionDefault = (option, state, otherProps) => (
	<AutocompleteOption
		key={option.value}
		id={`${state.id}-option-${option.value}`}
		label={option.label}
		value={option.value}
		disabled={option.disabled}
		selected={option === state.selected}
		onClick={(ev) => state.onChange(ev, option.value)}
		{...otherProps}
	/>
)

const useStyles = makeStyles({ name: 'AutocompleteBase' })({
	root: {
		paddingRight: 0
	},
	cursorPointer: {
		cursor: 'pointer'
	},
	cursorDefault: {
		cursor: 'default'
	}
})

const keysToOpen = ['ArrowUp', 'ArrowDown']

const AutocompleteBase = ({
	id: idProp,
	name,
	size = 6,
	value,
	valueToLabel,
	button = true,
	buttonProps = {},
	invalid = false,
	rounded = true,
	disabled,
	searchable = true,
	placeholder,
	openOnClick = true,
	searchIsExternal = false,
	renderEmpty = 'No Options',
	className: classNameProp,
	options = [],
	groupBy = 'group',
	onBlur,
	onSearch,
	onChange,
	listComponent: ListComponent = AutocompleteList,
	filterOption: filterOptionProp = filterOptionDefault,
	renderOption = renderOptionDefault,
	disableCloseOnSelect = false,
	disableCloseOnBlur = false,
	...otherProps
}) => {
	const [open, setOpen] = useState(false)
	const [query, setQuery] = useState()
	const id = useUniqueId('comboboxbase', idProp)
	const inputRef = useRef()
	const Button = useButton(button)
	const { classes, cx } = useStyles()
	const className = cx(
		classes.root,
		{
			[classes.cursorPointer]: !searchable,
			[classes.cursorDefault]: (!searchable && !openOnClick) || disabled
		},
		classNameProp
	)
	const listId = open ? `${id}-listbox` : undefined
	const selected = useMemo(
		() => options.find((option) => option.value === value),
		[options, value]
	)
	const inputValue = valueToLabel?.(value) ?? selected?.label ?? ''

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClick = (ev) => {
		ev.stopPropagation()
		if (!open) {
			handleOpen()
			inputRef.current.focus()
		} else {
			setOpen(false)
		}
	}

	const handleClose = () => {
		setOpen(false)
		setQuery()
	}

	const handleQuery = (event) => {
		handleOpen()
		setQuery(event.target.value)
		onSearch?.(event)
	}

	const handleBlur = (event) => {
		!disableCloseOnBlur && handleClose()
		onBlur?.(rewriteEventTarget(event, { name, value }))
	}

	const handleChange = (event, val) => {
		!disableCloseOnSelect && handleClose()
		onChange?.(rewriteEventTarget(event, { name, value: val }))
	}

	const handleExited = () => {
		setQuery()
		onSearch?.()
	}

	const handleKeyDown = (event) => {
		if (keysToOpen.includes(event.key)) {
			handleOpen()
		}
	}

	const visibleOptions = useMemo(() => {
		if (searchIsExternal || !query) return options
		return options.filter((option) => filterOptionProp(option, query))
	}, [options, query, searchIsExternal, filterOptionProp])

	useMenuNavigation({
		role: 'option',
		enabled: open,
		controller: inputRef.current,
		ignoreHomeEndKeys: true,
		listId,
		initialId: value ? `${id}-option-${value}` : undefined,
		onCancel: handleClose
	})

	const state = { id, value, size, selected, groupBy, onChange: handleChange }

	return (
		<>
			<InputBase
				adornment={Button}
				adornmentProps={{
					open,
					disabled,
					tabIndex: -1,
					onClick: handleClick,
					rounded,
					...buttonProps
				}}
				aria-expanded={open}
				aria-owns={listId}
				autoComplete='off'
				className={className}
				disabled={disabled}
				id={id}
				inputProps={{
					'aria-controls': listId,
					'aria-autocomplete': 'list'
				}}
				invalid={invalid}
				name={name}
				placeholder={placeholder}
				onBlur={handleBlur}
				onChange={handleQuery}
				onClick={openOnClick && !disabled ? handleOpen : undefined}
				onKeyDown={handleKeyDown}
				readOnly={!searchable}
				ref={inputRef}
				role='combobox'
				rounded={rounded}
				value={query ?? inputValue}
				{...otherProps}
			/>
			<AutocompletePopup
				open={open}
				size={size}
				anchor={inputRef.current?.parentElement}
				onExited={handleExited}
			>
				{visibleOptions.length === 0 &&
					(typeof renderEmpty === 'function' ? (
						renderEmpty()
					) : (
						<AutocompleteMessage message={renderEmpty} />
					))}

				{visibleOptions.length !== 0 && (
					<ListComponent
						id={listId}
						options={visibleOptions}
						renderOption={renderOption}
						state={state}
					/>
				)}
			</AutocompletePopup>
		</>
	)
}

AutocompleteBase.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	size: PropTypes.number,
	value: PropTypes.string,
	valueToLabel: PropTypes.func,
	button: PropTypes.oneOfType([PropTypes.bool, PropTypes.elementType]),
	buttonProps: PropTypes.object,
	invalid: PropTypes.bool,
	rounded: PropTypes.bool,
	disabled: PropTypes.bool,
	searchable: PropTypes.bool,
	placeholder: PropTypes.string,
	openOnClick: PropTypes.bool,
	searchIsExternal: PropTypes.bool,
	renderEmpty: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	className: PropTypes.string,
	options: PropTypes.array,
	groupBy: PropTypes.string,
	onBlur: PropTypes.func,
	onSearch: PropTypes.func,
	onChange: PropTypes.func,
	listComponent: PropTypes.elementType,
	filterOption: PropTypes.func,
	renderOption: PropTypes.func,
	disableCloseOnSelect: PropTypes.bool,
	disableCloseOnBlur: PropTypes.bool
}

export default AutocompleteBase
