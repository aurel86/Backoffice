import { ChangeEvent, FC, LabelHTMLAttributes } from "react";

interface InputsProps {
    type:'email'| 'password'|'text'|'number'
    label: string
    value: string | number
    error: boolean
    disabled?: boolean
    onChange:(e: ChangeEvent<HTMLInputElement>)
}

const Inputs: FC<InputsProps> = ({
   type,
   label,
   value,
   error,
   disabled,
   onChange,
})  => {
    return (
        <div className="inputs-wrapper">
        <label htmlFor={label}>{label}</label>
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





































    







    
