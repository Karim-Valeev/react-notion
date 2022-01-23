import TypeBlockModalContainer from '../../../containers/Note/NoteModal/TypeBlockModalContainer';
import LinkBlockModalContainer from '../../../containers/Note/NoteModal/LinkBlockModalContainer';

function NoteModal() {
    return (
        <div className="popups">
            <TypeBlockModalContainer />
            <LinkBlockModalContainer />
        </div>
    );
}

export default NoteModal;
