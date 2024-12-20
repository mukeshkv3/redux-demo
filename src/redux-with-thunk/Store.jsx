import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import OfficeSlice from './OfficeSlice'

const store = configureStore({
    office: OfficeSlice.reducer
},
)

export default store