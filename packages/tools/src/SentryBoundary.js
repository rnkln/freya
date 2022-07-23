import { Component } from 'react'
import PropTypes from 'prop-types'
import { withScope, captureException, showReportDialog } from '@sentry/browser'

class SentryBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { user: null, error: null, eventId: null, componentStack: null }
		this.reset = this.reset.bind(this)
		this.report = this.report.bind(this)
	}

	componentDidCatch(error, { componentStack }) {
		const { scope: scopeProp, reportOnCapture } = this.props

		withScope((scope) => {
			if (scopeProp) {
				scope.setUser(scopeProp.user)
				scope.setTags(scopeProp.tags)
				scope.setLevel(scopeProp.level)
				scope.setExtras(scopeProp.extras)
				scope.setFingerprint(scopeProp.fingerprint)
			}

			const user = scope._user
			const eventId = captureException(error, { contexts: { react: { componentStack } } })

			if (reportOnCapture) {
				showReportDialog({
					user,
					eventId
				})
			}

			this.setState({
				user,
				error,
				eventId,
				componentStack
			})
		})
	}

	report() {
		showReportDialog({
			user: this.state.user,
			eventId: this.state.eventId
		})
	}

	reset() {
		this.setState({
			user: null,
			error: null,
			eventId: null,
			componentStack: null
		})
	}

	render() {
		const { user, error, componentStack } = this.state
		const { fallback: Fallback, children } = this.props

		if (error) {
			return (
				<Fallback
					user={user}
					error={error}
					componentStack={componentStack}
					reset={this.reset}
					report={this.report}
				/>
			)
		}

		return children
	}
}

SentryBoundary.propTypes = {
	scope: PropTypes.object,
	reportOnCapture: PropTypes.bool,
	children: PropTypes.node,
	fallback: PropTypes.elementType
}

export default SentryBoundary
