import "./signup.css"
import {useState} from "react"
import InputField from "../../Components/InputField";
import { isValidEmail,isValidName,isValidPassword  } from "../../Utility/validation";

const Signup = () => {
    const [formData,setFormData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const [formErrorData,setFormErrorData]=useState({
        fullNameError:"",
        emailError:"",
        passwordError:"",
        confirmPasswordError:""
    });

    
    const{fullName,email,password,confirmPassword}=formData;
    const{fullNameError,emailError,passwordError,confirmPasswordError}=formErrorData;
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
    const signupCall=(e)=>{
        e.preventDefault();
        
        if(!confirmPassword){
            onError("confirmPasswordError","Confirm Your Password");
        }else{
            if(password !==confirmPassword){
            onError("confirmPasswordError","Password Miss Match !")

            }else{
                onError("confirmPasswordError","")
            }
        }

        if(!isValidEmail(email)){
            onError("emailError","Enter Valid Email");
        }
        else{
            onError("emailError","");
        }
        if(!isValidName(fullName)){
            onError("fullNameError","Enter valid Name");
        }
        else{
            onError("fullNameError","");
        }
        if(!password){
            onError("passwordError","password can't be empty");
        }
        else{
           
            if(!isValidPassword(password)){
                onError("passwordError","Password must contain 8 characters");
            }
            else{
                onError("passwordError","")
            }
        }
    }

    return (
    <div className="signupcontainer_page">
    <div className="signupcontainer">   
    <div className="signing-title">Sign Up</div>
    <form onSubmit={signupCall}>
        <InputField
            value={fullName}
            onChange={(value)=>onChange("fullName",value)}
            label ="Full Name"
            error={fullNameError}/>
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
            
        <InputField
            value={confirmPassword}
            onChange={(value)=>onChange("confirmPassword",value)}
            label ="Confirm Password"
            type="password"
            error={confirmPasswordError}/>
    
    <button className="signing" type="submit">Sign up</button>
    </form>
    </div>
    </div> 

    )
}

export default Signup
