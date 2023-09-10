import react, {useState} from 'react'

const AlertComponent = (props)=> {

    function handleClick(){
        alert('You Clicked?')
    }
    return(
        <button onClick={handleClick} center >Do Not Click Me</button>
    )
}
export default AlertComponent