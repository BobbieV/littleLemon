import  Home from './home.tsx';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Availability from './availability.tsx';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/availability" element={<Availability /> }/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
