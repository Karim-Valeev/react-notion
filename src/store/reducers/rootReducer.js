import { combineReducers } from 'redux'
import {userReducer} from "./user";
import {notionListReducer} from "./notions_list";

export const rootReducer = combineReducers({
    user: userReducer,
    notionList: notionListReducer
})