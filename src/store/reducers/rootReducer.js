import { combineReducers } from 'redux'
import {userReducer} from "./user";
import {notionListReducer} from "./notions_list";
import {burgerReducer} from "./burger";
import {noteReducer} from "./note";

export const rootReducer = combineReducers({
    user: userReducer,
    notionList: notionListReducer,
    burger: burgerReducer,
    note: noteReducer
})