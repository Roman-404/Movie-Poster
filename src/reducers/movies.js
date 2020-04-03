import * as actionTypes from '../action-types';

const initState = {
    movies: [],
    page: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_FILMS:
            return {
                ...state,
                movies: action.payload
            }
        case actionTypes.GET_CURRENT_PAGE:
            return {
                ...state,
                page: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;