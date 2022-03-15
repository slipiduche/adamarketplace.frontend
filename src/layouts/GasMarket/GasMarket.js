
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomeCard1 from '../../components/Home/HomeCard1/HomeCard1'
import Sticker from "../../components/Sticker/Sticker";
import BlueButton from "../../components/BlueButton/BlueButton";

const GasMarket = () => {
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
        <div className="bg-darkslategray text-white">

            <div className="lg:container mx-auto px-4 pt-4 pb-32 relative">

                <div className="absolute top-5 left-3 lg:left-0">
                    <img src = {require('../../images/logo.png')} alt="logo" className="w-24"/>
                </div>

                <div className="flex justify-between mb-4 sm:mb-16">
                    <div className="flex flex-col justify-end mt-32">
                        <h2 className="text-lg font-bold text-gold mb-6">
                            Imagine and NFT Market Place thats gas free
                        </h2>
                        <p className="text-base max-w-[75ch] mb-6">                            
                            While we're proud to be the first and largest NFTmarketplace, we're even prouder to be the first
                            to provide cross-blockchain support, starting free marketplace on the Polygon blockchain.
                        </p>
                        <p className="text-base max-w-[75ch]">   
                            That's right! Buyers no longer have to pay ADAfees when making trades on OpenSea, and creators
                            can fully earn their way into crypto for the first time.
                        </p>
                    </div>
                    <img src = {require('../../images/gas_tank.png')} alt = 'gas tank' className='hidden md:block max-w-[320px]'/>
                </div>

                <div className="flex justify-center max-w-[940px] h-[432px] mx-auto relative mb-4 sm:mb-16">
                    <video autoPlay loop muted>
                         <source src = {require("../../images/video.mp4")} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                </div>

                <div className='flex flex-col items-center mb-8 text-center'>
                    <h3 className='text-base sm:text-lg font-bold mb-4'>Cross-blockchain resources</h3>
                    <p className='text-base sm:text-lg max-w-[75ch]'>
                        Learn more about the different blockchains to start creating and selling
                    </p>
                </div>


                <div className="mb-[150px]">
                    <Slider {...settings}>
                        
                        <HomeCard1 href = {'/collection/1'} background = {'transparent'} image = {require('../../images/Home/section2/card1_img.png')} title = {'Artists'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                    
                        <HomeCard1 href = {'/collection/1'} background = {'transparent'} image = {require('../../images/Home/section2/card2_img.png')} title = {'Mxse'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '} />
                    
                        <HomeCard1 href = {'/collection/1'} background = {'transparent'} image = {require('../../images/Home/section2/card3_img.png')} title = {'Tezuka Osama'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                    
                        <HomeCard1 href = {'/collection/1'} background = {'transparent'} image = {require('../../images/Home/section2/card1_img.png')} title = {'Artists'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                
                        <HomeCard1 href = {'/collection/1'} background = {'transparent'} image = {require('../../images/Home/section2/card2_img.png')} title = {'Mxse'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '} />
                
                        <HomeCard1 href = {'/collection/1'} background = {'transparent'} image = {require('../../images/Home/section2/card3_img.png')} title = {'Tezuka Osama'} description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                    
                    </Slider>

                </div>


                <div className='flex flex-col items-center mb-4 text-center mb-[136px]'>
                    <h3 className='text-base sm:text-lg font-bold mb-4'>Run your own crowd sale</h3>
                    <p className='text-base sm:text-lg max-w-[84ch]'>
                        Sell the items in your game to an initial user base of early adopters. Even sell off items in your own token.
                    </p>
                </div>

                <div className='flex flex-col items-center mb-4 text-center mb-[163px]'>
                    <h3 className='text-base sm:text-lg font-bold mb-4'>Digirack Developer Platform</h3>
                    <p className='text-base sm:text-lg max-w-[84ch]'>                        
                        As the first and largest marketplace for Non-Fungible Tokens
                        Non-Fungible Tokens - A token that is unique among peers. While Fungible tokens are equivalent 
                        and interchangeable (like Ether) Non-Fungible Tokens are unique and distinct, like deeds of 
                        ownership, or collectibles.
                        and Semi-Fungible Tokens, OpenSea provides a first-in-class developer platform consisting
                        of an API, SDK, and developer tutorials. Feel free to browse around and get acclimated with
                        developing smart contracts and interacting with NFT data.
                    </p>
                </div>

                <div className="max-w-[1200px] mx-auto mb-[91px]">
                    <div className='flex justify-center flex-wrap'>
                        <Sticker image={require('../../images/gasmarket/vector1.png')} title={'Sell Packs of Items'} descriptionClass={'font-bold !text-white'} description={`Sell packs of itemsInstead of individual items, you can finally sell packs of items to give more to your users.`} />
                        <Sticker image={require('../../images/gasmarket/vector2.png')} title={'Sell Packs of Items'} descriptionClass={'font-bold !text-white'} description={`Sell packs of itemsInstead of individual items, you can finally sell packs of items to give more to your users.`} />
                        <Sticker image={require('../../images/gasmarket/vector3.png')} title={'Sell Packs of Items'} descriptionClass={'font-bold !text-white'} description={`Sell packs of itemsInstead of individual items, you can finally sell packs of items to give more to your users.`} />
                    </div>
                </div>


                <div className="max-w-[1200px] mx-auto">
                    <h1 className="text-purple text-2xl md:text-3xl font-bold mb-8">
                        Sign up for The Tide, <span className="text-gold">Digirack</span> newsletter!
                    </h1>

                    <p className="text-base max-w-[75ch] mb-8">   
                        Sign up to receive our monthly newsletter, featuring updates from the team, 
                        new decentralized applications and NFT projects, and trends
                        we’re seeing in the space.
                    </p>

                    <div className="mb-[60px]">
                        <input className = "px-6 py-4 bg-transparent border-2 rounded-lg border-white w-full max-w-[500px]" placeholder="Enter your Email / Phone Number" type="text"/>
                    </div>

                    <div>
                        <BlueButton text = 'Sign Up' onClick = {()=>{console.log('signed up')}} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default GasMarket;