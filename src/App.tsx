
import  Header  from './Header.tsx'
import  Navbar  from './navbar.tsx'
import Specials from './specials.tsx'
import About from './about.tsx'
import Testimonials from './testimonials.tsx'
import Footer from './footer.tsx'


import './index.css'

function App() {


  return (
    <>
      <section>
        <section id="app" style={{width: 1440, height: 2900, /*paddingTop: 10, paddingBottom: 10,*/ background: '#EDEFEE'}} />
          <Navbar/>
          <Header/>
          <Specials/>
          <Testimonials/>
          <About/>
          <Footer/>
        </section>
    </>
  )
}

export default App;
