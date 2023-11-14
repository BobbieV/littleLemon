
import Logo from 'src/assets/Little Lemon logo (420x150px).png'
import './App.css'

function Navbar() {

  return (
    <>
      <div>
       <nav>
        <Logo/>
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

export default Navbar