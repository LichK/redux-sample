import { ACTION_TYPES } from '../constants/admin';

const _initialState = {
    list: []
};

export default (state = _initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TASK:
            state.list.push(action.task);

            // 语法糖写法: return {...state};
            return Object.assign({}, state);
        case ACTION_TYPES.DELETE_TASK:
            state.list.splice(action.index, 1);

            return Object.assign({}, state);
        case ACTION_TYPES.VIEW_TASK:
            state.current = action.index;

            return Object.assign({}, state);
        default:
            return state;
    }
}