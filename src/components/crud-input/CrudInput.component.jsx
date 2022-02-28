import React from "react";
import "./crud-input.styles.css";

const CrudInput = ({handleChange, label, ...otherProps}) => (
    <div className='input-group'>
        <input className='crud-input' onChange={handleChange} {...otherProps} />
        <label className='label'>
             {label}
        </label>
    </div>
);

export default CrudInput;