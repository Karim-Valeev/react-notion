import {SET_USER} from "../types/userTypes";

export function userReducer(state=false,action) {
    switch (action.type) {
        case SET_USER:
            return action.payload || null
        default:
            return state
    }
}