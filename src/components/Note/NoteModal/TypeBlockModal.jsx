import textBlock from '../../../static/images/textBlock.png';
import pageBlock from '../../../static/images/pageBlock.png';
import imageBlock from '../../../static/images/imageBlock.png';
import videoBlock from '../../../static/images/videoBlock.png';
import OutsideClickHandler from 'react-outside-click-handler';
import { MAX_LEVEL } from '../../../constants/notionListConstants';

function TypeBlockModal({ active, note, handleClick, handleActiveTypeLink, handleActiveImage, handleActiveTypeText }) {
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
                            <h4>Basic Blocks</h4>
                        </header>
                        <main className="type__blocks">
                            <a
                                href="#"
                                className="type__item"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleActiveTypeText(true);
                                }}
                            >
                                <span className="type__item-icon">
                                    <img src={textBlock} alt="icon" className="type__img" />
                                </span>
                                <span className="type__item-name">Text</span>
                            </a>

                            {note.level !== MAX_LEVEL ? (
                                <a
                                    href="#"
                                    className="type__item"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleActiveTypeLink(true);
                                    }}
                                >
                                    <span className="type__item-icon">
                                        <img src={pageBlock} alt="icon" className="type__img" />
                                    </span>
                                    <span className="type__item-name">Page</span>
                                </a>
                            ) : (
                                <></>
                            )}

                            <a
                                href="#"
                                className="type__item"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleActiveImage({
                                        active: true,
                                        activeUpload: true,
                                        activeLink: false,
                                    });
                                }}
                            >
                                <span className="type__item-icon">
                                    <img src={imageBlock} alt="icon" className="type__img" />
                                </span>
                                <span className="type__item-name">Image</span>
                            </a>

                            <a href="#" className="type__item">
                                <span className="type__item-icon">
                                    <img src={videoBlock} alt="icon" className="type__img" />
                                </span>
                                <span className="type__item-name">Video</span>
                            </a>
                        </main>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
}

export default TypeBlockModal;
