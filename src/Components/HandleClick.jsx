import react, { useState} from 'react';

const HandleClick = () => {
    const [text, setText] = useState('click')

    function handleClick (){
        setText('new text')
    }

    return(
        <div>
            <button className='btn btn-primary btn-lg' onClick={handleClick}>
                {text}
            </button>
        </div>
    )
}
export default HandleClick