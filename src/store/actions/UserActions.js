export const SET_USER = 'SET_USER'

export function setUser (user) {
        return async function (dispatch){
            dispatch({
                type: SET_USER,
                payload: user
            })
        }
}

