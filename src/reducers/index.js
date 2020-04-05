import movies from './movies';
import util from './util';
import loading from './loading';
import { combineReducers } from 'redux';

export default combineReducers({
    movies,
    util,
    loading
})