import TypeBlockModalContainer from '../../../containers/Note/NoteModal/TypeBlockModalContainer';
import LinkBlockModalContainer from '../../../containers/Note/NoteModal/LinkBlockModalContainer';
import TextBlockModalContainer from '../../../containers/Note/NoteModal/TextBlockModalContainer';

function NoteModal() {
    return (
        <div className="popups">
            <TypeBlockModalContainer />
            <LinkBlockModalContainer />
            <TextBlockModalContainer />
        </div>
    );
}

export default NoteModal;
