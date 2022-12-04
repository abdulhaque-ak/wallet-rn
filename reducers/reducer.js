
const initState = {
    data: [],
    loading: true
}

export const reducer = (state = initState, action) => {
    if (action.type == 'ADD_USER') {
        return {
            ...state,
            data: action.payload
        }
    }
    if (action.type == 'SET_LOADING') {
        return {
            ...state,
            loading: action.payload
        }
    }

    return state
}