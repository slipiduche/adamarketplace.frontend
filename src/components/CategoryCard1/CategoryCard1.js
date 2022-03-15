import { Link } from "react-router-dom";


const CategoryCard1 = ({image, title, href = '/', background = "#000062", color = 'white', className}) => {
    return(
        <Link to = {href} className = {`flex flex-col items-center rounded-[30px] max-w-410px mx-3 mb-8 -translateY_5 pb-3 ${className}`} style={{background: background}}>
            <div className="max-h-[240px] h-[240px] w-full">
                <img src = {image} alt = 'categorycard' className="w-full h-full rounded-t-[30px] object-cover" />
            </div>
            <div className="flex flex-col items-center text-center -mb-4 px-3 py-7 lg:px-8 w-full">
                <h2 className={`font-[600] tracking-wide sm:text-xl lg:text-2xl mb-3 text-${color}`}>{title}</h2>       
            </div>
        </Link>
    );
}

export default CategoryCard1;