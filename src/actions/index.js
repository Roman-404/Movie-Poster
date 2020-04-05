import * as actionTypes from '../action-types';

export const getFilms = films => {
    return {
        type: actionTypes.LOAD_FILMS,
        payload: films
    }
}

export const setCurrPage = page => {
    return {
        type: actionTypes.SET_CURRENT_PAGE,
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

export const setTotalPages = pages => {
    return {
        type: actionTypes.SET_TOTAL_PAGES,
        payload: pages
    }
}

export const setStyles = styles => {
    return {
        type: actionTypes.SET_STYLES,
        payload: styles
    }
} 