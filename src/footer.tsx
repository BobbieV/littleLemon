



function Footer() {


  return (
    <>
        <footer id="#footer">
          <img className="footerLogo" src="https://github.com/BobbieV/littleLemon/blob/83cc181e5814ff2107709d62e23e2ad9f0119ef0/src/assets/images/logo.png?raw=true" /*style={{width: '100%', height: '100%'}}*/></img>
            <ul className="footer col1Footer" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                <a>Doormat</a>
                <a href="#nav">Navigation</a>
                <a href="#nav">Home</a>
                <a href="#nav">About</a>
                <a href="#specials">Menu</a>
                <a href="#header">Reservations</a>
                <a >Order Online</a>
                <a >Login</a>
            </ul>
            <ul className="footer col2Footer" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                Contact
                <a>Address</a>
                <a>Phone Number</a>
                <a>Email</a>
            </ul>
            <ul className="footer col3Footer" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Social Media
                <a href="https://www.facebook.com">Facebook</a>
                <a href="https://www.instagram.com">Instagram</a>
                <a href="https://www.tiktok.com/explore">TikTok</a>
            </ul>
            </footer>
    </>
  )
}

export default Footer;
