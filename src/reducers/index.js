import * as actionTypes from '../action-types';

const initState = {
    films: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_FILMS:
            return {
                films: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;