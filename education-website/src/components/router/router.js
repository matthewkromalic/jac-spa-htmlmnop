import { Route, Switch } from 'react-router-dom'
import MainScreen from '../all-screens/main/MainScreen.js'
import Fish from '../all-screens/Fish/FishAPI.js'

const PageDirector = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={MainScreen}/>
            <Route exact path={'/species'} component={Fish}/>
        </Switch>
    )
} 

export default PageDirector;
