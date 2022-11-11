
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import PageDirector from './components/router/router.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <PageDirector/>

      </BrowserRouter>
    </div>
  );
}

export default App;
