import NoteBurgerContainer from '../../containers/Note/NoteBurgerContainer';

function NoteEmptyTopBar() {
    return (
        <>
            <header className="notion__topbar">
                <div className="notion__container">
                    <NoteBurgerContainer />
                </div>
            </header>
        </>
    );
}

export default NoteEmptyTopBar;
