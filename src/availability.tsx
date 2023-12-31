import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import DatePickerComponent from './DatePicker';


function Availability() {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const handleDateSelect = (date: Date | null) => {
        setSelectedDate(date);
    };

    return(
        <>

        <main id="availability">
            <header className="availabilityHeader">
                <h2 className="availH2">Check</h2>
                <h2 className="availH2">For</h2>
                <h2 className="availH2">Availability</h2>
            </header>
                <form id="availForm1" >
                    <div className ="availInput inputResDateTimeWrapper">
                        <DatePickerComponent
                        onChange={(date: Date | null) => {
                            handleDateSelect(date);
                        }}
                        selected={selectedDate}
                        handleDateSelect={handleDateSelect}
                        required
                        />
                    </div>
                    <div className ="availInput inputNumGuestsWrapper">
                        <label>Number of Guests:</label>
                        <input
                            type="number"

                            required


                            min="1"
                            max="8" ></input>
                        <FontAwesomeIcon
                            icon={ faQuestion }
                            className="fa icon"
                            aria-hidden="true"
                            onClick={() => alert('For Parties of more than 8 people, please call the restaurant directly to make reservations.')}></FontAwesomeIcon>
                    </div>

            <div className="availSubmit">
                <Link to="/details" id="availNextPage" className="button">Next Page</Link>
            </div>
            </form>
    </main>
    </>
   ) }
export default Availability;