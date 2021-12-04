import React from "react"
const InputField=({value,onChange,label,type="text"})=>{
    return(
<div className="inputform">
    <input type={type} value={value}
    onChange={(e)=>{
        onChange(e.target.value)
        }}/>
    <div className={`inputfield ${value? "filled_inputfield":""}`}>{label}</div>
    </div>)}
    export default InputField
