




function Navbar() {

  return (
    <>
      <section className="nav">
        <nav>
          <img style={{width: '8rem', height: '3rem'}} src="./assets/logo-19f49d27.png" className="AppLogo navbar"></img>
        <ul>
          <li className="navbar navtext">Home</li>
          <li className="navbar navtext">About</li>
          <li className="navbar navtext">Menu</li>
          <li className="navbar navtext">Reservations</li>
          <li className="navbar navtext">Order Online</li>
          <li className="navbar navtext">Login</li>
        </ul>
       </nav>
        </section>
    </>
  )
}

export default Navbar;