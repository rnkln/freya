/* eslint-disable react/prop-types */
import { memo } from 'react'

const MemoizedContent = memo(
	({ children }) => children,
	(prevProps, nextProps) => prevProps.renderWhen && !nextProps.renderWhen
)

MemoizedContent.displayName = 'MemoizedContent'

export default MemoizedContent
