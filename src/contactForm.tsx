import { useState } from "react";


function ContactForm() {
const [name, setName]= useState("");
const handleSubmit = (e: string) => {
    e.preventDefault();
    console.log("Form Submitted!");
    setName("");
}

    return(
        <div className="contactForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e.target.value} />
                    </div>
                    <button disabled={!name} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}
export default ContactForm;