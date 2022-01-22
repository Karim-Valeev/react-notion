import {SET_USER} from "../types/userTypes";

export function setUser (user) {
        return async function (dispatch){
            dispatch({
                type: SET_USER,
                payload: user
            })
        }
}

