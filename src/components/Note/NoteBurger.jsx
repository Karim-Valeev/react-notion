import { ReactComponent as BurgerSvg } from '../../static/svg/burger.svg';

function NoteBurger({ active, handleClick }) {
    return (
        <button type="button" onClick={() => handleClick(!active)} className="burger">
            <div className="burger__inner">
                <span className="burger__svg">
                    <BurgerSvg className="hamburgerMenu" />
                </span>
            </div>
        </button>
    );
}

export default NoteBurger;
