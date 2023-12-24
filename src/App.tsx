import  Home from './home.tsx';
import './index.css';
import {

  Link,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Availability from './availability.tsx';
import ErrorPage from './error-page.tsx';
import Specials from './specials.tsx';
import About from './about.tsx';


function App() {

  return (
    <>
  <BrowserRouter >
    <nav id="nav">
          <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/logo.png?raw=true" className="AppLogo" alt="A lemon icon followed by the words 'Little Lemon'"></img>

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

    </nav>

    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/availability" element={<Availability /> }/>
          <Route path="/specials" element={<Specials />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/orderOnline" element={<ErrorPage />}/>
          <Route path="/login" element={<ErrorPage />}/>

        </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
