import NoteTitle from "../../../components/Note/noteBody/NoteTitle";
import {useDispatch, useSelector} from "react-redux";
import * as noteSelectors from "../../../store/selectors/note_selectors"
import {handleUpdateTitle} from "../../../store/actions/NoteActions";
function NoteTitleContainer () {
    const note = useSelector(noteSelectors.note)
    const dispatch = useDispatch();
    const handleTitle = (data, e) => {
        if (note.title !== data.title) {
            dispatch(handleUpdateTitle(data))
        }
    }
    return <NoteTitle title={note.title} handleTitle={handleTitle}/>
}

export default NoteTitleContainer