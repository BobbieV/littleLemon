import { useState, ChangeEvent, FormEvent } from 'react'
function BookingForm() {

    const [resName, setResName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState<string>("5:00 pm");
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
        setResName("");
        setDate("");
        setTime("5:00 pm");
        setNumGuests("");
        setOccasion("");
    }
    return(
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
                            <option value="5:00 pm"> 5:00 pm</option>
                            <option value="5:30 pm"> 5:30 pm</option>
                            <option value="6:00 pm"> 6:00 pm</option>
                            <option value="6:30 pm"> 6:30 pm</option>
                            <option value="7:00 pm"> 7:00 pm</option>
                            <option value="7:30 pm"> 7:30 pm</option>
                            <option value="8:00 pm"> 8:00 pm</option>
                            <option value="8:30 pm"> 8:30 pm</option>
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
                    </div>
                    <div className="button">
                        <input type="submit" value="Make Your Reservation"/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default BookingForm;