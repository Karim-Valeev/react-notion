import {useAuthState} from "react-firebase-hooks/auth";
import { connect } from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";
import {auth} from "../firebase/auth";
import {privateRoutes, publicRoutes} from "../routes";
import {G_REGISTRATION, NOTION} from "../constants/route";
import Loader from "./Loader";
import {setUser} from "../store/actions/UserActions";
function AppRouter (props) {
    const [user, loading] = useAuthState(auth);
    const setUser = props.setUser
    if (loading) {
        return <Loader/>
    }

    if (user) setUser(user)

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

const mapDispatchToProps = (dispatch) => {
    return { setUser:  (user) => dispatch(setUser(user))}
}

export default connect(
    null,
    mapDispatchToProps
) (AppRouter)