import { combineReducers } from 'redux';
import { userReducer } from './user';
import { notionListReducer } from './notions_list';
import { burgerReducer } from './burger';
import { noteReducer } from './note';
import { typeBlockReducer } from './typeBlock';
import { noteBlocksReducer } from './noteBlocks';
import { modeReducers } from './mode';

export const rootReducer = combineReducers({
    user: userReducer,
    notionList: notionListReducer,
    burger: burgerReducer,
    note: noteReducer,
    typeBlock: typeBlockReducer,
    noteBlocks: noteBlocksReducer,
    mode: modeReducers,
});
