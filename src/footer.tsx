



function Footer() {


  return (
    <>
        <footer id="footer">
          <img
            className="footerLogo"
            src="https://github.com/BobbieV/littleLemon/blob/83cc181e5814ff2107709d62e23e2ad9f0119ef0/src/assets/images/logo.png?raw=true"
            alt="A lemon icon next to the words 'Little Lemon'">
            </img>
            <ul className="footer">
              <li>Doormat</li>
              <li>
                <a href="#nav">Navigation</a>
              </li>
              <li>
                <a href="#nav">Home</a>
              </li>
              <li>
                <a href="#nav">About</a>
              </li>
              <li>
                <a href="#specials">Menu</a>
              </li>
              <li>
                <a href="#header">Reservations</a>
              </li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
            <textarea className="footerTextGroup">
              <ul className="footer">
                Contact
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul className="footer">Social Media
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/explore">TikTok</a>
              </li>
            </ul>
            </textarea>
            </footer>
    </>
  )
}

export default Footer;
