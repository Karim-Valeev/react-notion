import NoteDataService from '../../services/note.service';
import BlockDataService from "../../services/block.service";
import { ADD_NOTE, DELETE_NOTE, GET_NOTION_LIST } from '../types/notionListTypes';
import {DEFAULT_NAME_LINK} from "../../constants/typeBlocks";
import {handleGetBlocks} from "./NoteBlocksActions";

// Левая чатсь страницы
export function handleNotionList(user) {
    return async function (dispatch) {
        const noteList = await NoteDataService.getUserNotes(user.uid);
        dispatch({
            type: GET_NOTION_LIST,
            payload: { noteList, load: false },
        });
    };
}

export function handleAddNote(note) {
    return async function (dispatch) {
        const noteKey = await NoteDataService.create(note);
        const noteList = await NoteDataService.getNotes(note.author);
        dispatch({
            type: ADD_NOTE,
            payload: { noteList, load: false },
        });

        await BlockDataService.createLink({linkId: noteKey, author: note.author, link: DEFAULT_NAME_LINK, noteId: note.parentId})
        await dispatch(handleGetBlocks())
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
