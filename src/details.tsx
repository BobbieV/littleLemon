import { Link } from "react-router-dom";


function Details() {


    return(
        <>
             <main id="details">
            <header className="detailsHeader">
                <h2 className="detailsH2">Enter</h2>
                <h2 className="detailsH2">Your</h2>
                <h2 className="detailsH2">Details</h2>
            </header>
                <form id="detailsForm1">
                    <label className="nameLabel">Name:
                    </label>
                    <input type="text" required></input>
                    <label className="phoneLabel">Phone Number:
                    </label>
                    <input type="tel" required></input>
                    <label className="addtlInfo">Anything you would like us to know? e.g. food allergies, special events?
                    </label>
                    <input type="text"></input>
                    <label className="referral">How did you hear about us?</label>
                    <input type="text"></input>
                    <div className="detailsSubmit">
                        <Link to="/review" id="detailsNextPage" className="button">Submit</Link>
                    </div>

                </form>
            </main>
        </>
    )
}
export default Details;