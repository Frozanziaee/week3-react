import React, {useState} from "react";

function ReactForm() {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => setInputValue (event.target.value)

    return(
        <div>
        <form >
            <label>Name:
            <input type="text" value={inputValue} onChange={handleChange}/>
            </label>
            <p>Input Value: {inputValue} </p>
        </form>
        </div>
    )
}
export default ReactForm