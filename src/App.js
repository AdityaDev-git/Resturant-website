import './App.css';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';

function App() {
  return (
      <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/menu' element={<Menu/>} />
          <Route exact path='*' element={<Pagenotfound/>} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
