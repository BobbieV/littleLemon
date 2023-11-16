

import './App.css'


function Navbar() {

  return (
    <>
      <section className="navbar">
        <nav>
          <img style={{width: '8rem', height: '3rem'}} src="./assets/logo-19f49d27.png" className="AppLogo"></img>
        <ul>
          <li className="navbar">Home</li>
          <li className="navbar">About</li>
          <li className="navbar">Menu</li>
          <li className="navbar">Reservations</li>
          <li className="navbar">Order Online</li>
          <li className="navbar">Login</li>
        </ul>
       </nav>
        </section>
    </>
  )
}

export default Navbar;