import NoteActionTopBar from '../../components/Note/NoteActionTopBar';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../../store/selectors/user_selectors';
import * as noteSelectors from '../../store/selectors/note_selectors';
import * as modeSelectors from '../../store/selectors/mode_selectors';
import { useHistory } from 'react-router-dom';
import { handleDeleteNote } from '../../store/actions/NotionListActions';
import { handleActiveMode } from '../../store/actions/ModeActions';
function NoteActionTopBarContainer() {
    const user = useSelector(userSelectors.user);
    const note = useSelector(noteSelectors.note);
    const mode = useSelector(modeSelectors.all);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = () => {
        dispatch(handleDeleteNote([{ ...note, author: user.uid }]));
        history.push('/');
    };

    const handleModeEdit = () => {
        dispatch(handleActiveMode({ activeEdit: true, activeView: false }));
        history.replace(`/note/${note.id}/?mode=edit`);
    };

    const handleModeView = () => {
        dispatch(handleActiveMode({ activeEdit: false, activeView: true }));
        history.replace(`/note/${note.id}/?mode=view`);
    };

    return (
        <NoteActionTopBar
            mode={mode}
            handleModeEdit={handleModeEdit}
            handleModeView={handleModeView}
            handleDelete={handleDelete}
        />
    );
}

export default NoteActionTopBarContainer;
