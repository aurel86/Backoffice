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
        style={{
            backgroundColor:'#7d8584',
            borderRadius:'5px',
            boxShadow:'2px 1px 1px 1px black ',
        }}
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





































    







    
