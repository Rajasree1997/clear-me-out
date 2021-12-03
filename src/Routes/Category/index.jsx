
import CategoryImage  from "../../assets/icons/CategoryImage.png"
import Pencil from "../../assets/icons/Vector.svg"
import Eye from "../../assets/icons/Group.svg"
import "./categorystyle.css"

const category = () => {
    return (
        <div className="category_container">
            <div className="upper_section">
                <div className="category-image_section">
                    <img src={CategoryImage} alt="image"/>
                </div>
                    <div className="right_section">
                        <h1>Electronics</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, molestiae. Laboriosam assumenda dolor nostrum distinctio tempore neque nihil sapiente! Obcaecati, voluptatibus. Inventore vel unde dolorum. Velit voluptatibus nulla quaerat perferendis.</p>
                        <h2>Keys</h2>
                        <div className="stylebutton">
                            <button className="buttons">Circuits</button>
                            <button className="buttons">Circuits</button>
                            <button className="buttons">Circuits</button>
                            <button className="buttons">Circuits</button>
                            <button className="buttons">Circuits</button>
                            <button className="buttons">Circuits</button>
                        </div>
                    </div>

                </div>
           <div className="lower_section">
            <div className="questions">
                <p>
                    1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, placeat magnam? Quos magnam a quisquam iste optio temporibus maiores officiis eveniet, quis impedit consequatur consequuntur nulla sit laborum sunt quae?
                </p>
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
                    </div>
            </div>
            <div className="questions">
                <p>
                    1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, placeat magnam? Quos magnam a quisquam iste optio temporibus maiores officiis eveniet, quis impedit consequatur consequuntur nulla sit laborum sunt quae?
                </p>
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
                    </div>
            </div>
            <div className="questions">
                <p>
                    1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, placeat magnam? Quos magnam a quisquam iste optio temporibus maiores officiis eveniet, quis impedit consequatur consequuntur nulla sit laborum sunt quae?
                </p>
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
                    </div>
            </div>
            </div>
        </div>
    )
}

export default category
