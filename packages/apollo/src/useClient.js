import { useMemo } from 'react'
import createClient from './createClient'

export default ({ uri, cache }) => useMemo(() => createClient({ uri, cache }), [uri, cache])
