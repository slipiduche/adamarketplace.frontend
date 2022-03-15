import { useState } from "react";
import BlueButton from "../../components/BlueButton/BlueButton";
import CategoryCard2 from "../../components/CategoryCard2/CategoryCard2";
import { virtualworlds } from "../../nftcollections";

const VirtualWorlds = () => {

    const [show, setShow] = useState(false);

    return(
        <div className="bg-white"> 
            <div className="lg:container mx-auto px-4">
                <div className="mb-[84px] w-full h-[220px] max-h-full max-w-full overflow-hidden flex justify-center items-center relative collection_cover">
                    <img src = {require('../../images/collections/virtualworldscover.png')} alt = 'virtual worlds banner' className="h-full w-full object-cover" />
                </div>

                <div className='flex flex-col items-center justify-center mb-[20px]'>
                    <h1 className='text-3xl lg:text-4xl font-[600] leading-60px text-center mb-[35px]'>Explore Virtual Worlds</h1>
                    <div className={`transition_0-1s ${show ? 'max-h-[1000px] mb-10' : 'max-h-[110px] text_gray_mask mb-2'}`} >
                        <p className='text-base 2xl:text-lg leading-[27px] text-center max-w-[78ch] mb-[35px] text-gray-500'>
                                An online community of makers, developers, and traders is pushing the art world into new territory. 
                                It all started with CryptoPunks, a set of 10,000 randomly generated punks that proved demand for
                                the digital ownership of non-physical items and collectibles in 2017,
                                and the market has evolved rapidly ever since.
                        </p>
                        <p className='text-base 2xl:text-lg leading-[27px] text-center max-w-[78ch] text-gray-500'>
                            As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers
                            and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and
                            currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem,
                            the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case.
                            From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on Digirack.
                        </p>   
                    </div>  
                    <div className="flex justify-center">
                        {!show ? (
                            <button onClick={()=>setShow(true)}>
                                <i class="fas fa-chevron-down text-gray-500"></i>
                            </button>
                        ):(
                            <button onClick={()=>setShow(false)}>
                                <i class="fas fa-chevron-up text-gray-500"></i>
                            </button>
                        )}
                        
                        
                    </div>
                     
                </div>

            </div>

            <div className="border-t-[1px] border-gray-300">
                <div className="lg:container mx-auto px-4">
                    <h1 className='text-[20px] lg:text-[24px] font-[600] text-center py-8 my-3'>Trending Collections in Virtual Worlds</h1>
                </div>
            </div>

            <div style={{"background" : "white"}}> 
                <div className="lg:container mx-auto px-4 pb-32 pt-[37px]">
                    <div className=" mx-auto">
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10"> */}
                        <div className="flex justify-center flex-wrap">
                            {virtualworlds.map((item) => {
                                return(
                                    <CategoryCard2 href = {`/collection/${item.id}`} title = {item.title} image = {item.image} profileImage = {item.profileimage} description = {item.description} by = {item.by}/>
                                )
                            })}
                        </div>

                        <div className="w-full flex justify-center">
                            <BlueButton text = "See All" href = "/" className={"text-white mt-[100px] px-24 py-6 text-[30px]"}/>
                        </div>

                    </div>
                </div>
            </div>
                    

        </div>
    )
}


export default VirtualWorlds;