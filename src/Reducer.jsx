const initialState = {
    firstName: 'Guest'
}

const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME'

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case CHANGE_FIRST_NAME:
            return { ...state, ...payload }

        default:
            return state
    }
}
