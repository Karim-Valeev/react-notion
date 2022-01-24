import NoteBurgerContainer from '../../containers/Note/NoteBurgerContainer';
import NoteUrlContainer from '../../containers/Note/NoteUrlContainer';
import NoteActionTopBarContainer from '../../containers/Note/NoteActionTopBarContainer';

function NoteTopBar() {
    return (
        <>
            <header className="notion__topbar">
                <div className="notion__container">
                    <NoteBurgerContainer />
                    <NoteUrlContainer />
                    <div className="empty" />
                    <NoteActionTopBarContainer />
                </div>
            </header>
        </>
    );
}

export default NoteTopBar;
