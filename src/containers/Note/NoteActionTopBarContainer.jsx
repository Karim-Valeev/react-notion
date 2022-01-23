import NoteActionTopBar from '../../components/Note/NoteActionTopBar';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../../store/selectors/user_selectors';
import * as noteSelectors from '../../store/selectors/note_selectors';
import { useHistory } from 'react-router-dom';
import { handleDeleteNote } from '../../store/actions/NotionListActions';
function NoteActionTopBarContainer() {
    const user = useSelector(userSelectors.user);
    const note = useSelector(noteSelectors.note);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = () => {
        dispatch(handleDeleteNote([{ ...note, author: user.uid }]));
        history.push('/');
    };
    return <NoteActionTopBar handleDelete={handleDelete} />;
}

export default NoteActionTopBarContainer;
