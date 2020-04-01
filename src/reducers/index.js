import * as actionTypes from '../action-types';

const initState = {
    movies: [],
    page: null,
    loading: true
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
        case actionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;