import { Route, Switch } from 'react-router-dom'
import MainScreen from '../all-screens/main/MainScreen.js'
import NasaPage from '../all-screens/NASA/NasaAPI.js'
import Countries from '../all-screens/Countries/Country.js'
import AboutPage from '../all-screens/AboutUs/AboutPage.js'
import SingleCountry from '../all-screens/Countries/SingleCountry.js'
import States from '../all-screens/States/State.js'
import SingleState from '../all-screens/States/SingleState.js'
import ContactPage from '../all-screens/Contact/ContactPage.js'


const PageDirector = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={MainScreen}/>
            <Route exact path={'/states'} component={States}/>
            <Route exact path={'/country'} component={Countries}/>
            <Route exact path={'/nasa'} component={NasaPage}/>
            <Route exact path={'/us'} component={AboutPage}/>
            {/* <Route exact path={'/singlecountry'} component={SingleCountry}/> */}
            {/* <Route exact path={'/singlecountry'} component={(props) => <SingleCountry {...props}/>}/> */}
            <Route exact path={'/states/:stateName'} component={SingleState}/>
            <Route exact path={'/singlecountry/:countryName'} component={SingleCountry}/>
            <Route exact path={'/contact'} component={ContactPage}/>
        </Switch>
    )
} 

export default PageDirector;
