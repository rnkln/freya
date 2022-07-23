import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { init, configureScope } from '@sentry/browser'

const Sentry = ({
	dsn,
	scope: scopeProp,
	debug,
	release,
	environment,
	ignoreErrors,
	whitelistUrls,
	autoSessionTracking
}) => {
	useEffect(() => {
		init({
			dsn,
			debug,
			release,
			environment,
			ignoreErrors,
			whitelistUrls,
			autoSessionTracking
		})

		if (scopeProp) {
			configureScope((scope) => {
				scope.setUser(scopeProp.user)
				scope.setTags(scopeProp.tags)
				scope.setLevel(scopeProp.level)
				scope.setExtras(scopeProp.extras)
				scope.setFingerprint(scopeProp.fingerprint)
			})
		}
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	return null
}

Sentry.propTypes = {
	dsn: PropTypes.string.isRequired,
	scope: PropTypes.object,
	debug: PropTypes.bool,
	release: PropTypes.string,
	environment: PropTypes.string.isRequired,
	ignoreErrors: PropTypes.array.isRequired,
	whitelistUrls: PropTypes.array.isRequired
}

export default Sentry
