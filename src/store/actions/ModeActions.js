import { CHOOSE_MODE } from '../types/modeTypes';

export function handleActiveMode(status) {
    return function (dispatch) {
        dispatch({
            type: CHOOSE_MODE,
            payload: status,
        });
    };
}
