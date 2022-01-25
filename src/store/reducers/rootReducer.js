import { combineReducers } from 'redux';
import { userReducer } from './user';
import { notionListReducer } from './notions_list';
import { burgerReducer } from './burger';
import { noteReducer } from './note';
import { typeBlockReducer } from './typeBlock';
import { noteBlocksReducer } from './noteBlocks';
import { modeReducers } from './mode';

// Главный редьюсер, который хранит в себе состояния. Обьединяет в себе остальные редьюсеры.
// Можно обращаться к нему, а не к конкретным редьюсерам.
// По документации лучше называть так :)
export const rootReducer = combineReducers({
    user: userReducer,
    notionList: notionListReducer,
    burger: burgerReducer,
    note: noteReducer,
    typeBlock: typeBlockReducer,
    noteBlocks: noteBlocksReducer,
    mode: modeReducers,
});
