import { Route, Switch } from 'react-router-dom'
import MainScreen from '../all-screens/main/MainScreen.js'
import NasaPage from '../all-screens/NASA/NasaAPI.js'
import Countries from '../all-screens/Countries/CountryAPI.js'



const PageDirector = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={MainScreen}/>
            <Route exact path={'/countries'} component={Countries}/>
            <Route exact path={'/nasa'} component={NasaPage}/>
        </Switch>
    )
} 

export default PageDirector;
