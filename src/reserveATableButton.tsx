import "./index.css";

export default function reserveATableButton() {
  /*  function handleClick() {
        return (
           <alert>This feature is coming soon!</alert> <---- alert can't go here but also I can't seem to navigate to <Availability />
           );
    }*/

    return (
      <button className="button reserveATableButton" onClick={alert('This feature is coming soon!')}>
        Reserve a Table
      </button>
    );
  }