import BookingForm from "./BookingForm"
import Bookings from "./Bookings"
import { useState } from "react";

interface BookingData {
    resName: string;
    date: string;
    time: string;
    numGuests: string;
    occasion: string;
}

function BookingsPage() {



    const [bookingData, setBookingData] = useState<BookingData |null>(null);
  return (
    <div>
        {bookingData ? (
            <Bookings bookingData={bookingData} />
        ) : (
            <BookingForm
                setBookingData={setBookingData}
                />
    )}
    </div>
  );
        }

export default BookingsPage;