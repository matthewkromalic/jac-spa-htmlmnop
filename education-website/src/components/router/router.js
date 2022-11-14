import { Route, Switch } from 'react-router-dom'
import MainScreen from '../all-screens/main/MainScreen.js'
import NasaPage from '../all-screens/NASA/NasaAPI.js'
import Countries from '../all-screens/Countries/CountryAPI.js'
import AboutOmar from '../all-screens/Contact/AboutOmar.js'



const PageDirector = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={MainScreen}/>
            <Route exact path={'/countries'} component={Countries}/>
            <Route exact path={'/nasa'} component={NasaPage}/>
            <Route exact path={'/us'} component={AboutOmar}/>
        </Switch>
    )
} 

export default PageDirector;
