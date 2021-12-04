import { useNavigate } from "react-router-dom"

const CategoryCard = ({image,title,description}) => {
    let navigate =useNavigate();
    return (
        <div className="category_card" onClick={()=>
        navigate("/category/"+title)}>
            <img src={image} alt={title}/>
            <div className="details_section">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default CategoryCard
