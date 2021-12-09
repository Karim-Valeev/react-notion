import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Notion from './pages/Notion'
import Login from './pages/Login'
import Registration from './pages/Registration'
import GRegistration from './pages/GRegistration'

function Routes() {
    return <div>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Notion}/>
                <Route path='/registration' component={Registration}/>
                <Route path='/g-registration' component={GRegistration}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </BrowserRouter>
    </div>
}
export default Routes
