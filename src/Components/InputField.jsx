import React from "react"
const InputField=({value,onChange,label,type="text",error})=>{
    return(
<div className="inputform">
    <input type={type} value={value}
    onChange={(e)=>{
        onChange(e.target.value)
        }}/>
    <div className={`inputfield ${value? "filled_inputfield":""}`}>{label}</div>
    {error && <div className="text_feild_error_text">
        {error}
        </div>}
    </div>)}
    export default InputField
