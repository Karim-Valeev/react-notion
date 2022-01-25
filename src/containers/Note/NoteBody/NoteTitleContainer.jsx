import NoteTitle from '../../../components/Note/NoteBody/NoteTitle';
import { useDispatch, useSelector } from 'react-redux';
import * as noteSelectors from '../../../store/selectors/note_selectors';
import { handleUpdateTitle } from '../../../store/actions/NoteActions';
import * as modeSelectors from '../../../store/selectors/mode_selectors';

function NoteTitleContainer() {
    const note = useSelector(noteSelectors.note);
    const dispatch = useDispatch();
    const mode = useSelector(modeSelectors.activeEdit);

    const handleTitle = (data, e) => {
        if (note.title !== data.title) {
            dispatch(handleUpdateTitle(data));
        }
    };

    return mode ? (
        <NoteTitle title={note.title} handleTitle={handleTitle} />
    ) : (
        <div className="notion__title--block">
            <div className="notion__title">{note.title}</div>
        </div>
    );
}

export default NoteTitleContainer;
