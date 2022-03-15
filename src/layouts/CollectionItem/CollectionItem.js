
import AssetCard from '../../components/AssetCard/AssetCard';
import './CollectionItem.css';

const CollectionItem = () => {
    return(
        <div className='bg-white'>

            <div className="h-[35vh] collection_item_container">
            </div>

            <div className="lg:container mx-auto px-4">

                <div className="flex justify-center w-full">
                    <div className="w-full max-w-[120px] sm:max-w-[150px] lg:max-w-[200px] 2xl:max-w-[302px] relative -top-[60px] md:-top-[75px] lg:-top-[100px] 2xl:-top-[151px] -mb-[60px] md:-mb-[75px] lg:-mb-[100px] 2xl:-mb-[151px]">
                        <img src = {require('../../images/collectionitem/profileimage.png')} alt = 'profile' className = 'w-full h-full object-cover rounded-full'/>
                    </div>
                </div>

                <div className='flex flex-col items-center w-full mt-4'>
                    
                    <h1 className='text-center font-bold text-xl sm:text-2xl lg:text-3xl max-w-[27ch] mb-4'>From the Fragments of Tezuka Osamu - Mosaic Art</h1>
                    <p className='text-center text-base sm:text-lg lg:text-xl max-w-[30ch]'>Created By <span className='text-gold'>FromtheFragmentsofTez...</span></p>
                    
                    <div className='grid grid-cols-2 md:grid-cols-4 mt-16 rounded-[30px] border-2 border-gray-400'>

                        <div className='flex flex-col p-5 border-b-2 md:border-b-0 border-r-2 border-gray-400'>
                            <p className='text-center sm:text-lg lg:text-xl max-w-[30ch]'>10</p>
                            <p className='text-center text-gray-500 text-base sm:text-lg lg:text-xl max-w-[30ch]'>Items</p>
                        </div>
                        <div className='flex flex-col p-5 border-b-2 md:border-b-0 md:border-r-2 border-gray-400'>
                            <p className='text-center text-base sm:text-lg lg:text-xl max-w-[30ch]'>4</p>
                            <p className='text-center text-gray-500 text-base sm:text-lg lg:text-xl max-w-[30ch]'>Owners</p>
                        </div>
                        <div className='flex flex-col p-5 border-r-2 border-gray-400'>
                            <div className='flex justify-center'>
                                <img src = {require('../../images/collectionitem/coin.png')} alt = 'coin' className = 'w-5 h-5 mr-1 object-cover rounded-full'/>
                                <p className='text-center text-base sm:text-lg lg:text-xl max-w-[30ch]'>100000</p>
                            </div>
                            <p className='text-center text-gray-500 text-base sm:text-lg lg:text-xl max-w-[30ch]'>Floor Price</p>
                        </div>
                        <div className='flex flex-col p-5'>
                            <div className='flex justify-center'>
                                <img src = {require('../../images/collectionitem/coin.png')} alt = 'coin' className = 'w-5 h-5 mr-1 object-cover rounded-full'/>
                                <p className='text-center text-base sm:text-lg lg:text-xl max-w-[30ch]'>152</p>
                            </div>
                            <p className='text-center text-gray-500 text-base sm:text-lg lg:text-xl max-w-[30ch]'>Volume Traded</p>
                        </div>

                    </div>


                    <p className='text-center font-medium text-base sm:text-lg lg:text-xl max-w-[870px] my-[26px]'>[From the Fragments of Tezuka Osamu]</p>
                    <p className='text-center font-medium text-base sm:text-lg max-w-[870px] mb-[26px]'>
                        Tezuka Osamu was a pioneer who established the base of manga now known as one of the most influential pop cultures.So far manga has contributed to the development of cultures all over the world, and infiltrated into a wide range of industries as well.
                    </p>
                    <p className='text-center font-medium text-base sm:text-lg max-w-[870px] mb-[26px]'>
                        Tezuka Osamu was a pioneer who established the base of manga now known as one of the most influential pop cultures.So far manga has contributed to the development of cultures all over the world, and infiltrated into a wide range of industries as well.
                    </p>

                
                </div>

            </div>

            <div className='py-8 border-t-2 border-gray-400 mt-8'>

                <div className="lg:container mx-auto px-4">
                    <div className='max-w-[1300px] mx-auto'>
                        <div className='flex justify-center flex-wrap lg:grid lg:grid-cols-3 gap-y-4 lg:gap-y-10 gap-x-4 lg:gap-x-10'>
                            <AssetCard href = '/' collection={"Trx hdxsx"} title = "Arstro boy" text = "uyv" price = "900" lastprice = "120" likes = "120" image = {require('../../images/collectionitem/assetcard1.png')}/>
                            <AssetCard href = '/' collection={"Trx hdxsx"} title = "Arstro boy" text = "uyv" price = "900" lastprice = "120" likes = "120" image = {require('../../images/collectionitem/assetcard2.png')}/>
                            <AssetCard href = '/' collection={"Trx hdxsx"} title = "Arstro boy" text = "uyv" price = "900" lastprice = "120" likes = "120" image = {require('../../images/collectionitem/assetcard3.png')}/>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>        
    )
}

export default CollectionItem;