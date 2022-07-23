import { createContext, useContext } from 'react'

const DateRangePickerContext = createContext({})

export const useDateRangePicker = () => useContext(DateRangePickerContext)

export default DateRangePickerContext
