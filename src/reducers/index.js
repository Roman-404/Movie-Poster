import * as actionTypes from '../action-types';

const initState = {
    movies: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_FILMS:
            return {
                ...state,
                movies: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;