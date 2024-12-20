import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0, skills:[' ']
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        addSkill: (state, action) => {
            state.skills = [...state.skills, action.payload]
        }
    }
});

export const { increment, decrement, addSkill } = CounterSlice.actions

export default CounterSlice.reducer