import { useDispatch, useSelector } from 'react-redux';
import * as typeBlockSelectors from '../../../store/selectors/typeBlock_selectors';
import { handleActiveModalText } from '../../../store/actions/TypeBlockActions';
import { handleAddTextBlock, handleUpdateTextBlock } from '../../../store/actions/NoteBlocksActions';
import TextBlockModal from '../../../components/Note/NoteModal/TextBlockModal';
import * as noteBlocksSelector from '../../../store/selectors/noteBlocks_selectors';

function TextBlockModalContainer() {
    const activeTextModal = useSelector(typeBlockSelectors.activeTextModal);
    const block = useSelector(noteBlocksSelector.noteBlock);
    const dispatch = useDispatch();

    const handleClick = (status) => {
        dispatch(handleActiveModalText(status));
    };

    const handleText = (data) => {
        console.log('In handleText', data);
        if (block === null) {
            dispatch(handleAddTextBlock(data));
        } else {
            dispatch(handleUpdateTextBlock(data));
        }
    };

    return (
        <TextBlockModal
            activeTextModal={activeTextModal}
            block={block}
            handleClick={handleClick}
            handleText={handleText}
        />
    );
}

export default TextBlockModalContainer;
