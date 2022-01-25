import NoteBlockAction from '../../../components/Note/NoteBody/NoteBlockAction';
import { useDispatch } from 'react-redux';
import { handleActiveDotsModal, handleActiveTypeBlock } from '../../../store/actions/TypeBlockActions';
import { handleActiveBlock } from '../../../store/actions/NoteBlocksActions';

function NoteBlockActionContainer({ block }) {
    const dispatch = useDispatch();

    const handleClickPlus = (status) => {
        dispatch(handleActiveBlock(null));
        dispatch(handleActiveTypeBlock(status));
    };

    const handleClickDots = (status) => {
        dispatch(handleActiveBlock(block));
        dispatch(handleActiveDotsModal(status));
    };
    return <NoteBlockAction handleClickPlus={handleClickPlus} handleClickDots={handleClickDots} />;
}

export default NoteBlockActionContainer;
