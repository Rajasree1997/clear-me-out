
import { Outlet } from 'react-router'
import Logo from "../assets/icons/ClearMeOut.svg"
import { Link } from 'react-router-dom'
const LayOut= () => {
    return (
        <div className="App">
             
            <header>
            <div className="container">
                <img src={Logo} alt=""/>
                <Link to="login">Login</Link>
                <button className="signup"
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
