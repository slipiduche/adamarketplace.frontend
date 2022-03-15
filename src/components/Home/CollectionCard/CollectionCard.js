import { Link } from "react-router-dom";
import './CollectionCard.css';

const CollectionCard = ({number, cardDetails, href}) => {
    return (
        <Link to = {href}>
            <div className="collection_card flex justify-between w-full py-6 border-b-2 border-slate-500 px-2">

                <div className="flex">
                    <div className="flex items-end mr-4">
                        <p className="text-2xl lg:text-3xl font-bold mb-3">{number}</p>
                    </div>
                    <div className="flex flex-row items-center">

                        <img src = {cardDetails.image} alt = 'collectioncard' className="h-full w-full max-w-[50px] max-h-[50px] md:max-h-[100px] md:max-w-100px collection_card_image mr-4"/>
                        <div className='flex flex-col justify-center'>
                            <p className='text-base md:text-lg leading-36px whitespace-nowrap overflow-x-hidden'>
                                {cardDetails.title}
                            </p>
                            <p className='text-sm md:text-base leading-36px'>
                                {cardDetails.volume}
                            </p>
                        </div>

                    </div>
                </div>

                <div className="flex items-end">
                    <p className="text-lg text-lime-400 mb-1">{cardDetails.percent7h}</p>
                </div>

            </div>
        
        </Link>
    )
}

export default CollectionCard;