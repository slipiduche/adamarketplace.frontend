import PurpleButton from "../../PurpleButton/PurpleButton";
import GrayButton from '../../GrayButton/GrayButton';


const ResourceCard = ({ image, profileImage, title, description, followed = false, href = '/'}) => {
    return(
        <div className = 'flex flex-col items-center rounded-lg max-w-389px mx-3 mb-5 box_shadow_1 scale_13' style={{background: followed ? "rgb(26 33 58)" : "rgba(255, 255, 255, 0.1)"}}>
                
            <img src = {image} alt = 'homecard1' className="w-full"/>
            <div className="flex flex-col items-center text-center -mb-4 px-3 lg:px-8 w-full relative -top-[50px]">
                <img src= {profileImage} alt = 'profile' className="w-full max-w-100px rounded-full mb-3"/>
                <h2 className="font-bold sm:text-xl lg:text-2xl mb-3">{title}</h2>
                <p className="sm:text-base lg:text-20px mb-3">{description}</p>
                {!followed ? (
                    <PurpleButton text = {'+ Follow'} href = {href} className="w-full"/>
                ):(
                    <GrayButton text = {'+ Followed'} href = {href} className="w-full"/>
                )}                 
            </div>
        </div>
    )
}

export default ResourceCard;