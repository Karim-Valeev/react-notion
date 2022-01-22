import NoteDataService from "../../services/note.service";
import {arrUrl} from "../../utils/changeState";

export const GET_NOTE = 'GET_NOTE'

export function handleNote (id) {
    return async function (dispatch, getState) {
        const note = await NoteDataService.getNote(id)
        const notes = getState().notionList.noteList
        const noteUrl = arrUrl(notes, note).reverse()
        dispatch({
            type: GET_NOTE,
            payload: {noteUrl, note, load: false}
        })
    }
}