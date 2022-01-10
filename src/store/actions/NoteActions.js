import NoteDataService from "../../services/note.service";

export const GET_NOTE = 'GET_NOTE'

export function handleNote (id) {
    return async function (dispatch) {
        const note = await NoteDataService.getNote(id)
        dispatch({
            type: GET_NOTE,
            payload: {note, load: false}
        })
    }
}