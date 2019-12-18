import React from 'react'

const character = (props) => {
    let charStyle = {
        display:'inline-block',
        padding: '16px',
        textAlign:'center',
        margin:'16px',
        border:'1px solid black'
    };
    return (
        <div className={charStyle}>
            {props.charValue}
        </div>
    )
}

export default character;