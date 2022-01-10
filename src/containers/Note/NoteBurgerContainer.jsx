import NoteBurger from "../../components/Note/NoteBurger";
import {useDispatch, useSelector} from "react-redux";
import * as burgerSelectors from "../../store/selectors/burger_selectors"
import {handleBurger} from "../../store/actions/BurgerActions";

function NoteBurgerContainer () {
    const active = useSelector(burgerSelectors.activeBurger)
    const dispatch = useDispatch()

    function handleClick (status) {
        dispatch(handleBurger(status))
    }
    return <NoteBurger active={active} handleClick={handleClick}/>
}

export default NoteBurgerContainer