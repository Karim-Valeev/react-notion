import {ADD_NOTE, GET_NOTION_LIST} from "../actions/NotionListActions";


const initialState = []

export function notionListReducer(state=initialState,action) {
    switch (action.type) {
        case GET_NOTION_LIST:
            return action.payload
        case ADD_NOTE:
            return action.payload
        default: return state
    }
}