// import Triangle from "../../assets/icons/Polygon 1.svg"
import "./ask.css"
const Ask = () => {
    return (
<div className="category_container">
        <div className="ask_body_container">
            <h1>Ask A Question</h1>
            <div className="drop_down_section">
                <div className="ask_category">
                    Category
                </div>
                
                    <select className="drop_box">
                        <option>
                            Electrical
                        </option>
                    </select>
                
                    {/* <img src={Triangle}/> */}
                </div>
               
                <div className="text_question_box">
                    <div className="ask_question">Question

                    </div>
                    
                    <textarea name="question_text" ></textarea>
                </div>
                <button className="signup ask_submit" >Submit</button>
            </div>
        </div>
        
    )
}

export default Ask
