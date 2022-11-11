import { Route, Switch } from 'react-router-dom'
import MainScreen from '../all-screens/MainScreen.js'
import NasaPage from '../all-screens/NasaAPI.js'


const PageDirector = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={MainScreen}/>
            <Route exact path={'/nasa'} component={NasaPage}/>
        </Switch>
    )
} 

export default PageDirector;
