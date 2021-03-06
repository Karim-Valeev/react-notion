import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth } from '../firebase/auth';
import { privateRoutes, publicRoutes } from '../routes';
import { GOOGLE_REGISTRATION, NOTION } from '../constants/route';
import Loader from '../components/Loaders/Loader';
import { setUser } from '../store/actions/UserActions';
import { useDispatch } from 'react-redux';

function AppRouter() {
    const [user, loading] = useAuthState(auth);

    const dispatch = useDispatch();
    if (loading) {
        return <Loader />; // Проверка того, что есть юзер и его токен от firebase
    }

    if (user) dispatch(setUser(user));
    // {/* Функция для обобщения путей */}
    // {/* Защита от некорректных урлов */}
    return user ? (
        <Switch>
            {privateRoutes.map(({ path, component, exact }) => (
                <Route key={path} path={path} component={component} exact={exact} />
            ))}
            <Redirect to={NOTION} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, component, exact }) => (
                <Route key={path} path={path} component={component} exact={exact} />
            ))}
            <Redirect to={GOOGLE_REGISTRATION} />
        </Switch>
    );
}

export default AppRouter;
