import CategoryImage  from "../assets/icons/CategoryImage.png"

const CategoryCard = () => {
    return (
        <div className="category_card">
            <img src={CategoryImage} alt=""/>
            <div className="details_section">
                <h2>TITLE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum cumque pariatur architecto ipsam blanditiis enim ducimus nulla, quis totam ad suscipit eos quasi repellat iste iure eveniet nobis debitis?</p>
            </div>
            
        </div>
    )
}

export default CategoryCard
