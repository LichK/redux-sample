import { ACTION_TYPES } from '../constants/admin';

const _initialState = {
    loading: false
};

export default (state = _initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_LOADING:
            return Object.assign({}, state, {
                loading: action.loading
            });
        default:
            return state;
    }
}