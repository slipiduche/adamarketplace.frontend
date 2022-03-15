
import { Link } from 'react-router-dom';
import {activitystats} from '../../activitystatsdata';

const ActivityStats = () => {

    const handleButtonClick = (e, index) => {
        e.preventDefault();
        if(e.target.getAttribute("mode") === "more"){
            e.target.setAttribute("mode", "less");
            e.target.innerHTML = "Less -";
            document.getElementById(`activity_card_details_${index}`).style.display = "flex";
        }
        else{
            e.target.setAttribute("mode", "more");
            e.target.innerHTML = "More +";
            document.getElementById(`activity_card_details_${index}`).style.display = "none";
        }
    }

    return(
        <div className = 'text-white' style={{background: "#131129"}}>
            <div className="lg:container mx-auto px-4 pb-32 pt-6">
                <div className='flex justify-between max-w-[250px] w-full mb-6'>
                    <div className='flex justify-between max-w-[110px] w-full text-lg px-5 py-3 rounded-lg' style={{background: "#759BD3"}}>
                        <p>Sales</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                    <button className='bg-transparent'>
                        Clear All
                    </button>
                </div>

                <div className="hidden lg:grid lg:grid-cols-custom2 gap-4 border-b-4 border-t-4 border-gray-400 mb-4 py-[30px]">
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        Item
                    </h3>
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        Price
                    </h3>
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        Quantity
                    </h3>
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        From
                    </h3>
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-20px 2xl:text-2xl leading-36px text-white text-bold text-center '>
                        To
                    </h3>
                </div>

                {activitystats.map((item, index) => {
                    return(
                        <Link to = {`/collection/${item.id}`}>
                            <div className="hidden lg:grid lg:grid-cols-custom2 gap-x-2 md:gap-x-4 border-b-[1px] border-slate-500 py-6 px-3 collection_card_anim"> 
                                <div className="flex justify-between items-center w-full justify-self-center self-center">
                                    <p className='hidden sm:flex text-xs sm:text-sm md:text-base lg:text-lg leading-36px justify-self-center self-center text-center mr-2 md:mr-4  flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart mr-2" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                        </svg>
                                        <span>Sale</span>
                                    </p>
                                    <img src = {item.image} alt = 'collectioncard' className="w-1/2 md:w-full max-w-[50px] md:max-w-100px collection_card_image mr-2 md:mr-4"/>
                                    <div className='flex flex-col'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg md:leading-36px whitespace-nowrap overflow-x-hidden'>
                                            {item.title}
                                        </p>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap overflow-x-hidden'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='text-xs sm:text-sm md:text-base lg:text-lg justify-self-center self-center'>
                                        {item.ethprice}
                                    </p>
                                    <p className='text-[0.6rem] sm:text-xs md:text-sm lg:text-base text-slate-400 justify-self-center self-center'>
                                        ${item.usdprice}
                                    </p>
                                </div>
                                <p className='text-xs sm:text-sm md:text-base lg:text-lg justify-self-center self-center'>
                                    {item.quantity}
                                </p>
                                <p className='text-xs sm:text-sm md:text-base lg:text-lg text-green-500 justify-self-center self-center'>
                                    {item.from}
                                </p>
                                <p className='text-xs sm:text-sm md:text-base lg:text-lg text-green-500  justify-self-center self-center'>
                                    {item.to}
                                </p>
                                <p className='text-xs sm:text-sm md:text-base lg:text-lg text-green-500 justify-self-center self-center'>
                                    {item.time}
                                </p>
                            </div>

                            <div className='block lg:hidden border-b-[1px] pt-6 border-slate-500 px-3 collection_card_anim'>

                                <div className='flex justify-between w-full pb-6'>
                                    <div className="flex lg:justify-center items-center max-w-[200px] w-full">
                                        <img src = {item.image} alt = 'collectioncard' className="w-1/2 md:w-full max-w-[50px] md:max-w-100px collection_card_image mr-2 md:mr-4"/>
                                        <div className='flex flex-col items-start'>
                                            <p className='text-xs sm:text-sm md:text-base lg:text-lg md:leading-36px whitespace-nowrap overflow-x-hidden'>
                                                {item.title}
                                            </p>
                                            <p className='text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap overflow-x-hidden'>
                                                {item.description}
                                            </p>
                                            <button className='text-sm text-slate-500' mode = "more" onClick = {(e) => handleButtonClick(e, index)}>
                                                More +
                                            </button>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-center'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg justify-self-center self-center text-slate-400'>
                                            Sale
                                        </p>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg justify-self-center self-center'>
                                            {item.ethprice}
                                        </p>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg justify-self-center self-center text-slate-400'>
                                            {item.time}
                                        </p> 
                                    </div>

                                </div>

                                <div className='hidden items-center justify-between mx-5 pt-4 pb-4 border-t-[1px] border-slate-500' id = {`activity_card_details_${index}`}>
                                    
                                    <div className='flex flex-col'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-slate-400'>
                                            USD Price
                                        </p>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg justify-self-center self-center'>
                                            {item.usdprice}
                                        </p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-slate-400'>
                                            Quantity
                                        </p>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg '>
                                            {item.quantity}
                                        </p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-slate-400'>
                                            From
                                        </p>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-green-500'>
                                            {item.from}
                                        </p>
                                    </div>
                                    
                                    <div className='flex flex-col'>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg  text-slate-400'>
                                            To
                                        </p>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-green-500'>
                                            {item.to}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </Link>
                    )
                })}


            </div>
        </div>
    )

}

export default ActivityStats;