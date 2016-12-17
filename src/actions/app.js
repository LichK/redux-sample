import { ACTION_TYPES } from '../constants/admin';

export function setLoading(loading) {
    return {
        type: ACTION_TYPES.SET_LOADING,
        loading
    }
}