import { Route, Switch } from 'react-router-dom'
import MainScreen from '../all-screens/main/MainScreen.js'
import NasaPage from '../all-screens/NASA/NasaAPI.js'
import Countries from '../all-screens/Countries/Country.js'
import AboutPage from '../all-screens/Contact/AboutPage.js'
import SingleCountry from '../all-screens/Countries/SingleCountry.js'



const PageDirector = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={MainScreen}/>
            <Route exact path={'/country'} component={Countries}/>
            <Route exact path={'/nasa'} component={NasaPage}/>
            <Route exact path={'/us'} component={AboutPage}/>
            {/* <Route exact path={'/singlecountry'} component={SingleCountry}/> */}
            {/* <Route exact path={'/singlecountry'} component={(props) => <SingleCountry {...props}/>}/> */}
            <Route exact path={'/singlecountry/:countryName'} component={SingleCountry}/>
        </Switch>
    )
} 

export default PageDirector;
