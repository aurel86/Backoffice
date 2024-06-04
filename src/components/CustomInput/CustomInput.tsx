import { ChangeEvent, FC, LabelHTMLAttributes } from "react";
import './CustomInput.css';



const Inputs  = ({
   type,
   label,
   value,
   errorMessage,
   disabled,
   onChange,
})  => {
    return (
        <div className="inputs-wrapper">
        
        <label className="label" htmlFor={label}>{label.toUpperCase()}</label>
        <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        </div>

    )

}

export default Inputs





































    







    
