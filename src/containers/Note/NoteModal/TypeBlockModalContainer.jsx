import TypeBlockModal from '../../../components/Note/NoteModal/TypeBlockModal';
import { useDispatch, useSelector } from 'react-redux';
import * as typeBlockSelectors from '../../../store/selectors/typeBlock_selectors';
import {
    handleActiveModalLink,
    handleActiveModalText,
    handleActiveTypeBlock,
} from '../../../store/actions/TypeBlockActions';
import * as noteSelectors from '../../../store/selectors/note_selectors';

function TypeBlockModalContainer() {
    const active = useSelector(typeBlockSelectors.active);
    const note = useSelector(noteSelectors.note);
    const dispatch = useDispatch();
    const handleClick = (status) => {
        dispatch(handleActiveTypeBlock(status));
    };

    const handleActiveTypeLink = (status) => {
        dispatch(handleActiveModalLink(status));
    };

    const handleActiveTypeText = (status) => {
        console.log('INside handleActiveTypeText');
        dispatch(handleActiveModalText(status));
    };

    return (
        <TypeBlockModal
            active={active}
            handleClick={handleClick}
            note={note}
            handleActiveTypeLink={handleActiveTypeLink}
            handleActiveTypeText={handleActiveTypeText}
        />
    );
}

export default TypeBlockModalContainer;
