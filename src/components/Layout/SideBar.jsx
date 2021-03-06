import NoteList from '../../components/SideBar/NoteList';
import ProfileContainer from '../../containers/Sidebar/ProfileContainer';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import * as burgerSelectors from '../../store/selectors/burger_selectors';
import { handleBurger } from '../../store/actions/BurgerActions';
import LogoutContainer from '../../containers/Sidebar/LogoutContainer';
import * as modeSelectors from '../../store/selectors/mode_selectors';

function SideBar() {
    const active = useSelector(burgerSelectors.activeBurger);
    const activeClass = active ? 'notion__sidebar notion__sidebar--active' : 'notion__sidebar';
    const dispatch = useDispatch();
    const mode = useSelector(modeSelectors.activeEdit);

    return mode ? (
        <OutsideClickHandler
            onOutsideClick={() => {
                dispatch(handleBurger(false));
            }}
        >
            <div className={activeClass}>
                <ProfileContainer />
                <LogoutContainer />
                <NoteList />
            </div>
        </OutsideClickHandler>
    ) : null;
}

export default SideBar;
