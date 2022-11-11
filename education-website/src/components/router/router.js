import { Route, Switch } from 'react-router-dom'
import MainScreen from '../all-screens/MainScreen.js'

const PageDirector = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={MainScreen}/>
        </Switch>
    )
} 

export default PageDirector;
