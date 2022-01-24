import LinkBlockModal from '../../../components/Note/NoteModal/LinkBlockModal';
import { useDispatch, useSelector } from 'react-redux';
import * as typeBlockSelectors from '../../../store/selectors/typeBlock_selectors';
import {handleActiveModalLink, handleActiveModalText} from '../../../store/actions/TypeBlockActions';
import {handleAddLinkBlock, handleAddTextBlock} from '../../../store/actions/NoteBlocksActions';
import TextBlockModal from "../../../components/Note/NoteModal/TextBlockModal";

function TextBlockModalContainer() {
    const activeTextModal = useSelector(typeBlockSelectors.activeTextModal);
    const dispatch = useDispatch();

    const handleClick = (status) => {
        dispatch(handleActiveModalText(status));
    };

    const handleText = (data) => {
        console.log(data);
        dispatch(handleAddTextBlock(data));
    };

    return <TextBlockModal activeTextModal={activeTextModal} handleClick={handleClick} handleText={handleText} />;
}

export default TextBlockModalContainer;
