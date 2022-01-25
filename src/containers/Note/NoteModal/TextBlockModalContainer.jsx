import LinkBlockModal from '../../../components/Note/NoteModal/LinkBlockModal';
import { useDispatch, useSelector } from 'react-redux';
import * as typeBlockSelectors from '../../../store/selectors/typeBlock_selectors';
import { handleActiveModalLink, handleActiveModalText } from '../../../store/actions/TypeBlockActions';
import {
    handleAddLinkBlock,
    handleAddTextBlock,
    handleAddVideo, handleUpdateTextBlock,
    handleUpdateVideoBlock
} from '../../../store/actions/NoteBlocksActions';
import TextBlockModal from '../../../components/Note/NoteModal/TextBlockModal';
import * as noteBlocksSelector from "../../../store/selectors/noteBlocks_selectors";

function TextBlockModalContainer() {
    const activeTextModal = useSelector(typeBlockSelectors.activeTextModal);
    const block = useSelector(noteBlocksSelector.noteBlock);
    const dispatch = useDispatch();

    const handleClick = (status) => {
        dispatch(handleActiveModalText(status));
    };

    const handleText = (data) => {
        console.log("In handleText", data);
        if (block === null) {
            dispatch(handleAddTextBlock(data));
        } else {
            dispatch(handleUpdateTextBlock(data));
        }
    };

    return <TextBlockModal activeTextModal={activeTextModal} handleClick={handleClick} handleText={handleText} />;
}

export default TextBlockModalContainer;
