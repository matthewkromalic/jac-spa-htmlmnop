
import logo from './logo.svg';
import './App.css';
import './style.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageDirector from './components/router/router.js';
import { BrowserRouter, Route } from 'react-router-dom';
import MainScreen from './components/all-screens/main/MainScreen';
import Fish from './components/all-screens/Countries/CountryAPI';

function App() {
  return (
    <div className="App">
     
       <BrowserRouter> 

      <Header/>
    <div className='page'>
        <PageDirector/>
     </div>
        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
