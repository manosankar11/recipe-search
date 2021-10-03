import React from 'react'
import './InputField.css'

const InputField = (props) => {
    return (
        <div>
            <input  type={props.type} placeholder={props.placeholder}  />
        </div>
    )
}

export default InputField;