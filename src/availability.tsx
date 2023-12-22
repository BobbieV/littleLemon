import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function Availability() {

    return (
    <>
    <main id="availability">
        <nav className="availabilityNav">
            <img src="https://github.com/BobbieV/littleLemon/blob/83cc181e5814ff2107709d62e23e2ad9f0119ef0/src/assets/images/logo.png?raw=true"
                className="availabilityLogo" />
        </nav>
        <header className="availabilityHeader">
            <h2 className="availH2">Check For Availability</h2>
        </header>
        <div className="availInput inputDateWrapper">
            <input type="datetime-local" className="inputDateTime" required>

            </input>
        </div>
        <div className ="availInput inputNumGuestsWrapper">
                <input type="number" className="inputNumGuests" required min="1" max="8">
                </input>
                <FontAwesomeIcon icon={faCoffee} className="fa icon" aria-hidden="true" onMouseOver={() => alert('For Parties of more than 8 people, please call the restaurant directly to make reservations.')}></FontAwesomeIcon>
            </div>
    </main>
    </>
    )
}

export default Availability;