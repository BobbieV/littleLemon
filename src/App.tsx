import  Home from './home.tsx';
import './index.css';
import {
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Availability from './routes/availability.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/availability" element={ <Availability /> }/>
          </Routes>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/availability" element={ <Availability /> }/>
          </Routes>
    </>
  )
}

export default App;
