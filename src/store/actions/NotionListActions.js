import NoteDataService from '../../services/note.service'
export const GET_NOTION_LIST = 'GET_NOTION_LIST'
export const ACTIVE_NOTION_LIST = 'ACTIVE_NOTION_LIST'
export const ADD_NOTE = 'ADD_NOTE'
export function handleNotionList (user) {
    return async function (dispatch) {
       const noteList = await NoteDataService.getNote(user.uid)
        dispatch({
            type: GET_NOTION_LIST,
            payload: noteList
        })
    }
}

export function handleAddNote (note) {
    console.log(note)
    NoteDataService.create(note)
    return function (dispatch) {
        dispatch({
            type: ADD_NOTE
        })
    }
}

