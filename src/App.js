import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';
import {Protected} from './pages/Protected';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Protected><Home/></Protected>}/>
      <Route path="/home" element={<Protected><Home/></Protected>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/about" element={<Protected><About/></Protected>}/>
      <Route path="/contact" element={<Protected><Contact/></Protected>}/>
      <Route path="/menu" element={<Protected><Menu/></Protected>}/>
      <Route path="/*" element={<Protected><Pagenotfound/></Protected>}/>
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
