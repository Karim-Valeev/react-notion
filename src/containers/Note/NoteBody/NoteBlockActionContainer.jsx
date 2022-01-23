import NoteBlockAction from '../../../components/Note/NoteBody/NoteBlockAction';
import { useDispatch } from 'react-redux';
import { handleActiveTypeBlock } from '../../../store/actions/TypeBlockActions';

function NoteBlockActionContainer() {
    const dispatch = useDispatch();

    const handleClick = (status) => {
        dispatch(handleActiveTypeBlock(status));
    };
    return <NoteBlockAction handleClick={handleClick} />;
}

export default NoteBlockActionContainer;
