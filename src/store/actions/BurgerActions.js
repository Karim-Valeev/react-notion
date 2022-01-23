import { ACTION_BURGER } from '../types/burgerTypes';

export function handleBurger(status) {
    return async function (dispatch) {
        dispatch({
            type: ACTION_BURGER,
            payload: status,
        });
    };
}
