import Profile from '../../components/SideBar/Profile';
import { useSelector } from 'react-redux';
import * as userSelectors from '../../store/selectors/user_selectors';

function ProfileContainer() {
    const user = useSelector(userSelectors.user);
    if (user === false) {
        return <></>;
    }
    return <Profile user={user} />;
}

export default ProfileContainer;
