import { Switch,Route} from 'react-router-dom'
import Notion from './pages/Notion'
import Login from './pages/Login'

function Routes () {
   return <div>
        <Switch>
            <Route exact path='/' component={Notion}/>
            <Route path='/login' component={Login}/>
        </Switch>
        </div>
}
export default Routes
