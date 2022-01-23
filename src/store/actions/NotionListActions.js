import NoteDataService from '../../services/note.service';
import { ADD_NOTE, DELETE_NOTE, GET_NOTION_LIST } from '../types/notionListTypes';

// Левая чатсь страницы
export function handleNotionList(user) {
    return async function (dispatch) {
        const noteList = await NoteDataService.getNotes(user.uid);
        dispatch({
            type: GET_NOTION_LIST,
            payload: { noteList, load: false },
        });
    };
}

export function handleAddNote(note) {
    return async function (dispatch) {
        const noteList = await NoteDataService.create(note);
        dispatch({
            type: ADD_NOTE,
            payload: { noteList, load: false },
        });
    };
}

export function handleDeleteNote(note) {
    return async function (dispatch) {
        const noteList = await NoteDataService.delete(note);
        dispatch({
            type: DELETE_NOTE,
            payload: { noteList, load: false },
        });
    };
}
