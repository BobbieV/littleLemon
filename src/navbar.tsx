




function Navbar() {

  return (
    <>
        <nav id="nav">
          <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/logo.png?raw=true" className="AppLogo navbar" /*style={{width: 294, height: 105, position: 'relative'}}*/></img>
          <ul className="navtext">
            <a className="navbar navtextHome" href="#nav" style={{/*width: 125, height: 100,*/ textAlign: 'justify', color: '#495E57', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Home</a>
            <a className="navbar navtextAbout" href="#about" style={{/*width: 125, height: 100,*/ textAlign: 'justify', color: '#495E57', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>About</a>
            <a className="navbar navtextMenu" href="#specials" style={{/*width: 125, height: 100,*/ textAlign: 'justify', color: '#495E57', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Menu</a>
            <a className="navbar navtextReservations" style={{/*width: 175, height: 100,*/ textAlign: 'justify', color: '#495E57', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Reservations</a>
            <a className="navbar navtextOrderonline" style={{/*width: 175, height: 100,*/ textAlign: 'justify', color: '#495E57', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '500', /*wordWrap: 'break-word'*/}}>Order Online</a>
            <a className="navbar navtextLogin" style={{/*width: 125, height: 100,*/ textAlign: 'justify', color: '#333333', fontSize: 12, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Login</a>
        </ul>
       </nav>
    </>
  )
}

export default Navbar;