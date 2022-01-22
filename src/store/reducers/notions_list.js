import {ADD_NOTE, DELETE_NOTE, GET_NOTION_LIST} from "../types/notionListTypes";

const initialState = {
    notes: [],
    load: true
}

export function notionListReducer(state=initialState,action) {
    switch (action.type) {
        case GET_NOTION_LIST:
            return action.payload
        case ADD_NOTE:
            return action.payload
        case DELETE_NOTE:
            return action.payload
        default: return state
    }
}
