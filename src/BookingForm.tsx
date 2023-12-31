import { useState, ChangeEvent, FormEvent } from 'react'
function BookingForm() {

    const [resName, setResName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numGuests, setNumGuests] = useState("")
    const [occasion, setOccasion] = useState("");

    const handleResNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setResName(e.target.value);
    }
    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    }
    const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
    }
    const handleNumGuestsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumGuests(e.target.value);
    }
    const handleOccasionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setOccasion(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        console.log("Form Submitted!");
        setResName("");
        setDate("");
        setTime("");
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
                            htmlFor="date">
                                Date:
                        </label>
                        <input
                            id="date"
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={handleDateChange}
                            />
                    </div>
                    <div className="field">
                        <label
                            htmlFor="time">
                                Time:
                        </label>
                        <input
                            id="time"
                            type="time"
                            value={time}
                            onChange={handleTimeChange}
                            />
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
                        <input
                            id="occasion"
                            type="text"
                            placeholder=""
                            value={occasion}
                            onChange={handleOccasionChange}
                            />
                    </div>
                    <div className="button">
                        <button disabled={!numGuests}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default BookingForm;