import CategoryCard from "../../Components/CategoryCard"
import CategoryImage  from "../../assets/icons/CategoryImage.png"

const categoryList = [
{
    image:CategoryImage,
    title:"Electronics",
    description:"Electronics is the branch of science that deals with the study of flow and control of electrons (electricity) and the study of their behavior and effects in vacuums, gases, and semiconductors, and with devices using such electrons.",

},
{
    image:CategoryImage,
    title:"Electrical",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem numquam necessitatibus aspernatur voluptates? Doloribus sit quod qui quasi dolorem repudiandae sequi at tenetur culpa, unde possimus. Fugiat, temporibus maiores.",

},
{
    image:CategoryImage,
    title:"Electronics",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem numquam necessitatibus aspernatur voluptates? Doloribus sit quod qui quasi dolorem repudiandae sequi at tenetur culpa, unde possimus. Fugiat, temporibus maiores.",

},
{
    image:CategoryImage,
    title:"Electronics",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem numquam necessitatibus aspernatur voluptates? Doloribus sit quod qui quasi dolorem repudiandae sequi at tenetur culpa, unde possimus. Fugiat, temporibus maiores.",

},
{
    image:CategoryImage,
    title:"Electronics",
    description:"Electronics is the branch of science that deals with the study of flow and control of electrons (electricity) and the study of their behavior and effects in vacuums, gases, and semiconductors, and with devices using such electrons.",

},
{
    image:CategoryImage,
    title:"Electronics",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem numquam necessitatibus aspernatur voluptates? Doloribus sit quod qui quasi dolorem repudiandae sequi at tenetur culpa, unde possimus. Fugiat, temporibus maiores.",

}]
const Home = () => {
    return (
        <div className="container">
            <div className="category-container">
        {categoryList.map((data,i)=><CategoryCard {...data} key={i}/>)}
            </div>
            
        </div>
    )
}

export default Home
