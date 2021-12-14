
import { Outlet,useNavigate } from 'react-router-dom'
import Logo from "../assets/icons/ClearMeOut.svg"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const LayOut= () => {
    const navigate=useNavigate();
    const isLoggedIn = useSelector(state => state.isLoggedIn)
     const dispatch = useDispatch()
    return (
        <div className="App">
             
            <header>
            <div className="container">
                <img src={Logo} alt=""/>
                {!isLoggedIn?
                <>
                <Link to="login">Login</Link>
                <button className="signup" onClick={()=>{
                    navigate("/signup")
                }}
                >Sign Up</button>
                </>
                :
                <button className="signup"
                onClick={()=>{
                    dispatch({
                        type:"LoggedOut"
                    })
                }}
                >Logout</button>}
            </div>
            </header>
            <div className="body_container">
            <Outlet/>
            </div>
            </div>
            
       
    )
}

export default LayOut
