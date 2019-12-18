import React from 'react'

const validation = (props) => {
    let minLength = 5;
    let message = "Text too short"; 

    if(props.textLength >=5)
    {
        message = "Text long enough";
    }

    return (
        <div>
            {message}
        </div>
    );
}

export default validation