import NoteTitleContainer from '../../../containers/Note/NoteBody/NoteTitleContainer';
import NoteBlocksContainer from '../../../containers/Note/NoteBody/NoteBlocksContainer';

function NoteFrame() {
    return (
        <main className="notion__frame">
            <div className="notion__scroll">
                <NoteTitleContainer />
                <div className="notion-page--content">
                    <NoteBlocksContainer />
                </div>
            </div>
        </main>
    );
}

export default NoteFrame;
