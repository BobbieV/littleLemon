import  Home from './home.tsx';
import './index.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Availability from './routes/availability.tsx';


function App() {

  return (
    <>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/availability" element={<Availability /> }/>
        </Routes>
    </>
  )
}

export default App;
