import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import  DatePickerComponent from './DatePicker.tsx'
import { useState } from 'react';
import Navbar from './navbar.tsx';


function Availability() {

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    const handleDateSelect = (date: Date | null) => {
      if (date) {
        setStartDate(date);
      }
    };

    const handleChange = (date: Date | null) => {
        setStartDate(date)
    }

    return (
    <>
    <main id="availability">
        < Navbar />
        <header className="availabilityHeader">
            <h2 className="availH2">Check For Availability</h2>
        </header>
        <form>
           {< DatePickerComponent
                selectedDate={startDate}
                handleDateSelect={handleDateSelect}
                onChange={handleChange}
                />}
            <div className ="availInput inputNumGuestsWrapper">
                <label>Number of Guests:</label>
                <input type="number" className="inputNumGuests" required min="1" max="8">
                </input>
                <FontAwesomeIcon icon={ faQuestion } className="fa icon" aria-hidden="true" onClick={() => alert('For Parties of more than 8 people, please call the restaurant directly to make reservations.')}></FontAwesomeIcon>
            </div>
        </form>
    </main>
    </>
    )
}

export default Availability;