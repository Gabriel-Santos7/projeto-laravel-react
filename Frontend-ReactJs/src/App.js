import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./Routes";
import './styles/css.css';

function App() {
  return (
   <BrowserRouter>
      <div className="App">
      <Routes/>
      </div>
   </BrowserRouter>
  );
}

export default App;
