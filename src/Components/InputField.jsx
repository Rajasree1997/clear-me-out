import React, { useState } from "react"
const InputField=({value,onChange,label,type="text",error,isFormSubmitted=false})=>{
    const [errorDisplay,setErrorDisplay]=useState(false)
    // for blur
    return(
<div className="inputform">
    <input type={type} value={value} 
    onChange={(e)=>{
        onChange(e.target.value)
        }}
        onBlur={()=>
            setErrorDisplay(true)
            // click cheydathin matram error kanikan
        }
        />
    <div className={`inputfield ${value? "filled_inputfield":""}`}>{label}</div>
{/* input type cheydal ath avidethanne nikkanm next fieldlekk poyal */}

    {error && (errorDisplay || isFormSubmitted)  &&  <div className="text_feild_error_text">
        {error}
        </div>}
    </div>)}
    export default InputField
