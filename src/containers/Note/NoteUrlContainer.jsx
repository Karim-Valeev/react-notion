import NoteUrl from "../../components/Note/NoteUrl";
import {useSelector} from "react-redux";
import * as noteSelectors from "../../store/selectors/note_selectors"
function NoteUrlContainer () {
    const noteUrl = useSelector(noteSelectors.noteUrl)
    return <NoteUrl noteUrl={noteUrl}/>
}

export default NoteUrlContainer