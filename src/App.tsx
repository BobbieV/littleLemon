
import  Header  from './Header.tsx'
import  Navbar  from './navbar.tsx'
import Specials from './specials.tsx'
import Testimonials from './testimonials.tsx'
import Footer from './footer.tsx'

import './index.css'

function App() {


  return (
    <>
      <main className="wrapper">
        <Navbar/>
        <Header/>
        <Specials/>
        <Testimonials/>
        <Footer/>
        </main>
    </>
  )
}

export default App;
