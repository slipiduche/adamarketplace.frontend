
import { Link } from 'react-router-dom';
import {topcollection} from '../../nftcollections';

const RankingStats = () => {


    const handleButtonClick = (e, index) => {
        console.log(index);
        e.preventDefault();
        if(e.target.getAttribute("mode") === "more"){
            e.target.setAttribute("mode", "less");
            e.target.innerHTML = "Less -";
            document.getElementById(`ranking_card_details_${index}`).style.display = "flex";
        }
        else{
            e.target.setAttribute("mode", "more");
            e.target.innerHTML = "More +";
            document.getElementById(`ranking_card_details_${index}`).style.display = "none";
        }
    }

    return(
        <div className = 'text-white' style={{background: "#131129"}}>
            <div className="lg:container mx-auto px-4 pb-32">
                <div className='flex flex-col items-center justify-center mb-[105px]'>
                    <h1 className='text-3xl lg:text-4xl font-bold leading-60px text-center mt-16 mb-4'>Top NFTs</h1>
                    <p className='max-w-490px text-20px 2xl:text-2xl leading-36px text-slate-400 text-center mb-[37px]'>
                        Top NFts on us ,Ranked by volume, Floor price and other
                    </p>

                    <div className="flex justify-center flex-wrap max-w-[600px] w-full">

                        <select className="px-10 py-4 bg-transparent rounded-lg border-1 border-white mr-4 mb-4">
                            <option className = 'text-black' value="7days">Last 7 Days</option>
                            <option className = 'text-black' value="14days">Last 14 Days</option>
                            <option className = 'text-black' value="21days">Last 21 Days</option>
                        </select>

                        <select className="px-10 py-4 bg-transparent rounded-lg border-1 border-white mr-4 mb-4">
                            <option className = 'text-black' value="allcategories">All Categories</option>
                            <option className = 'text-black' value="domainname">Domain Name</option>
                            <option className = 'text-black' value="photography">Photography</option>
                        </select>

                        <select className="px-10 py-4 bg-transparent rounded-lg border-1 border-white mb-4">
                            <option className = 'text-black' value="allchains">All Chains</option>
                            <option className = 'text-black' value="offchain">Off-Chain</option>
                            <option className = 'text-black' value="onchains">On-Chain</option>
                        </select>
                    </div>

                </div>


                <div className="hidden lg:grid grid-cols-custom1 gap-4 border-b-[1px] border-gray-300 mb-4 pb-4">
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        Collection
                    </h3>
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        Volume
                    </h3>
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        24h%
                    </h3>
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        7h%
                    </h3>
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl text-white text-bold text-center '>
                        Floor Price
                    </h3>
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        Owners
                    </h3>
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        Items
                    </h3>
                </div>

                {topcollection.map((item, index) => {
                    return(
                        <>
        
                        <Link to = {`/collection/${item.id}`} className=''>
                            
                            <div className="hidden lg:grid lg:grid-cols-custom1 py-4 border-b-[1px] border-slate-500 gap-x-2 md:gap-x-4 collection_card_anim">

                                <div className="flex items-center max-w-[100px] md:max-w-[200px] w-full justify-self-center self-center">
                                    <p className='text-20px 2xl:text-2xl leading-36px text-white text-bold text-center mr-2'>
                                        {index}
                                    </p>
                                    <img src = {item.image} alt = 'collectioncard' className="w-1/2 md:w-full max-w-[50px] collection_card_image mr-2 md:mr-4"/>
                                    <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-36px whitespace-nowrap overflow-x-hidden'>
                                        {item.title}
                                    </p>
                                </div>
                                
                                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                    {item.volume}
                                </p>

                                {item.percent24h.includes('+') ? (
                                    <p className='text-green-400 text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                        {item.percent24h}
                                    </p>
                                ):(
                                    <p className='text-rose-500 text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                        {item.percent24h}
                                    </p>
                                )} 

                                {item.percent7h.includes('+') ? (
                                    <p className='text-green-400 text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                        {item.percent7h}
                                    </p>
                                ):(
                                    <p className='text-rose-500 text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                        {item.percent7h}
                                    </p>
                                )}

                                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                    {item.floorPrice}
                                </p>
                                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                    {item.owners}
                                </p>
                                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                    {item.items}
                                </p>

                            </div>


                            <div className='block lg:hidden border-b-[1px] pt-6 border-slate-500 collection_card_anim px-3'>

                                <div className='flex justify-between w-full pb-6'>
                                    
                                    <div className="flex lg:justify-center items-center max-w-[200px] w-full">
                                        <p className='text-20px 2xl:text-2xl leading-36px text-white text-bold text-center mr-2'>
                                            {index}
                                        </p>
                                        <img src = {item.image} alt = 'collectioncard' className="w-1/2 md:w-full max-w-[50px] collection_card_image mr-2 md:mr-4"/>
                                        <div className='flex flex-col items-start'> 
                                            <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-36px whitespace-nowrap overflow-x-hidden'>
                                                {item.title}
                                            </p>
                                            <button className='text-sm text-slate-500' mode = "more" onClick = {(e) => handleButtonClick(e, index)}>
                                                More +
                                            </button>
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                            {item.volume}
                                        </p>
                                        {item.percent24h.includes('+') ? (
                                            <p className='text-green-400 text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                                {item.percent24h}
                                            </p>
                                        ):(
                                            <p className='text-rose-500 text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center'>
                                                {item.percent24h}
                                            </p>
                                        )} 
                                    </div>

                                </div>

                                <div className='hidden items-center justify-between mx-5 pt-4 pb-4 border-t-[1px] border-slate-500' id = {`ranking_card_details_${index}`}>
                                    <div className='flex flex-col'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-slate-400'>
                                            7h%
                                        </p>
                                        {item.percent7h.includes('+') ? (
                                            <p className='text-green-400 text-xs sm:text-sm md:text-base lg:text-lg'>
                                                {item.percent7h}
                                            </p>
                                        ):(
                                            <p className='text-rose-500 text-xs sm:text-sm md:text-base lg:text-lg'>
                                                {item.percent7h}
                                            </p>
                                        )}
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-slate-400'>
                                            Floor Price
                                        </p>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg '>
                                            {item.floorPrice}
                                        </p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-slate-400'>
                                            Owners
                                        </p>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg '>
                                            {item.owners}
                                        </p>
                                    </div>
                                    
                                    <div className='flex flex-col'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg  text-slate-400'>
                                            Items
                                        </p>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg '>
                                            {item.items}
                                        </p>
                                    </div>

                                </div>



                            </div>



                        </Link>
                        </>

                    )


                })}

            </div>
        </div>
    )

}

export default RankingStats;