




function Navbar() {

  return (
    <>
        <nav id="nav">
          <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/logo.png?raw=true" className="AppLogo navbar" alt='A lemon icon followed by the words "Little Lemon"'></img>
          <ul className="navtext">
            <a className="navbar navtextHome" href="#nav" style={{textAlign: 'justify', color: '#495E57', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Home</a>
            <a className="navbar navtextAbout" href="#about" style={{textAlign: 'justify', color: '#495E57', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>About</a>
            <a className="navbar navtextMenu" href="#specials" style={{textAlign: 'justify', color: '#495E57', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Menu</a>
            <a className="navbar navtextReservations" style={{textAlign: 'justify', color: '#495E57', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Reservations</a>
            <a className="navbar navtextOrderonline" style={{textAlign: 'justify', color: '#495E57', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '500'}}>Order Online</a>
            <a className="navbar navtextLogin" style={{textAlign: 'justify', color: '#333333', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Login</a>
        </ul>
       </nav>
    </>
  )
}

export default Navbar;