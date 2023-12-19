




function Navbar() {

  return (
    <>
        <nav id="nav">
          <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/logo.png?raw=true" className="AppLogo" alt="A lemon icon followed by the words 'Little Lemon'"></img>
          <ul className="navtext">
            <li><a className="navbar navtextHome" href="#nav">Home</a></li>
            <li><a className="navbar navtextAbout" href="#about">About</a></li>
            <li><a className="navbar navtextMenu" href="#specials">Menu</a></li>
            <li><a className="navbar navtextReservations">Reservations</a></li>
            <li><a className="navbar navtextOrderonline">Order Online</a></li>
            <li><a className="navbar navtextLogin">Login</a></li>
        </ul>
       </nav>
    </>
  )
}

export default Navbar;