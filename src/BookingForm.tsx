import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import Bookings from './Bookings.tsx';
import { BookingProvider, useBooking } from './BookingContext.tsx'


function BookingForm() {

    const [newBooking, setNewBooking] = useState<string[]>([])

    const [resName, setResName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState<string>("");
    const [numGuests, setNumGuests] = useState("")
    const [occasion, setOccasion] = useState("");

    const handleResNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setResName(e.target.value);
    }
    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    }
    const handleTimeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTime(e.target.value);
    }
    const handleNumGuestsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumGuests(e.target.value);
    }
    const handleOccasionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setOccasion(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        console.log("Form Submitted!");
        alert("Your reservation is Confirmed")
        setResName("");
        setDate("");
        setTime("");
        setNumGuests("");
        setOccasion("");
        setNewBooking(newBookingArray);
        setBookingData(bookingData)
        console.log({newBooking: newBookingArray})

    }
    const [availableTimes] = useState<string[]>([
        "5:00 pm", "5:30 pm", "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:30 pm"
    ]);

    const { bookingData, setBookingData } = useBooking();


    const newBookingArray = [bookingData.resName, bookingData.date, bookingData.time, bookingData.numGuests, bookingData.occasion];
    console.log(bookingData)
    console.log(newBooking);
    return(
        <BookingProvider>
        <div className="BookingForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                <div className="field">
                        <label
                            htmlFor="resName">
                                Name:
                        </label>
                        <input
                            id="resName"
                            type="text"
                            placeholder="Name"
                            value={resName}
                            onChange={handleResNameChange}
                            />
                    </div>
                    <div className="field">
                        <label
                            htmlFor="res-date">
                                Choose Date:
                        </label>
                        <input
                            id="res-date"
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={handleDateChange}
                            />
                    </div>
                    <div className="field">
                        <label
                            htmlFor="res-time">
                                Choose Time:
                        </label>
                        <select
                            id="res-time"
                            value={time}
                            onChange={handleTimeChange}
                            >
                                {availableTimes.map((availableTime, index) => (
                                    <option key={index} value={availableTime}>
                                        {availableTime}
                                    </option>
                                ))}
                           </select>
                    </div>
                    <div className="field">
                        <label
                            htmlFor="numGuests">
                                Number of Guests:
                        </label>
                        <input
                            id="numGuests"
                            type="number"
                            min="1"
                            max="8"
                            value={numGuests}
                            onChange={handleNumGuestsChange}
                            />
                            <FontAwesomeIcon
                            icon={ faQuestion }
                            className="fa icon"
                            aria-hidden="true"
                            onClick={() =>
                                alert('For Parties of more than 8 people, please call the restaurant directly to make reservations.')}/>
                    </div>
                    <div className="field">
                        <label
                            htmlFor="occasion">
                                Occasion (Birthday, Anniversary, etc):
                        </label>
                        <select
                            id="occasion"

                            placeholder=""
                            value={occasion}
                            onChange={handleOccasionChange}
                            >
                            <option value="None">None</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Other">Other</option>
                        </select>
                        <input type="submit" className="button" value="Make Your Reservation"/>
                        <p>{newBooking}</p>
                    <Link
                        to="/"
                        className="button">
                            Home
                    </Link>
                    <Link
                        to="/Bookings"
                        className="button">
                            View Reservation
                    </Link>
                    </div>
                </fieldset>
            </form>
            <Bookings />
        </div>
        </BookingProvider>
    )
}
export default BookingForm;