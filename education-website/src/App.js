import logo from './logo.svg';
import './App.css';
import PageDirector from './components/router/router.js';
import { BrowserRouter } from 'react-router-dom';

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
