import { message } from 'antd';
import { ACTION_TYPES } from '../constants/admin';
import { setLoading } from './app';

export function addTask(task) {
    return function (dispatch) {
        dispatch(setLoading(true));

        // 模拟异步请求
        setTimeout(function () {
            dispatch({
                type: ACTION_TYPES.ADD_TASK,
                task
            });
            dispatch(inputTask({
                title: '', comment: ''
            }));
            dispatch(setLoading(false));
            message.success('任务创建成功!');
        }, 2000);
    }
}

export function deleteTask(idx) {
    return {
        type: ACTION_TYPES.DELETE_TASK,
        index: idx
    };
}

export function inputTask({ title, comment }) {
    return {
        type: ACTION_TYPES.INPUT_TASK_FORM,
        title, comment
    };
}