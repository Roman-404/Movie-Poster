import * as actionTypes from '../action-types';

export const loadFilms = films => {
    return {
        type: actionTypes.LOAD_FILMS,
        payload: films
    }
}