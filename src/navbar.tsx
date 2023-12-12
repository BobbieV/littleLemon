




function Navbar() {

  return (
    <>
        <nav id="nav">
          <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/logo.png?raw=true" className="AppLogo" alt="A lemon icon followed by the words 'Little Lemon'"></img>
          <ul className="navtext">
            <a className="navbar navtextHome" href="#nav">Home</a>
            <a className="navbar navtextAbout" href="#about">About</a>
            <a className="navbar navtextMenu" href="#specials">Menu</a>
            <a className="navbar navtextReservations">Reservations</a>
            <a className="navbar navtextOrderonline">Order Online</a>
            <a className="navbar navtextLogin">Login</a>
        </ul>
       </nav>
    </>
  )
}

export default Navbar;