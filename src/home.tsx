import  Header  from './Header.tsx';
import  Navbar  from './navbar.tsx';
import Specials from './specials.tsx';
import About from './about.tsx';
import Testimonials from './testimonials.tsx';
import Footer from './footer.tsx';
import './index.css';

export default function Home() {
    return (
        <>
            <Navbar/>
            <Header/>
            <Specials/>
            <Testimonials/>
            <About/>
            <Footer/>
      </>
    )
}