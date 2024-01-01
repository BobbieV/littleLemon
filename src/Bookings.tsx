import { Link } from "react-router-dom";
import { useBooking } from "./BookingContext";




function Bookings() {

    const { bookingData } =useBooking();

    if (!bookingData) {
        return <p>loading...</p>
    }


    return(
        <>

        <main id="availability">
            <header className="availabilityHeader">
                <h2 className="availH2">Your </h2>
                <h2 className="availH2">Reservation</h2>
            </header>
            <p>{bookingData.resName}</p>
            <p>{bookingData.date}</p>
            <p>{bookingData.time}</p>
            <p>{bookingData.numGuests}</p>
            <p>{bookingData.occasion}</p>
        <Link to="/BookingPage">Edit Reservation</Link>
        <Link to="/">Home</Link>

    </main>
    </>
   ) }

   export default Bookings;