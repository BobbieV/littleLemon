import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Formik, Form, Field} from 'formik'


const Availability = () => {


    return(
    <>

        <main id="availability">
            <header className="availabilityHeader">
                <h2 className="availH2">Check</h2>
                <h2 className="availH2">For</h2>
                <h2 className="availH2">Availability</h2>
            </header>
            <Formik
                initialValues={{
                    numGuests: "",
                    resDateTime: ""
                }}
                onSubmit ={(values) => {
            alert(JSON.stringify(values))
                }}
            >
                { ({handleSubmit, values, handleChange}) => (
                    <Form id="availForm1" onSubmit={handleSubmit}>
<div className ="availInput inputNumGuestsWrapper">
                <label
                    htmlFor="resDateTime"
                    >Reservation Date & Time:
                    </label>
                <Field id="resDateTime" name="resDateTime">
                <input
                    value={values.resDateTime}
                    name="inputresDateTime"
                    required
                    onChange={handleChange}
                />
                <FontAwesomeIcon
                    icon={ faCalendar }
                    className="fa icon"
                    aria-hidden="true"
                    onClick={() => alert('For Parties of more than 8 people, please call the restaurant directly to make reservations.')}></FontAwesomeIcon></Field>
            </div>
            <div className ="availInput inputNumGuestsWrapper">
                <label
                    htmlFor="numGuests"
                    >Number of Guests:
                    </label>
                <Field id="numGuests" name="numGuests">
                <input
                    type="number"
                    className="inputNumGuests"
                    required
                    value={values.numGuests}
                    onChange={handleChange}
                    min="1"
                    max="8" />
                <FontAwesomeIcon
                    icon={ faQuestion }
                    className="fa icon"
                    aria-hidden="true"
                    onClick={() => alert('For Parties of more than 8 people, please call the restaurant directly to make reservations.')}></FontAwesomeIcon></Field>
            </div>
            <div className="availSubmit">
                <Link to="/details" id="availNextPage" className="button">Next Page</Link>
            </div>
        </Form>
    )}
        </Formik>
    </main>
    </>
   ) }
export default Availability;