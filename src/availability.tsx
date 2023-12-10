import DatePicker from react-DatePicker;
import "index.css";
import "logo.png";

function Availability() {

    return (
    <>
    <nav className="availabilityNav"><img src="logo.png" className="availabilityLogo"></img></nav>
    <header className="availabilityHeader" style={{background: '#EDEFEE'}}>Check For Availability</header>
    <DatePicker>
    </DatePicker>
    </>
    )
}

export default Availability;