import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Axios } from 'axios'

const initialState = {
    offices: [], isLoading: false, hasError: null
}

export const getOffices = createAsyncThunk("offices/getOffices", async () => {
    const response = await Axios.get("http://localhost:5050/offices")
    return response.data
})

const OfficeSlice = createSlice({
  name: 'office',
  initialState : initialState,
  reducers: {},
  extraReducers: {
    [getOffices.pending]: (state) => {
      state.isLoading = true
      state.hasError = null
    },
    [getOffices.fulfilled]: (state, action) => {
      state.offices = action.payload
      state.isLoading = false
      state.hasError = null
    },
    [getOffices.rejected]: (state, action) => {
      state.isLoading = false
      state.hasError = action.error
    }
  }
})

export const {} = OfficeSlice.actions

export default OfficeSlice.reducer