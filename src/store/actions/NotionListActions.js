import NoteDataService from '../../services/note.service'
export const GET_NOTION_LIST = 'GET_NOTION_LIST'
export const ACTIVE_NOTION_LIST = 'ACTIVE_NOTION_LIST'
export const ADD_NOTE = 'ADD_NOTE'
export function handleNotionList (user) {
    return function (dispatch) {
        console.log(user)
       const noteList =  NoteDataService.getNote(user.uid)
        console.log(noteList)
        dispatch({
            type: GET_NOTION_LIST
        })
    }
}

export function handleAddNote (note) {
    console.log(note)
    return function (dispatch) {
        dispatch({
            type: ADD_NOTE
        })
    }
}

export function handleActiveNotionList (id, parentId, level) {
    return function (dispatch) {
        dispatch({ type: ACTIVE_NOTION_LIST, payload: {id, parentId, level} })
    }
}
