

import './App.css'


function Navbar() {

  return (
    <>
      <div className="hero">
        <img style={{width: '100%', height: '100%', position: 'relative'}} src="./assets/logo-19f49d27.png" className="AppLogo"></img>
       <nav>
        <ul>
          <li className="navbar">Home</li>
          <li className="navbar">About</li>
          <li className="navbar">Menu</li>
          <li className="navbar">Reservations</li>
          <li className="navbar">Order Online</li>
          <li className="navbar">Login</li>
        </ul>
       </nav>
        </div>
    </>
  )
}

export default Navbar;