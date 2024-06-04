import { ChangeEvent, FC, LabelHTMLAttributes } from "react";
import './CustomInput.css';



const Inputs  = ({
   type,
   label,
   value,
   error,
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
        {error && <p className="error">Input filed can't be empty!</p>}
        </div>

    )

}

export default Inputs





































    







    
