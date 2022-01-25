import NoteBurger from '../../components/Note/NoteBurger';
import { useDispatch, useSelector } from 'react-redux';
import * as burgerSelectors from '../../store/selectors/burger_selectors';
import { handleBurger } from '../../store/actions/BurgerActions';
import * as modeSelectors from '../../store/selectors/mode_selectors';

function NoteBurgerContainer() {
    const active = useSelector(burgerSelectors.activeBurger);
    const dispatch = useDispatch();
    const mode = useSelector(modeSelectors.activeEdit);

    function handleClick(status) {
        dispatch(handleBurger(status));
    }
    return mode ? <NoteBurger active={active} handleClick={handleClick} /> : null;
}

export default NoteBurgerContainer;
