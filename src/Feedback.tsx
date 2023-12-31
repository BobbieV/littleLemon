import { useState, FormEvent, ChangeEvent } from 'react';


function Feedback() {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <=10) {
            alert("Please provide a comment explaining why the experience was poor.");
        return;
    }
    console.log("Form Submitted!");
    setComment("");
    setScore("10");
    }

    return(
        <div className="Feedback">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className="field">
                        <label>Score: {score}/10</label>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={score}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setScore(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label> Comment:</label>
                        <textarea value={comment} onChange={(e => setComment(e.target.value))}/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Feedback;