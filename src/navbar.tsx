




function Navbar() {

  return (
    <>
        <nav className="nav">
          <section className="AppLogoWrapper">
          <img src="./assets/logo-19f49d27.png" className="AppLogo navbar"></img>
          </section>
          <section className="navtextWrapper">
        <ul className="navtext">
          <li className="navbar navtextHome">Home</li>
          <li className="navbar navtextAbout">About</li>
          <li className="navbar navtextMenu">Menu</li>
          <li className="navbar navtextReservations">Reservations</li>
          <li className="navbar navtextOrderonline">Order Online</li>
          <li className="navbar navtextLogin">Login</li>
        </ul>
        </section>
       </nav>
    </>
  )
}

export default Navbar;