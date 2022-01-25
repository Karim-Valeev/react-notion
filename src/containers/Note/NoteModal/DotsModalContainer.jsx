import DotsModal from '../../../components/Note/NoteModal/DotsModal';
import { useDispatch, useSelector } from 'react-redux';
import * as typeBlockSelectors from '../../../store/selectors/typeBlock_selectors';
import * as noteBlocksSelector from '../../../store/selectors/noteBlocks_selectors';
import { handleActiveDotsModal } from '../../../store/actions/TypeBlockActions';
import { handleActiveBlock, handleBlockUpdate, handleDeleteBlock } from '../../../store/actions/NoteBlocksActions';
import { handleNotionList } from '../../../store/actions/NotionListActions';
import * as userSelectors from "../../../store/selectors/user_selectors";


function DotsModalContainer() {
    const dotsActive = useSelector(typeBlockSelectors.activeDotsModal);
    const block = useSelector(noteBlocksSelector.noteBlock);
    const user = useSelector(userSelectors.user);
    const dispatch = useDispatch();

    const handleClick = (status) => {
        dispatch(handleActiveDotsModal(status));
    };

    const handleDelete = async () => {
        await dispatch(handleDeleteBlock(block));
        if (block.type === 'link') {
            dispatch(handleNotionList(user));
        }
        dispatch(handleActiveDotsModal(false));
        dispatch(handleActiveBlock(null));
    };

    const handleEdit = () => {
        dispatch(handleBlockUpdate(block));
    };

    return (
        <DotsModal active={dotsActive} handleClick={handleClick} handleDelete={handleDelete} handleEdit={handleEdit} />
    );
}

export default DotsModalContainer;
