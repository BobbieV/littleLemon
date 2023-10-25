import { useState } from 'react'
import Logo from 'src/assets/Little Lemon logo (420x150px).png'
import './App.css'

function Navbar() {

  return (
    <>
      <div>
       <nav>
        <img src="BobbieV/littleLemon/src/assets/Little Lemon logo (420x150px).png" className="navbarLogo" alt="Little Lemon Logo"/>
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

export default App