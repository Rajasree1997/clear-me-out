import "./signup.css"
import {useState} from "react"
import InputField from "../../Components/InputField";
const Signup = () => {
    const [formData,setFormData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    
    const{fullName,email,password,confirmPassword}=formData;
    const onChange=(key,value)=>{
    setFormData({...formData,
    [key]:value
    })
}

    return (
    <div className="signupcontainer_page">
    <div className="signupcontainer">   
    <div className="signing-title">Sign Up</div>
    <form>
        <InputField
        value={fullName}
            onChange={(value)=>onChange("fullName",value)}
            label ="Full Name"/>
            <InputField
        value={email}
            onChange={(value)=>onChange("email",value)}
            label ="Email"/>
            <InputField
        value={password}
            onChange={(value)=>onChange("password",value)}
            label ="Password"
            type="password"/>
            
            <InputField
        value={confirmPassword}
            onChange={(value)=>onChange("confirmPassword",value)}
            label ="Confirm Password"
            type="password"/>
    
    <button className="signing">Sign up</button>
    </form>
    </div>
    </div> 

    )
}

export default Signup
