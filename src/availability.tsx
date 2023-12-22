
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
        <div className="inputDateWrapper">
            <input type="datetime-local" className="inputDateTime" required min="1" max="8" onMouseOver={() => alert('For Parties of more than 8 people, please call the restaurant directly to make reservations.')}>
                Date/Time of Reservation:
            </input>
        </div>
        <div className ="inputNumGuestsWrapper">
                <input type="number" className="inputNumGuests" required>
                Number of Guests:
                </input>
            </div>
    </main>
    </>
    )
}

export default Availability;