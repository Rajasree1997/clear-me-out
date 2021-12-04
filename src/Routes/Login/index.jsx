import "../Signup/signup.css"
import {useState} from "react"
import InputField from "../../Components/InputField";
const Login = () => {
    const [formData,setFormData]=useState({
       
        email:"",
        password:"",
        
    });
    
    const{email,password}=formData;
    const onChange=(key,value)=>{
    setFormData({...formData,
    [key]:value
    })
}

    return (
    <div className="signupcontainer_page">
    <div className="signupcontainer">   
    <div className="signing-title">Login</div>
    <form>
       
            <InputField
        value={email}
            onChange={(value)=>onChange("email",value)}
            label ="Email"/>
            <InputField
        value={password}
            onChange={(value)=>onChange("password",value)}
            label ="Password"
            type="password"/>
          
    
    <button className="signing">Login</button>
    </form>
    </div>
    </div> 

    )
}

export default Login

