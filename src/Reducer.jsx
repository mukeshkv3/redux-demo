const initialState = {
    firstName: 'Guest',
    secondName: 'User'
}

const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME'

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case CHANGE_FIRST_NAME:
            return { ...state, ...payload }
        case 'CHANGE_SECOND_NAME':
            return { ...state, ...payload }

        default:
            return state
    }
}
