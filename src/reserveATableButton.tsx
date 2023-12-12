import { useNavigate } from "react-router-dom"

export default function reserveATableButton() {
   const navigate = useNavigate();

    function handleClick() {
        navigate(<Availability />);
    }

    return (
      <button className="button reserveATableButton" onClick={handleClick}>
        Reserve a Table
      </button>
    );
  }