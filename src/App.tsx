import  Home from './home.tsx';
import './index.css';
import {

  NavLink,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import BookingsPage from './BookingsPage.tsx';
import ErrorPage from './error-page.tsx';
import Specials from './specials.tsx';
import About from './about.tsx';
import Details from './details.tsx';
import Review from './review.tsx';
import ContactForm from './contactForm.tsx';


function App() {

  return (
    <>
  <BrowserRouter >
  <div className="navLinksWrapper">
    <nav id="nav">
          <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/logo.png?raw=true" className="AppLogo" alt="A lemon icon followed by the words 'Little Lemon'"></img>

            <NavLink
              to="/"
              className="navbar navtextHome"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >Home
            </NavLink>
            <NavLink
              to="/about"
              className="navbar navtextAbout"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >About
            </NavLink>
            <NavLink
              to="/specials"
              className="navbar navtextMenu"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >Menu
            </NavLink>
            <NavLink
              to="/Bookings"
              className="navbar navtextReservations"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >Reservations
            </NavLink>
            <NavLink
              to="/orderOnline"
              className="navbar navtextOrderonline"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >Order Online
            </NavLink>
            <NavLink
              to="/login"
              className="navbar navtextLogin"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >Login
            </NavLink>

    </nav>
    </div>

    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Bookings" element={<BookingsPage />}/>
          <Route path="/specials" element={<Specials />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/orderOnline" element={<ErrorPage />}/>
          <Route path="/login" element={<ErrorPage />}/>
          <Route path="/details" element={<Details />}/>
          <Route path="/review" element={<Review />}/>
          <Route path="/contactForm" element={<ContactForm />}/>
        </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
