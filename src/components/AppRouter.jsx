import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase/auth";
import {Route, Switch, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {G_REGISTRATION, NOTION} from "../constants/route";
import Loader from "./Loader";
function AppRouter () {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loader/>
    }

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