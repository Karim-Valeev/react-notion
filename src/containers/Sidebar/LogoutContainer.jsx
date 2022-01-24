import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions/UserActions';

const logoutButton = {
    border: 'none',
    background: 'none',
    color: '#37352f',
    'font-weight': 500,
};

function LogoutContainer() {
    const dispatch = useDispatch();

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
            <button style={logoutButton} onClick={handleClick} type="button">
                logout
            </button>
        </span>
    );
}

export default LogoutContainer;
