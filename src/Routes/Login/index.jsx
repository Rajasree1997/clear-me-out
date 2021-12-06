import {useState} from "react"
import InputField from "../../Components/InputField";
import { isValidEmail,isValidPassword  } from "../../Utility/validation";

const Login = () => {
    const [formData,setFormData]=useState({
        
        email:"",
        password:"",
        
    });
    const [formErrorData,setFormErrorData]=useState({
        
        emailError:"",
        passwordError:"",
        
    });

    
    const{email,password}=formData;
    const{emailError,passwordError}=formErrorData;
    const onChange=(key,value)=>{
    setFormData({...formData,
    [key]:value
    })
    }
    const onError=(key,value)=>{
        setFormErrorData(prev=>({...prev,
        [key]:value
        }))
        }
    const loginCall=(e)=>{
        e.preventDefault();

        if(!isValidEmail(email)){
            onError("emailError","Enter valid Email");
        }
        else{
            onError("emailError","");
        } 
        if(!password){
            onError("passwordError","password can't be empty");
        }
        else{
           
            if(!isValidPassword(password)){
                onError("passwordError","Password Invalid");
            }
            else{
                onError("passwordError","")
            }
        }
    }

    return (
    <div className="signupcontainer_page">
    <div className="signupcontainer">   
    <div className="signing-title">Login</div>
    <form onSubmit={loginCall}>
        
        <InputField
            value={email}
            onChange={(value)=>onChange("email",value)}
            label ="Email"
            error={emailError}/>
        <InputField
            value={password}
            onChange={(value)=>onChange("password",value)}
            label ="Password"
            type="password"
            error={passwordError}/>
            
        
    
    <button className="signing" type="submit">Login</button>
    </form>
    </div>
    </div> 

    )
}

export default Login

