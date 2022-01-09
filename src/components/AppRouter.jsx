import {useAuthState} from "react-firebase-hooks/auth";
import {Route, Switch, Redirect} from "react-router-dom";
import {auth} from "../firebase/auth";
import {privateRoutes, publicRoutes} from "../routes";
import {G_REGISTRATION, NOTION} from "../constants/route";
import Loader from "../components/Loaders/Loader";
import {setUser} from "../store/actions/UserActions";
import {useDispatch} from "react-redux";
function AppRouter () {
    const [user, loading] = useAuthState(auth);
    const dispatch = useDispatch();
    if (loading) {
        return <Loader/>
    }

    if (user) dispatch(setUser(user))

    return user ? (<Switch>
        {privateRoutes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact={true}/>
                )}
                <Redirect to={NOTION} />
    </Switch>) :
        (<Switch>
            {publicRoutes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact={true}/>)}
            <Redirect to={G_REGISTRATION}/>
        </Switch>)
}

export default AppRouter