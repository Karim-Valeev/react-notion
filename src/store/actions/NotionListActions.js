import NoteDataService from '../../services/note.service'
export const GET_NOTION_LIST = 'GET_NOTION_LIST'
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
    return async function (dispatch) {
        const noteList = await NoteDataService.create(note)
        dispatch({
            type: ADD_NOTE,
            payload: noteList
        })
    }
}

