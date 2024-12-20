import { configureStore } from '@reduxjs/toolkit'
import OfficeSlice from './OfficeSlice'

const store = configureStore({
    reducer: {
        office: OfficeSlice.reducer
    }
})

export default store