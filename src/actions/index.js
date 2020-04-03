import * as actionTypes from '../action-types';

export const loadFilms = films => {
    return {
        type: actionTypes.LOAD_FILMS,
        payload: films
    }
}

export const getCurrPage = page => {
    return {
        type: actionTypes.GET_CURRENT_PAGE,
        payload: page
    }
}

export const setLoading = value => {
    return {
        type: actionTypes.SET_LOADING,
        payload: value
    }
}

export const setKeyword = keyword => {
    return {
        type: actionTypes.SET_KEYWORD,
        payload: keyword
    }
}