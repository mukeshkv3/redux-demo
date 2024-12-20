import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    offices: [], isLoading: false, hasError: null
}

export const getOffices = createAsyncThunk("offices/getOffices", async () => {
    console.log("getOffices")
    try {
        const response = await axios.get("http://localhost:5050/offices")
        return response.data
    } catch (error) {
        console.log(error)
    }
})

const OfficeSlice = createSlice({
    name: 'office',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOffices.pending, (state, action) => {
            state.isLoading = action.payload
            state.hasError = false
        })
            .addCase(getOffices.fulfilled, (state, action) => {
                state.offices = action.payload
                state.isLoading = false
                state.hasError = false
            })
            .addCase(getOffices.rejected, (state, action) => {
                state.isLoading = false
                state.hasError = true
            })
    }
})

export const { } = OfficeSlice.actions

export default OfficeSlice