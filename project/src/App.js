import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link,NavLink } from 'react-router-dom';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <dl>
            <dd><Link to="/home">Home</Link></dd>
            <dd><Link to="/about">About</Link></dd>
            <dd><Link to="/contact">Contact</Link></dd>
          </dl>
        </nav>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/contact' element={<Contactus/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
