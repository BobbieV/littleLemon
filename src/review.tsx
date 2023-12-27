//import { useState } from 'react';
import { Link } from 'react-router-dom';


function Review() {

    return(
    <>
        <main id="review">
            <header className="reviewHeader">
                <h2 className="reviewH2">Review</h2>
                <h2 className="reviewH2">Your</h2>
                <h2 className="reviewH2">Reservation</h2>
            </header>
            <p className="reviewName">Name: {}</p>
            <p className="reviewTel">Phone Number: {}</p>
            <p className="reviewResDate">Date of Reservation: {}</p>
            <p className="reviewResTime">Time of Reservation: {}</p>
            <p className="reviewAddtlInfo">Additional Info: {}</p>
            <p className="reviewReferral">Referral Source: {}</p>
            <Link to="/availability">Edit</Link>
            <Link to="/">Confirm</Link>
    </main>
    </>
   ) }
export default Review;