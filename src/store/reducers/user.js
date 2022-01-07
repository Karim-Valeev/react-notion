import  {
    FETCH_USER
} from "../actions/UserActions";

const initialState = {
    first_name: 'Дмитриz',
    last_name: 'Герасимоz',
    id: 0
}

export function userReducer(state=false,action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || null
        default:
            return state
    }
}