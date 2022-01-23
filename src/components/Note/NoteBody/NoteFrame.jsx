import NoteTitleContainer from '../../../containers/Note/NoteBody/NoteTitleContainer';

function NoteFrame() {
    return (
        <main className="notion__frame">
            <div className="notion__scroll">
                <NoteTitleContainer />
                <div className="notion-page--content"></div>
            </div>
        </main>
    );
}

export default NoteFrame;
