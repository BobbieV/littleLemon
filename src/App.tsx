import  Home from './home.tsx';
import './index.css';
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
} from 'react-router-dom';
import Availability from './availability.tsx';


function App() {

  return (
    <>
    <nav id="nav">
          <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/logo.png?raw=true" className="AppLogo" alt="A lemon icon followed by the words 'Little Lemon'"></img>
          <ul className="navtext">
            <Link to="/" className="navbar navtextHome">Home
            </Link>
            <Link to="/about" className="navbar navtextAbout">About
            </Link>
            <Link to="/specials" className="navbar navtextMenu">Menu
            </Link>
            <Link to="/availability" className="navbar navtextReservations">Reservations
            </Link>
            <Link to="/orderOnline" className="navbar navtextOrderonline">Order Online
            </Link>
            <Link to="/login" className="navbar navtextLogin">Login
            </Link>
        </ul>
       </nav>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/availability" element={<Availability /> }/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
