

const CategoryCard = ({image,title,description}) => {
    return (
        <div className="category_card">
            <img src={image} alt={title}/>
            <div className="details_section">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default CategoryCard
