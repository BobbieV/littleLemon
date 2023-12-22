import { Link } from 'react-router-dom';

export default function ReserveATableButton() {
    return (
      <Link to="/availability" className="button reserveATableButton" >
        Reserve a Table
      </Link>
    );
  }