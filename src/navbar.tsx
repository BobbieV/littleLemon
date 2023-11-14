

import './App.css'


function Navbar() {

  return (
    <>
      <div>
        <img src="src/assets/images/logo.png" className="AppLogo"></img>
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