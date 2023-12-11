import "./index.css";
import  Availability from './availability.tsx';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
  import Availability from './availability.tsx';

export default function reserveATableButton() {
    function handleClick() {
        return (
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Availability />} />
                </Routes>
            </Router>
            )
    }

    return (
      <button onClick={handleClick}>
        Reserve a Table
      </button>
    );
  }