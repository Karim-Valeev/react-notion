export const ACTION_BURGER ="ACTION_BURGER"

export function handleBurger (status) {
    return async function (dispatch) {
        dispatch({
            type: ACTION_BURGER,
            payload: status
        })
    }
}