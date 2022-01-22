import NoteDataService from "../../services/note.service";
import {arrUrl} from "../../utils/changeState";
import {GET_NOTE, UPDATE_TITLE} from "../types/noteTypes";
import {GET_NOTION_LIST} from "../types/notionListTypes";

export function handleNote (id) {
    return async function (dispatch, getState) {
        const note = await NoteDataService.getNote(id)
        const notes = getState().notionList.noteList
        const noteUrl = arrUrl(notes, note)
        dispatch({
            type: GET_NOTE,
            payload: {noteUrl, note, load: false}
        })
    }
}

export function handleUpdateTitle (data) {
    return async function (dispatch, getState) {
        const uid = getState().user.uid
        const note = getState().note.note
        const updateNote = await NoteDataService.updateTitle(data, note.id)
        const updateNotes = await NoteDataService.getNotes(uid)
        const noteUrl = arrUrl(updateNotes, updateNote)
        dispatch({
            type: UPDATE_TITLE,
            payload: {noteUrl, note: updateNote, load: false}
        })

        dispatch({
            type: GET_NOTION_LIST,
            payload: {noteList: updateNotes, load: false}
        })
    }
}