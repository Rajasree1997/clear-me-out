
import Pencil from "../../assets/icons/Vector.svg"
import Eye from "../../assets/icons/Group.svg"
import "../Category/categorystyle.css"
import "./answer.css"

const index = () => {
    return (
        <div className="category_container">
            <div className="lower_section">
            <div className="questions_view">
                <p className="questionpara">
                    1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, placeat magnam? Quos magnam a quisquam iste optio temporibus maiores officiis eveniet, quis impedit consequatur consequuntur nulla sit laborum sunt quae?
                </p>
                <div className="buttondiv">
                <button className="circuits">Circuits</button>
                
                <button className="circuits">Circuits</button>
                
                <button className="circuits">Circuits</button>
                </div>
                <div className="comment_section">
                    <div className="pencil_section">
                        <img src={Pencil}/>
                        <div className="number">3</div>
                        <div className="answers">Answers</div>
                    </div>
                    <div className="views_section">
                        <img src={Eye}/>
                        <div className="number">315</div>
                        <div className="answers">Views</div>
                    </div>
                    <div className="date_section">
                        <div className="answers">Date:</div>
                        <div className="number">11/12/2021</div>
                    </div>

                </div>
            </div>
            <div className="questions">
                <div className="name">Vishnu</div>
                <div className="date_section">
                        <div className="answers1">Date:</div>
                        <div className="number1">11/12/2021</div>
                    </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, placeat magnam? Quos magnam a quisquam iste optio temporibus maiores officiis eveniet, quis impedit consequatur consequuntur nulla sit laborum sunt quae?
                </p>
                
            </div>
            <div className="questions">
                <div className="name">Vishnu</div>
                <div className="date_section">
                        <div className="answers1">Date:</div>
                        <div className="number1">11/12/2021</div>
                    </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, placeat magnam? Quos magnam a quisquam iste optio temporibus maiores officiis eveniet, quis impedit consequatur consequuntur nulla sit laborum sunt quae?
                </p>
                
            </div>
            
            
            <div className="questions">
                <div className="name">Vishnu</div>
                <div className="date_section">
                        <div className="answers1">Date:</div>
                        <div className="number1">11/12/2021</div>
                    </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, placeat magnam? Quos magnam a quisquam iste optio temporibus maiores officiis eveniet, quis impedit consequatur consequuntur nulla sit laborum sunt quae?
                </p>
                
            </div>
           
               
            

        </div>
        </div>
    )
}

export default index
