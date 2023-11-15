
import  Header  from './Header.tsx'
import  Navbar  from './navbar.tsx'
import Specials from './specials.tsx'
import Testimonials from './testimonials.tsx'
import Footer from './footer.tsx'

import './App.css'

function App() {


  return (
    <>
      <div className="mainGrid">
        <Navbar/>
        <Header/>
        <Specials/>
        <Testimonials/>
        <Footer/>
        </div>
    </>
  )
}

export default App;
