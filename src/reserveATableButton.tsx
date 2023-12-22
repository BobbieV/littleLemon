import  {  BrowserRouter as Router, Route }from "react-router-dom";
import Availability from "./routes/availability";

const handleClick= () => {
  return (
    <Router>
        <Route
          path="/availability"
          Component={Availability}
        />
    </Router>)

}
export default function ReserveATableButton() {
    return (
      <button className="button reserveATableButton" onClick={handleClick}>
        Reserve a Table
      </button>
    );
  }