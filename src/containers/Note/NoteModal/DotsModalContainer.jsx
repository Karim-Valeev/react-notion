import DotsModal from '../../../components/Note/NoteModal/DotsModal';
import { useDispatch, useSelector } from 'react-redux';
import * as typeBlockSelectors from '../../../store/selectors/typeBlock_selectors';
import * as noteBlocksSelector from '../../../store/selectors/noteBlocks_selectors';
import { handleActiveDotsModal } from '../../../store/actions/TypeBlockActions';
import {handleActiveBlock, handleDeleteBlock} from "../../../store/actions/NoteBlocksActions";

function DotsModalContainer() {
    const dotsActive = useSelector(typeBlockSelectors.activeDotsModal);
    const block = useSelector(noteBlocksSelector.noteBlock);
    const dispatch = useDispatch();

    const handleClick = (status) => {
        dispatch(handleActiveDotsModal(status));
    };

    const handleDelete = () => {
        dispatch(handleDeleteBlock(block));
        dispatch(handleActiveDotsModal(false));
        dispatch(handleActiveBlock(null));
    }

    return <DotsModal active={dotsActive} handleClick={handleClick} handleDelete={handleDelete} />;
}

export default DotsModalContainer;
