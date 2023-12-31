import { useState, ChangeEvent, FormEvent } from "react";


function ContactForm() {
const [name, setName]= useState("");

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted!");
    setName("");
};

const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
                        onChange={handleNameChange}
                    />
                    </div>
                    <button disabled={!name} type="submit">
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    )
}
export default ContactForm;