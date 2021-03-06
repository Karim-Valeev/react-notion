import NoteBlockAction from '../../../components/Note/NoteBody/NoteBlockAction';
import { useDispatch, useSelector } from 'react-redux';
import { handleActiveDotsModal, handleActiveTypeBlock } from '../../../store/actions/TypeBlockActions';
import { handleActiveBlock } from '../../../store/actions/NoteBlocksActions';
import * as noteBlocksSelector from '../../../store/selectors/noteBlocks_selectors';
import * as modeSelectors from '../../../store/selectors/mode_selectors';

function NoteBlockActionContainer({ block }) {
    const dispatch = useDispatch();
    const isEmptyBlock = useSelector(noteBlocksSelector.isEmptyBlock);
    const mode = useSelector(modeSelectors.activeEdit);

    const handleClickPlus = (status) => {
        dispatch(handleActiveBlock(null));
        dispatch(handleActiveTypeBlock(status));
    };

    const handleClickDots = (status) => {
        if (!isEmptyBlock) {
            dispatch(handleActiveBlock(block));
            dispatch(handleActiveDotsModal(status));
        }
    };
    return mode ? <NoteBlockAction handleClickPlus={handleClickPlus} handleClickDots={handleClickDots} /> : null;
}

export default NoteBlockActionContainer;
