
import CategoryImage  from "../../assets/icons/CategoryImage.png"
import "./categorystyle.css"

const category = () => {
    return (
        <div className="category_container">
            <div className="upper_section">
                <div className="image_section">
                    <img src={CategoryImage} alt="image"/>
                </div>
                    <div className="right_section">
                        <h1>Electronics</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, molestiae. Laboriosam assumenda dolor nostrum distinctio tempore neque nihil sapiente! Obcaecati, voluptatibus. Inventore vel unde dolorum. Velit voluptatibus nulla quaerat perferendis.</p>
                        <h2>Keys</h2>
                        <div className="stylebutton">
                            <button className="buttons" >Circuits</button>
                            <button className="buttons">Circuits</button>
                            <button className="buttons">Circuits</button>
                            <button className="buttons">Circuits</button>
                            <button className="buttons">Circuits</button>
                            <button className="buttons">Circuits</button>
                        </div>
                    </div>
                </div>
           
        </div>
    )
}

export default category
