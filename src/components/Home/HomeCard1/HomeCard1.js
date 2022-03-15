
import './HomeCard1.css';
import {Link} from 'react-router-dom';

const HomeCard1 = ({image, title, description, background, href = '/'}) => {
    return (
        <>
            <Link to = {href} className = 'flex flex-col items-center rounded-lg max-w-410px mx-3 home_card_1 box_shadow_2' style={{background: background}}>
                
                <div className='max-h-[436px] overflow-hidden'>
                    <img src = {image} alt = 'homecard1' className="w-full"/>
                </div>
                <div className="flex flex-col items-center text-center py-3 px-3 lg:px-8 w-full">
                    <h2 className="font-bold sm:text-xl lg:text-2xl">{title}</h2>
                    <p className="sm:text-base lg:text-20px">{description}</p>
                    <p className="live_button w-fit py-1 px-8 mt-4 text-2xl">
                        Live
                    </p>
                </div>
            </Link>
        </>
    )
}

export default HomeCard1;