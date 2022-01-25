import TypeBlockModal from '../../../components/Note/NoteModal/TypeBlockModal';
import { useDispatch, useSelector } from 'react-redux';
import * as typeBlockSelectors from '../../../store/selectors/typeBlock_selectors';
import {
    handleActiveModalImage,
    handleActiveModalLink,
    handleActiveModalText,
    handleActiveModalVideo,
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

    const handleActiveImage = (status) => {
        dispatch(handleActiveModalImage(status));
    };

    const handleActiveTypeText = (status) => {
        dispatch(handleActiveModalText(status));
    };

    const handleActiveTypeVideo = (status) => {
        dispatch(handleActiveModalVideo(status));
    };

    return (
        <TypeBlockModal
            active={active}
            handleClick={handleClick}
            note={note}
            handleActiveImage={handleActiveImage}
            handleActiveTypeLink={handleActiveTypeLink}
            handleActiveTypeText={handleActiveTypeText}
            handleActiveTypeVideo={handleActiveTypeVideo}
        />
    );
}

export default TypeBlockModalContainer;
