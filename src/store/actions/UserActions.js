export const LOGIN_REQUEST = 'LOGIN_REQUEST'

export function handleLogin () {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        })
    }

    // Какие действия с авторизацией
}