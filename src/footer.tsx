



function Footer() {


  return (
    <>
        <footer id="#footer" /*style={{width: '100%', height: '100%', background: 'white'}}*/>
          <img className="footerLogo" src="https://github.com/BobbieV/littleLemon/blob/83cc181e5814ff2107709d62e23e2ad9f0119ef0/src/assets/images/logo.png?raw=true" /*style={{width: '100%', height: '100%'}}*/></img>
            <ul className="footer col1Footer" style={{/*width: '100%', height: '100%',*/ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                <li>Doormat</li>
                <li>Navigation</li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul className="footer col2Footer" style={{/*width: '100%', height: '100%',*/ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                Contact
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul className="footer col3Footer" style={{/*width: '100%', height: '100%',*/ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Social Media
                <li>Facebook</li>
                <li>Instagram</li>
                <li>TikTok</li>
            </ul>
            </footer>
    </>
  )
}

export default Footer;
