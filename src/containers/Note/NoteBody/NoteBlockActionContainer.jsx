import NoteBlockAction from '../../../components/Note/NoteBody/NoteBlockAction';
import { useDispatch } from 'react-redux';
import { handleActiveDotsModal, handleActiveTypeBlock } from '../../../store/actions/TypeBlockActions';
import { handleActiveBlock } from '../../../store/actions/NoteBlocksActions';

function NoteBlockActionContainer({ block }) {
    const dispatch = useDispatch();

    const handleClick = (status) => {
        dispatch(handleActiveBlock(null));
        dispatch(handleActiveTypeBlock(status));
    };

    const handleClickDots = (status) => {
        dispatch(handleActiveBlock(block));
        dispatch(handleActiveDotsModal(status));
    };
    return <NoteBlockAction handleClick={handleClick} handleClickDots={handleClickDots} />;
}

export default NoteBlockActionContainer;
