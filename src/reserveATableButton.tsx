import "./index.css";

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