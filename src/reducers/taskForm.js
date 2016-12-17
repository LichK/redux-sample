import { ACTION_TYPES } from '../constants/admin';

const _initialState = {
    title: '',
    comment: ''
};

export default (state = _initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.INPUT_TASK_FORM:
            let { title, comment } = action;

            return Object.assign({}, state, { title, comment });
        default:
            return state;
    }
}