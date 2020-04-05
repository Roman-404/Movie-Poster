import { SET_LOADING } from '../action-types';

const loading = true;

const reducer = (state = loading, action) => {
    if (action.type === SET_LOADING) {
        return action.payload
    }
    return state
}

export default reducer;