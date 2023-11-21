




function Navbar() {

  return (
    <>
      <section className="navWrapper">
        <nav className="nav">
          <div className="AppLogoWrapper">
          <img src="./assets/logo-19f49d27.png" className="AppLogo navbar"></img>
          </div>
        <ul className="navtext">
          <li className="navbar navtext1">Home</li>
          <li className="navbar navtext2">About</li>
          <li className="navbar navtext3">Menu</li>
          <li className="navbar navtext4">Reservations</li>
          <li className="navbar navtext5">Order Online</li>
          <li className="navbar navtext6">Login</li>
        </ul>
       </nav>
        </section>
    </>
  )
}

export default Navbar;