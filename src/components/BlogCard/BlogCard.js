

const BlogCard = ({image, title, description, background, href, blueheader = false}) => {
    return(
        <a href = {href} className = 'flex flex-col items-center rounded-[30px] max-w-410px mx-3 -translateY_5 box_shadow_5' style={{background: "transparent"}}>          
            <div className="max-h-[200p] h-[200px] w-full mb-4">    
                <img src = {image} alt = 'blogcard' className="w-full h-full rounded-t-[30px] object-cover"/>
            </div>
            <div className="flex flex-col items-center text-center py-3 px-3 lg:px-8 w-full">
                {blueheader ? (
                    <div className="w-full justity-start">
                    <h2 className="font-[600] sm:text-xl lg:text-2xl mb-4 py-2 px-2 bg-blue-600 w-fit">{title}</h2>
                    </div>
                ):(
                    <h2 className="font-[600] text-white text-[20px] mb-4">{title}</h2>
                )}
                <p className="text-[16px] text-gray-400 font-[600] mb-6">{description}</p>
            </div>
        </a>
    )
}

export default BlogCard;