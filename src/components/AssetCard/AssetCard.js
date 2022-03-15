import { Link } from "react-router-dom";

const AssetCard = ({href, collection, image, title, text, price, lastprice, likes}) => {
    return(
        <Link to = {href} className="flex flex-col max-w-[412px] rounded-[30px] border-[3px] border-gray-300">
            <img src = {image} alt = "assetcard" className="w-full"/>
            <div className="p-4 flex w-full justify-between">
                <div className="flex flex-col">
                    <p className="text-base lg:text-lg font-semibold mb-4">{collection}</p>
                    <p className="text-base lg:text-lg font-semibold mb-4">{title}</p>
                    <p className="text-base lg:text-lg font-semibold mb-4">{text}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-base lg:text-lg font-semibold mb-4">Price</p>
                    <div className="flex">
                        <img src = {require('../../images/collectionitem/coin.png')} alt = "coin" className="w-5 h-5 mr-1"/>
                        <p className="text-base lg:text-lg font-semibold mb-4">{price}</p>
                    </div>
                    <div className="flex">
                        <img src = {require('../../images/collectionitem/coin.png')} alt = "coin" className="w-5 h-5 mr-1"/>
                        <p className="text-base lg:text-lg font-semibold mb-4">Last {lastprice}</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500 w-full p-4">
                <div className="flex justify-between w-full">
                    <img src = {require('../../images/collectionitem/coin.png')} alt = "coin" className="w-5 h-5 mr-1"/>
                    <div className="flex">
                        <img src = {require('../../images/collectionitem/heart.png')} alt = "heart" className="w-5 h-5 mr-1"/>
                        <p className="text-base lg:text-lg font-semibold mb-4">{likes}</p>
                    </div>
                </div>
            </div>  

        </Link>
    )
}

export default AssetCard;