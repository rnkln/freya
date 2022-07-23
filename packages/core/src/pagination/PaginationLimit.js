import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { rewriteEventTarget } from '@hs/utils'
import { ChevronUp } from '@hs/icons'
import Menu from '../menu/Menu'
import MenuItem from '../menu/MenuItem'
import Button from '../button/Button'
import Text from '../typography/Text'

const PaginationLimit = ({ value, label, options = [5, 10, 20], onChange, ...otherProps }) => {
	const [open, setOpen] = useState(false)
	const ref = useRef()

	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	const handleChange = (event, option) => {
		const nextEvent = rewriteEventTarget(event, { value: option })
		onChange(nextEvent)
		handleClose()
	}

	return (
		<>
			<Button
				ref={ref}
				icon={Text}
				iconProps={{ value: label }}
				value={value.toString()}
				adornment={ChevronUp}
				adornmentProps={{ rotate: open ? 0 : 180 }}
				variant='outlined'
				color='inherit'
				onClick={handleOpen}
				{...otherProps}
			/>

			<Menu
				open={open}
				trap={false}
				style={{ minWidth: ref.current?.offsetWidth }}
				anchor={ref.current}
				align='top left'
				onClose={handleClose}
			>
				{options.map((option) => (
					<MenuItem
						key={option}
						value={option.toString()}
						selected={option === value}
						onClick={(event) => handleChange(event, option)}
					/>
				))}
			</Menu>
		</>
	)
}

PaginationLimit.propTypes = {
	value: PropTypes.number.isRequired,
	label: PropTypes.string,
	options: PropTypes.array,
	onChange: PropTypes.func.isRequired
}

export default PaginationLimit
