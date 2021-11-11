import  {
    LOGIN_REQUEST
} from "../actions/UserActions";

const initialState = {
    first_name: 'Дмитриz',
    last_name: 'Герасимоz',
    id: 0
}

export function userReducer(state=initialState,action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state}
        default:
            return state
    }
}