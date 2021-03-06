import OutsideClickHandler from 'react-outside-click-handler';

function DotsModal({ active, handleClick, handleDelete, handleEdit }) {
    const classNameActive = active ? 'popup__type popup__type--active' : 'popup__type';
    const classNameActivePopup = active ? 'popups__inner popups_active' : 'popups__inner';

    return (
        <div className={classNameActivePopup}>
            <OutsideClickHandler
                onOutsideClick={() => {
                    handleClick(false);
                }}
            >
                <div className={classNameActive}>
                    <div className="popup__type-inner">
                        <header className="popup__type-header">
                            <h4>Basic Actions</h4>
                        </header>
                        <main className="type__blocks">
                            <button className="type__item btn_dots" onClick={handleEdit}>
                                <span className="type__item-name">Edit</span>
                            </button>

                            <button className="type__item btn_dots" onClick={handleDelete}>
                                <span className="type__item-name">Delete</span>
                            </button>
                        </main>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
}

export default DotsModal;
