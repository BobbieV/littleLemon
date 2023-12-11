import "./index.css";
import  Availability from './availability.tsx';

export default function reserveATableButton() {
    function handleClick() {
        return (<Availability />)
    }

    return (
      <button onClick={handleClick}>
        Reserve a Table
      </button>
    );
  }