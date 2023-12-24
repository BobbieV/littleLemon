import  Home from './home.tsx';
import './index.css';
import {

  NavLink,
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

            <NavLink
              to="/"
              className="navbar navtextHome"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
              >Home
            </NavLink>
            <NavLink
              to="/about"
              className="navbar navtextAbout"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
              >About
            </NavLink>
            <NavLink
              to="/specials"
              className="navbar navtextMenu"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
              >Menu
            </NavLink>
            <NavLink
              to="/availability"
              className="navbar navtextReservations"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
              >Reservations
            </NavLink>
            <NavLink
              to="/orderOnline"
              className="navbar navtextOrderonline"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
              >Order Online
            </NavLink>
            <NavLink
              to="/login"
              className="navbar navtextLogin"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#F4CE14',
                background: isActive ? '#F4CE14' : '#f0f0f0',
              })}
              >Login
            </NavLink>

    </nav>

    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/availability" element={<Availability />}/>
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
