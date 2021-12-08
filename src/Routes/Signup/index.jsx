import "./signup.css"
import {useState,useEffect} from "react"
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

    const [isFormSubmitted,setIsFormSubmitted]=useState(false);
    useEffect(()=>{
        formValidate();},[formData])

    const{fullName,email,password,confirmPassword}=formData;
    const{fullNameError,emailError,passwordError,confirmPasswordError}=formErrorData;
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
        if(!confirmPassword){
            onError("confirmPasswordError","Confirm Your Password");
            isValidForm=false;
        }else{
            if(password !==confirmPassword){
            onError("confirmPasswordError","Password Miss Match !")
            isValidForm=false;
            }else{
                onError("confirmPasswordError","")
            }
        }if(!email){
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
        }}
        if(!isValidName(fullName)){
            onError("fullNameError","Enter valid Name");
            isValidForm=false;
        }
        else{
            onError("fullNameError","");
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
    const signupCall=(e)=>{
        e.preventDefault();
        setIsFormSubmitted(true);
        if(formValidate()){
           console.log("signup success");
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
            error={fullNameError}
            isFormSubmitted={isFormSubmitted}/>
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
            
        <InputField
            value={confirmPassword}
            onChange={(value)=>onChange("confirmPassword",value)}
            label ="Confirm Password"
            type="password"
            error={confirmPasswordError}
            isFormSubmitted={isFormSubmitted}/>
    
    <button className="signing" type="submit">Sign up</button>
    </form>
    </div>
    </div> 

    )
}

export default Signup
