import TypeBlockModalContainer from '../../../containers/Note/NoteModal/TypeBlockModalContainer';
import LinkBlockModalContainer from '../../../containers/Note/NoteModal/LinkBlockModalContainer';
import TextBlockModalContainer from '../../../containers/Note/NoteModal/TextBlockModalContainer';
import ImageBlockModalContainer from '../../../containers/Note/NoteModal/ImageBlockModalContainer';
import DotsModalContainer from '../../../containers/Note/NoteModal/DotsModalContainer';
import VideoModalContainer from '../../../containers/Note/NoteModal/VideoModalContainer';

function NoteModal() {
    return (
        <div className="popups">
            <TypeBlockModalContainer />
            <LinkBlockModalContainer />
            <ImageBlockModalContainer />
            <DotsModalContainer />
            <TextBlockModalContainer />
            <VideoModalContainer />
        </div>
    );
}

export default NoteModal;
