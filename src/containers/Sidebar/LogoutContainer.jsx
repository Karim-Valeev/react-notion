import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions/UserActions';
import { useHistory } from 'react-router-dom';

function LogoutContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (event) => {
        signOut(auth)
            .then(() => {
                dispatch(setUser(null));
                history.push('/');
            })
            .catch((error) => {
                console.error(error);
            });
        event.preventDefault();
    };

    return (
        <span>
            <button className="profile-logout-button" onClick={handleClick} type="button">
                logout
            </button>
        </span>
    );
}

export default LogoutContainer;
