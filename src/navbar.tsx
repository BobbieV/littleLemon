

import './App.css'


function Navbar() {

  return (
    <>
      <div className="navbar">
        <img style={{width: '8rem', height: '3rem', position: 'relative'}} src="./assets/logo-19f49d27.png" className="AppLogo"></img>
       <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
       </nav>
        </div>
    </>
  )
}

export default Navbar;