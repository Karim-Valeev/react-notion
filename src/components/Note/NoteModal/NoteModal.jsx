import TypeBlockModalContainer from '../../../containers/Note/NoteModal/TypeBlockModalContainer';
import LinkBlockModalContainer from '../../../containers/Note/NoteModal/LinkBlockModalContainer';
import ImageBlockModalContainer from '../../../containers/Note/NoteModal/ImageBlockModalContainer';
import DotsModalContainer from '../../../containers/Note/NoteModal/DotsModalContainer';

function NoteModal() {
    return (
        <div className="popups">
            <TypeBlockModalContainer />
            <LinkBlockModalContainer />
            <ImageBlockModalContainer />
            <DotsModalContainer />
        </div>
    );
}

export default NoteModal;
