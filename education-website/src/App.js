import logo from './logo.svg';
import './App.css';
import PageDirector from './components/router/router.js';
import { BrowserRouter, Route } from 'react-router-dom';
import MainScreen from './components/all-screens/main/MainScreen';
import Fish from './components/all-screens/Fish/FishAPI';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <PageDirector/>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
