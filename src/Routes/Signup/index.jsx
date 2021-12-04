import "./signup.css"
const Signup = () => {
    const [formData,setFormData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    console.log(formData);
    return (
    <div className="signupcontainer_page">
    <div className="signupcontainer">   
    <div className="signing-title">Sign Up</div>
    <form>
    <div className="inputform">
    <input type="text"/>
    <div className="inputfield">Full Name</div>
    </div>
    <div className="inputform">
    <input type="text"/>
    <div className="inputfield">Email</div></div>
    <div className="inputform">
    <input type="text"/>
    <div className="inputfield">Password</div></div>
    <div className="inputform">
    <input type="text"/>
    <div className="inputfield">Confirm Password</div>
    </div>
    <button className="signing">Sign up</button>
    </form>
    </div>
    </div> 

    )
}

export default Signup
