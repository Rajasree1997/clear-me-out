import "../Signup/signup.css"
import {useState,useEffect} from "react"
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

    const [isFormSubmitted,setIsFormSubmitted]=useState(false);
    useEffect(()=>{
        formValidate();},[formData])

    const{email,password}=formData;
    const{emailError,passwordError}=formErrorData;
    const onChange=(key,value)=>{
        setFormData(prev=>({...prev,
    [key]:value
    }))
    }
    const onError=(key,value)=>{
        setFormErrorData(prev=>({...prev,
        [key]:value
        }))
        }
    const formValidate =()=>{
        let isValidForm = true;
        if(!email){
            onError("emailError","Email can't be empty");
            isValidForm=false;
            
        }
        else{

        if(!isValidEmail(email)){
            onError("emailError","Enter Valid Email");
            isValidForm=false;
        }
        else{
            onError("emailError","");
        }
    }

        console.log(password);
        if(!password){
            onError("passwordError","password can't be empty");
            isValidForm=false;
            
        }
        else{
           
            if(!isValidPassword(password)){
                onError("passwordError","Password must contain 8 characters");
                isValidForm=false;
            }
            else{
                onError("passwordError","")
            }
        }
        return isValidForm;
    }
    const loginCall=(e)=>{
        e.preventDefault();
        setIsFormSubmitted(true);
        if(formValidate()){
           console.log("login success");
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
            error={emailError}
            isFormSubmitted={isFormSubmitted}/>
        <InputField
            value={password}
            onChange={(value)=>onChange("password",value)}
            label ="Password"
            type="password"
            error={passwordError}
            isFormSubmitted={isFormSubmitted}/>
            
        
    
    <button className="signing" type="submit">Log In</button>
    </form>
    </div>
    </div> 

    )
}

export default Login
