
import { Outlet,useNavigate } from 'react-router-dom'
import Logo from "../assets/icons/ClearMeOut.svg"
import { Link } from 'react-router-dom'

const LayOut= () => {
    const navigate=useNavigate();
    return (
        <div className="App">
             
            <header>
            <div className="container">
                <img src={Logo} alt=""/>
                <Link to="login">Login</Link>
                <button className="signup" onClick={()=>{
                    navigate("/signup")
                }}
                >Sign Up</button>
                </div>
            </header>
            <div className="body_container">
            <Outlet/>
            </div>
            </div>
            
       
    )
}

export default LayOut
