
import { Link } from "react-router-dom";
const CategoryCard2 = ({href, image, profileImage, title, description, by }) => {
    return(
        <Link to = {href} className = 'flex flex-col items-center rounded-[39px] max-w-[420px] mx-4 mb-8 -translateY_5 box_shadow_2 border-gray-300 border-[1px] p-5 text-black tracking-wide hover_shadow' style={{background: "white"}}>

            <div className="max-h-[200px] h-[200px] w-full">
                <img src = {image} alt = 'homecard1' className="h-full w-full object-cover rounded-t-[30px]"/>
            </div>   
            <div className="flex flex-col items-center text-center -mb-4 lg:px-12 w-full relative -top-[25px]">
                <img src= {profileImage} alt = 'profile' className="w-full max-w-[50px] rounded-full mb-3"/>
                <h2 className="font-[600] text-[16px] mb-1">{title}</h2>
                <p className="text-[16px] text-bold mb-3">By <span className="text-blue-800">{by}</span></p>
                {/* <p className="text-[16px] text-[#524848] mb-3">{description}</p> */}
                <p className="text-[14px] text-gray-500 mb-3">{description}</p>
                              
            </div>
        </Link>
    )
}

export default CategoryCard2;