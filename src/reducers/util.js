import * as actionTypes from '../action-types';

const initState = {
    keyword: '',
    loading: true
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_KEYWORD:
            return {
                ...state,
                keyword: action.payload
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