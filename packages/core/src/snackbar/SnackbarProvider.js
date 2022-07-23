import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import SnackbarContext from './SnackbarContext'
import Snackbar from './Snackbar'

const inputToProps = (input) => {
	if (typeof input === 'string') {
		return { value: input }
	}

	return input
}

const SnackbarProvider = ({ children }) => {
	const [state, setState] = useState({ value: '' })
	const handleClose = () => setState((prev) => ({ ...prev, open: false }))

	const value = useMemo(() => {
		const show = (props) => setState({ open: true, ...props })
		const info = (input) => show({ severity: 'info', ...inputToProps(input) })
		const error = (input) => show({ severity: 'error', ...inputToProps(input) })
		const success = (input) => show({ severity: 'success', ...inputToProps(input) })
		const warning = (input) => show({ severity: 'warning', ...inputToProps(input) })
		return { show, info, error, success, warning }
	}, [])

	return (
		<>
			<SnackbarContext.Provider value={value}>{children}</SnackbarContext.Provider>
			<Snackbar onClose={handleClose} {...state} />
		</>
	)
}

SnackbarProvider.propTypes = {
	children: PropTypes.node
}

export default SnackbarProvider
