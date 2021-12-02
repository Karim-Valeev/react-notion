import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Notion from './pages/Notion'
import Login from './pages/Login'

function Routes() {
    return <div>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Notion}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </BrowserRouter>
    </div>
}
export default Routes
