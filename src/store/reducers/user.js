import {
    SET_USER
} from "../actions/UserActions";

export function userReducer(state=false,action) {
    switch (action.type) {
        case SET_USER:
            return action.payload || null
        default:
            return state
    }
}