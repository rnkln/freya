import { makeStyles } from '@hs/styles'
import Spinner from '../loading/Spinner'

const useStyles = makeStyles({ name: 'PaginationSpinner' })((theme) => ({
	root: {
		height: theme.size(3.6),
		width: theme.size(3.6),
		margin: 0,
		padding: 0
	}
}))

const PaginationSpinner = () => {
	const { classes } = useStyles()

	return <Spinner className={classes.root} />
}

export default PaginationSpinner
