import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import  DatePickerComponent from './DatePicker.tsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Availability() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleDateSelect = (date: Date | null) => {
        setSelectedDate(date);
    };
    return(
    <>
        <main id="availability">
            <header className="availabilityHeader">
                <h2 className="availH2">Check For Availability</h2>
            </header>
            <form id="availForm1">
                    <DatePickerComponent
                        onChange ={(date: Date | null) =>{
                            handleDateSelect(date);
                        }}
                        selected={selectedDate}
                        handleDateSelect={handleDateSelect}
                        />

            <div className ="availInput inputNumGuestsWrapper">
                <label>Number of Guests:</label>
                <input type="number" className="inputNumGuests" required min="1" max="8">
                </input>
                <FontAwesomeIcon icon={ faQuestion } className="fa icon" aria-hidden="true" onClick={() => alert('For Parties of more than 8 people, please call the restaurant directly to make reservations.')}></FontAwesomeIcon>
            </div>
            <div className="availSubmit">
                <Link to="/details" id="availNextPage" className="button">Next Page</Link>
            </div>
        </form>
    </main>
    </>
   ) }
export default Availability;