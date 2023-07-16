import { useState } from "react";

export default function Form( { getData }) {

    const [input, setInput] = useState('')

    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        getData(input)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}