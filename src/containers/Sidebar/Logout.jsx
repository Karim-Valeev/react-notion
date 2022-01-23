import {signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../../firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions/UserActions';

const logoutButton = {
    "border": "none",
    "background": "none",
    "color": "#37352f",
    "font-weight": 500
}

function Logout() {
    const dispatch = useDispatch();


    const handleClick = (event) => {
        signOut(auth).then(() => {
            // todo вынуть юзера из redux store
            dispatch(setUser(null))
            history.push('/');
        }).catch((error) => {
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

export default Logout