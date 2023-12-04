




function Navbar() {

  return (
    <>
        <nav id="nav">
          <img src="./assets/logo-19f49d27.png" className="AppLogo navbar" /*style={{width: 294, height: 105, position: 'relative'}}*/></img>
        <ul className="navtext">
          <li className="navbar navtextHome" style={{width: 125, height: 100, textAlign: 'center', color: '#495E57', fontSize: 18, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Home</li>
          <li className="navbar navtextAbout" style={{width: 125, height: 100, textAlign: 'center', color: '#495E57', fontSize: 18, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>About</li>
          <li className="navbar navtextMenu" style={{width: 125, height: 100, textAlign: 'center', color: '#495E57', fontSize: 18, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Menu</li>
          <li className="navbar navtextReservations" style={{width: 175, height: 100, textAlign: 'center', color: '#495E57', fontSize: 18, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Reservations</li>
          <li className="navbar navtextOrderonline" style={{width: 175, height: 100, textAlign: 'center', color: '#495E57', fontSize: 18, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Order Online</li>
          <li className="navbar navtextLogin" style={{width: 125, height: 100, textAlign: 'center', color: '#333333', fontSize: 18, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Login</li>
        </ul>
       </nav>
    </>
  )
}

export default Navbar;