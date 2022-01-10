import {GET_NOTE} from "../actions/NoteActions";

const initialState = {
    note: {},
    load: true
}

export function noteReducer(state=initialState, action) {
    switch (action.type){
        case GET_NOTE:
            return action.payload
        default: return state
    }

}

export default noteReducer