import TypeBlockModalContainer from "../../../containers/Note/NoteModal/TypeBlockModalContainer";
import LinkBlockModalContainer from "../../../containers/Note/NoteModal/LinkBlockModalContainer";
import ImageBlockModalContainer from "../../../containers/Note/NoteModal/ImageBlockModalContainer";

function NoteModal () {
    return <div className="popups">
        <TypeBlockModalContainer/>
        <LinkBlockModalContainer/>
        <ImageBlockModalContainer/>
    </div>
}

export default NoteModal;
