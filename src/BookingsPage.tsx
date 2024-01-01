import { BookingProvider } from "./BookingContext";
import BookingForm from "./BookingForm"
import Bookings from "./Bookings"


function BookingsPage() {




  return (
    <BookingProvider>
    <div>
            <Bookings />

            <BookingForm />

    </div>
    </BookingProvider>
  );
        }

export default BookingsPage;