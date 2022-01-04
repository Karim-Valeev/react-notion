import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Notion from './pages/Notion'
import Login from './pages/Login'
import Registration from './pages/Registration'
import GoogleSignIn from './pages/GoogleSignIn'
import TestFirebaseDBWithNotes from "./pages/TestFirebaseDBWithNotes";

function Routes() {
    return <div>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Notion}/>
                <Route path='/registration' component={Registration}/>
                <Route path='/g-registration' component={GoogleSignIn}/>
                <Route path='/login' component={Login}/>
                <Route path='/test' component={TestFirebaseDBWithNotes}/>
            </Switch>
        </BrowserRouter>
    </div>
}
export default Routes
