import * as actionTypes from '../action-types';

const initState = {
    keyword: '',
    styles: {
        disabled: true,
        visibility: 'visible'
    },
    similar_films: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_KEYWORD:
            return {
                ...state,
                keyword: action.payload
            }
        case actionTypes.SET_STYLES:
            return {
                ...state,
                styles: action.payload
            }
        case actionTypes.GET_SIMILAR_FILMS:
            return {
                ...state,
                similar_films: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;