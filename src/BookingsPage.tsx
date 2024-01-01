import { BookingProvider } from "./BookingContext";
import BookingForm from "./BookingForm"


function BookingsPage() {




  return (
    <BookingProvider>
    <div>

            <BookingForm />

    </div>
    </BookingProvider>
  );
        }

export default BookingsPage;