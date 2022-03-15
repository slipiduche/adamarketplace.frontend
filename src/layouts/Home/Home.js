
import PurpleButton from '../../components/PurpleButton/PurpleButton';
import GrayButton from '../../components/GrayButton/GrayButton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {topcollection} from '../../nftcollections';

import './Home.css'
import HomeCard1 from '../../components/Home/HomeCard1/HomeCard1';
import CollectionCard from '../../components/Home/CollectionCard/CollectionCard';
import BlueButton from '../../components/BlueButton/BlueButton';
import PaintingCard from '../../components/Home/PaintingCard/PaintingCard';
import Sticker from '../../components/Sticker/Sticker';
import ResourceCard from '../../components/Home/ResourceCard/ResourceCard';
import CategoryCard1 from '../../components/CategoryCard1/CategoryCard1';
import { Link } from 'react-router-dom';

const Home = () => {

    const settings = {
        dots: true,
        className: "center",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
        ]
      };

    return(
        
        <div className="home_container ff_poppins">
            
            <div className="lg:container mx-auto px-4 pb-20 lg:pb-32 pt-10 lg:pt-32">
                <div className="flex flex-wrap justify-between lg:justify-center">
                    <div className='md:w-49p lg:w-1/2 flex flex-col justify-center'>
                        <h1 className='text_shadow_1 leading-60px md:leading-60px 2xl:leading-84px text-4xl sm:text-50px md:text-4xl lg:text-50px 2xl:text-7xl font-bold max-w-490px 2xl:max-w-565px'>
                            Discover , Collect and sell extraordinary NFTs
                        </h1>
                        <p className='max-w-490px text-20px 2xl:text-2xl leading-36px text-slate-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
                        </p>
                        <div className='flex flex-row mt-8'>
                            <PurpleButton text = {'Explore Now'} className={'mr-4 2xl:text-2xl'} href = '/collections/all' />
                            <GrayButton text = {'Create'} className={'2xl:text-2xl'} href = "/connectwallet" />
                        </div>
                        <div className='flex flex-row justify-between mt-8 w-100 max-w-490px '>
                            <div className='flex flex-col justify-center'>
                                <p className='text_shadow_1 text-2xl lg:text-3xl font-bold leading-60px'>
                                    37k+
                                </p>
                                <p className='text-base sm:text-20px leading-36px text-slate-400'>
                                    Artworks
                                </p>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='text_shadow_1 text-2xl lg:text-3xl font-bold leading-60px'>
                                    20k+
                                </p>
                                <p className='text-base sm:text-20px leading-36px text-slate-400'>
                                    Artists
                                </p>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='text_shadow_1 text-2xl lg:text-3xl font-bold leading-60px'>
                                    99k+
                                </p>
                                <p className='text-base sm:text-20px leading-36px text-slate-400'>
                                    Aucations
                                </p>
                            </div>
                        </div>

                        <Link to = '/' className='scale_1-01 flex flex-row justify-start items-center mt-10 sm:mt-16 translate-x-1 sm:translate-x-5 md:translate-x-10'>
                            <div className='play_image_container mr-5 w-16 md:w-20'>
                                <img src={require('../../images/Home/play.png')} alt="play"/>
                            </div>
                            <p className='text-2xl lg:text-3xl font-bold leading-60px'>
                                Learn More About Us
                            </p>
                        </Link>

                    </div>

                    <div className='hidden md:block md:w-49p lg:w-1/2'>
                        <div className='cover_image_container'>
                            <img src={"https://images4.alphacoders.com/120/1203503.jpg"} alt="cover" className='w-full rounded-[50px] box_shadow_1'/>
                        </div>
                    </div>
                </div>


            </div>


            <div className="lg:container mx-auto px-4 pb-32">
            
                <Slider {...settings}>
                    
                    <HomeCard1 href = {'/collection/1'} background = {'rgb(0 78 24)'} image = {require('../../images/Home/section2/card1_img.png')} title = {'Artists'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                
                    <HomeCard1 href = {'/collection/1'} background = {'rgb(149 18 18)'} image = {require('../../images/Home/section2/card2_img.png')} title = {'Artists'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}/>
                
                    <HomeCard1 href = {'/collection/1'} background = {'rgb(10 40 147)'} image = {require('../../images/Home/section2/card3_img.png')} title = {'Artists'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                
                    <HomeCard1 href = {'/collection/1'} background = {'rgb(0 78 24)'} image = {require('../../images/Home/section2/card1_img.png')} title = {'Artists'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
            
                    <HomeCard1 href = {'/collection/1'} background = {'rgb(149 18 18)'} image = {require('../../images/Home/section2/card2_img.png')} title = {'Artists'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}/>
            
                    <HomeCard1 href = {'/collection/1'} background = {'rgb(10 40 147)'} image = {require('../../images/Home/section2/card3_img.png')} title = {'Artists'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                
                </Slider>


            </div>


            <div className="lg:container mx-auto px-4 pb-32">

                <h1 className='text-2xl lg:text-3xl font-bold text-center mt-10 lg:mt-16 mb-16 lg:mb-32'>Top Collection Over <span className='text-red-700'>last 7 Days</span></h1>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-1 md:gap-y-5 mb-8 lg:mb-12'>
                    {topcollection.map((collection, index) => {
                        return <CollectionCard href = {`/collection/${collection.id}`} number = {index+1} cardDetails={collection} />
                    })}
                    
                    
                </div>

                <div className='w-full flex justify-center'>
                    <BlueButton text = {'Go to Rankings'} className={'mt-8 lg:mt-16'} href = {'/rankingstats/'} />
                </div>


            </div>


            <div className="lg:container mx-auto px-4 pb-32">
                <div className='flex flex-col items-center justify-center mb-4'>
                    <h1 className='text-3xl lg:text-4xl font-bold leading-60px text-center lg:mt-10 mb-4'>Trading in All Categories</h1>
                    <p className='max-w-490px text-20px 2xl:text-2xl leading-36px text-slate-400 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <div className='flex justify-center flex-wrap'>
                    <PaintingCard href = {`collection/1`} image = {require('../../images/Home/paintingCards/paintingcard1.png')} title = {'Yellow Painting'} tag = {'@Johny'} bid = {'0.005 ETH'} background={'rgba(255, 255, 255, 0.1)'}/>
                    <PaintingCard href = {`collection/1`} image = {require('../../images/Home/paintingCards/paintingcard2.png')} title = {'Yellow Painting'} tag = {'@Johny'} bid = {'0.005 ETH'} background={'#0C153B'}/>
                    <PaintingCard href = {`collection/1`} image = {require('../../images/Home/paintingCards/paintingcard3.png')} title = {'Yellow Painting'} tag = {'@Johny'} bid = {'0.005 ETH'} background={'rgba(255, 255, 255, 0.1)'} button = {'gray'}/>
                </div>


            </div>  


            <div className="lg:container mx-auto px-4 pb-32">

                <h1 className='text-2xl lg:text-3xl font-bold leading-60px text-center mt-4 lg:mt-16 mb-16'>Create and Sell Your NFTs</h1>
                
                <div className='grid grid-cols-2 md:grid-cols-4 mb-12 gap-y-10'>
                    <Sticker image={require('../../images/Home/stickers/collection.png')} title={'Set up your Wallet'} description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at itlayoutThe point of using Lorem Ipsum is that it has a more'} />
                    <Sticker image={require('../../images/Home/stickers/contactlist.png')} title={'Create your Collection'} description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at itlayoutThe point of using Lorem Ipsum is that it has a more'} />
                    <Sticker image={require('../../images/Home/stickers/nopictures.png')} title={'Add your NFTs'} description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at itlayoutThe point of using Lorem Ipsum is that it has a more'} />
                    <Sticker image={require('../../images/Home/stickers/wallet.png')} title={'List them for Sale'} description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at itlayoutThe point of using Lorem Ipsum is that it has a more'} />
                </div>

            </div>


            <div className="lg:container mx-auto px-4 pb-32">

                <h1 className='text-2xl lg:text-3xl font-bold leading-60px text-center mt-0 mb-16'>Resources For Getting Started</h1>
                
                <div className='flex justify-center flex-wrap'>
                    <ResourceCard title={'John Wick'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image = {require('../../images/Home/resourceCards/resourcecard1.png')} profileImage={require('../../images/Home/resourceCards/person1.png')}/>
                    <ResourceCard title={'John Wick'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image = {require('../../images/Home/resourceCards/resourcecard2.png')} profileImage={require('../../images/Home/resourceCards/person2.png')} followed = {true}/>
                    <ResourceCard title={'John Wick'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image = {require('../../images/Home/resourceCards/resourcecard3.png')} profileImage={require('../../images/Home/resourceCards/person3.png')}/>

                </div>


            </div>

            <div className="lg:container mx-auto px-4 pb-32">

                <h1 className='text-2xl lg:text-3xl font-bold leading-60px text-center lg:mt-8 mb-16'>Browse By Category</h1>
                
                <div className='grid grid-cols-2 md:grid-cols-3 max-w-1300px mx-auto'>
                    <CategoryCard1 title = {'Art'} image = {require('../../images/Home/categoryCards/category1.png')} href = {'/collections/art'} />
                    <CategoryCard1 title = {'Collectibles'} image = {require('../../images/Home/categoryCards/category2.png')} href = {'/collections/collectibles'} />
                    <CategoryCard1 title = {'Domain Name'} image = {require('../../images/Home/categoryCards/category3.png')} href = {'/collections/domainnames'} />
                    <CategoryCard1 title = {'Music'} image = {require('../../images/Home/categoryCards/category4.png')} href = {'/collections/music'} />
                    <CategoryCard1 title = {'Photography'} image = {require('../../images/Home/categoryCards/category5.png')} href = {'/collections/photography'} />
                    <CategoryCard1 title = {'Sports'} image = {require('../../images/Home/categoryCards/category6.png')} href = {'/collections/sports'} />
                </div>


            </div>


            <div className="lg:container mx-auto px-4 pb-32 ">

                <div className='flex flex-col justify-center items-center max-w-[1197px] mx-auto rounded-lg px-5 py-12' style={{"background": "linear-gradient(214.02deg, #323E4E 6.04%, #671AE4 92.95%)"}}>
                    <h1 className='text-3xl lg:text-4xl font-bold leading-60px lg:leading-[60px] text-center mb-4 max-w-[18ch]'>Get Ready to Collect Our NFT</h1>
                    <GrayButton text={'Get Started'} href = '/' className='w-fit'/>
                </div>

            </div>
            

        </div>
    )
}

export default Home;