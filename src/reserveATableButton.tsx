import { useNavigate } from "react-router-dom"
import Availability from "./availability.tsx"

export default function reserveATableButton() {
   const navigate = useNavigate();

    function handleClick() {
        navigate("/makeReservation",<Availability />);
    }

    return (
      <button className="button reserveATableButton" onClick={handleClick}>
        Reserve a Table
      </button>
    );
  }