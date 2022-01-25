import DotsModal from '../../../components/Note/NoteModal/DotsModal';
import { useDispatch, useSelector } from 'react-redux';
import * as typeBlockSelectors from '../../../store/selectors/typeBlock_selectors';
import * as noteBlocksSelector from '../../../store/selectors/noteBlocks_selectors';
import { handleActiveDotsModal } from '../../../store/actions/TypeBlockActions';
import { handleActiveBlock, handleBlockUpdate, handleDeleteBlock } from '../../../store/actions/NoteBlocksActions';
import {handleNotionList} from "../../../store/actions/NotionListActions";

function DotsModalContainer() {
    const dotsActive = useSelector(typeBlockSelectors.activeDotsModal);
    const block = useSelector(noteBlocksSelector.noteBlock);
    const dispatch = useDispatch();

    const handleClick = (status) => {
        dispatch(handleActiveDotsModal(status));
    };

    const handleDelete = () => {
        dispatch(handleDeleteBlock(block));
        console.log("Before link condition")
        if (block.type === "link") {
            console.log("Before handleNotionList")
            dispatch(handleNotionList({"uid":block.author}));
        }
        dispatch(handleActiveDotsModal(false));
        dispatch(handleActiveBlock(null));
    };

    const handleEdit = () => {
        console.log(block);
        dispatch(handleBlockUpdate(block));
    };

    return (
        <DotsModal active={dotsActive} handleClick={handleClick} handleDelete={handleDelete} handleEdit={handleEdit} />
    );
}

export default DotsModalContainer;
