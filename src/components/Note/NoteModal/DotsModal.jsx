import OutsideClickHandler from 'react-outside-click-handler';

function DotsModal({ active, handleClick, handleEdit }) {
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
                            <a
                                href="#"
                                className="type__item"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleEdit();
                                }}
                            >
                                <span className="type__item-name">Edit</span>
                            </a>

                            <a href="#" className="type__item">
                                <span className="type__item-name">Delete</span>
                            </a>
                        </main>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
}

export default DotsModal;
