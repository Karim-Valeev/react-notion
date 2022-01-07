export const FETCH_USER = 'FETCH_USER'

export function fetchUser (user) {
        return async function (dispatch){
            console.log(user.uid)
            dispatch({
                type: FETCH_USER,
                payload: {
                    first_name: 'Дмитриz',
                    last_name: 'Герасимоz',
                    id: 0
                }
            })
        }
}

