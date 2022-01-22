import {GET_NOTE, UPDATE_TITLE} from "../types/noteTypes";

const initialState = {
    note: {},
    noteUrl: [],
    load: true
}

export function noteReducer(state=initialState, action) {
    switch (action.type){
        case GET_NOTE:
            return action.payload
        case UPDATE_TITLE:
            return action.payload
        default: return state
    }
}

export default noteReducer