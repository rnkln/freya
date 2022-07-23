import { useReducer, useCallback } from 'react'

export default (reducer, middlewares, ...rest) => {
	const reducerWithMiddlewares = useCallback(
		(prevState, action) => {
			const nextState = reducer(prevState, action)
			middlewares?.forEach((middleware) => middleware(nextState))
			return nextState
		},
		[middlewares, reducer]
	)

	return useReducer(reducerWithMiddlewares, ...rest)
}
