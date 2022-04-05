import React, { useState } from 'react';
const Input = (props) => {
    const { field, type, handleChange } = props;
    return (
        <div className='input'>
            <form>
                <div className="text">
                    <p>{field.name}</p>
                    <p>{field.value}</p>
                </div>
                <input type={type} onChange={handleChange} />
            </form>
        </div>
    )
}
export default Input