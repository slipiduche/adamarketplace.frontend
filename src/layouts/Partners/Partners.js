
import BlogCard from '../../components/BlogCard/BlogCard';
import Sticker from '../../components/Sticker/Sticker';
import BlueButton from '../../components/BlueButton/BlueButton';

const Partners = () => {
    return(

        <div className="bg-darkslategray text-white tracking-wide">
            <div className="lg:container mx-auto px-4 pt-4 pb-32 relative">

                <div className="absolute top-5 left-3 lg:left-0">
                    <img src = {require('../../images/logo.png')} alt="logo" className="w-24"/>
                </div>

                <div className="flex justify-between mb-[63px]">
                    <div className="flex flex-col justify-center mt-28">
                        <h2 className="text-lg font-bold text-gold mb-6">
                            Welcome to the world’s largest NFT marketplace.
                        </h2>
                        <p className="text-lg font-bold max-w-[75ch] mb-6">                            
                            At <span className='text-gold'>DIGIRACK</span>, we're excited about a brand new type of digital good
                            often referred to as a non-fungible token, or NFT. NFTs have
                            exciting new properties: they’re unique, provably scarce,
                            liquid, and usable across multiple applications.
                        </p>
                        <p className="text-lg font-bold max-w-[75ch]">   
                            We’re proud to be the first and largest marketplace for user-owned 
                            digital goods, with everything you need to buy and sell them in one
                            place. Learn more about us.
                        </p>
                    </div>
                    <img src = {require('../../images/partners/hero.png')} alt = 'hero' className='hidden md:block max-w-[396px] mt-16'/>
                </div>


                <div className='flex flex-col items-center mb-[156px] text-center'>
                    <h3 className='text-lg font-bold text-gold mb-4'>Why partner with DIGIRACK</h3>
                    <p className='text-lg font-bold max-w-[75ch]'>                    
                        While we take pride in being the first and largest marketplace and in our robust
                        feature set, we also help our partners succeed with the following...
                    </p>
                </div>

                <div className="max-w-[1280px] mx-auto mb-[160px]">
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-y-4'>
                        <Sticker image={require('../../images/partners/sticker1.png')} title = {'Generate Revenue'} titleClass={'text-gold text-bold'} descriptionClass={'font-bold !text-white'} description={`With millions in transacwe’ll help you generate revenueon our platform ⁠from direct sales tosecondary sales`} />
                        <Sticker image={require('../../images/partners/sticker2.png')} title={'Reach Millions'} titleClass={'text-gold text-bold'} descriptionClass={'font-bold !text-white'} description={`With millions in transacwe’ll help you generate revenueon our platform ⁠from direct sales tosecondary sales`} />
                        <Sticker image={require('../../images/partners/sticker3.png')} title={'Spend Less'} titleClass={'text-gold text-bold'} descriptionClass={'font-bold !text-white'} description={`With millions in transacwe’ll help you generate revenueon our platform ⁠from direct sales tosecondary sales`} />
                        <Sticker image={require('../../images/partners/sticker4.png')} title={'Market'} titleClass={'text-gold text-bold'} descriptionClass={'font-bold !text-white'} description={`With millions in transacwe’ll help you generate revenueon our platform ⁠from direct sales tosecondary sales`} />
                        <Sticker image={require('../../images/partners/sticker5.png')} title={'Category'} titleClass={'text-gold text-bold'} descriptionClass={'font-bold !text-white'} description={`With millions in transacwe’ll help you generate revenueon our platform ⁠from direct sales tosecondary sales`} />
                        <Sticker image={require('../../images/partners/sticker6.png')} title={'Feature'} titleClass={'text-gold text-bold'} descriptionClass={'font-bold !text-white'} description={`With millions in transacwe’ll help you generate revenueon our platform ⁠from direct sales tosecondary sales`} />
                    </div>
                </div>


                <div className="max-w-[1400px] mx-auto mb-[70px]">
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-y-12'>
                        <BlogCard href = "/" title = {'Satureday Night Live'} background={'white'} image = {require('../../images/partners/partnercard1.png')} description={`Important updates for listing and delisting your NFTs`} />
                        <BlogCard href = "/" title = {'Satureday Night Live'} background={'white'} image = {require('../../images/partners/partnercard2.png')} description={`Important updates for listing and delisting your NFTs`} />
                        <BlogCard href = "/" title = {'Satureday Night Live'} background={'white'} image = {require('../../images/partners/partnercard3.png')} description={`Important updates for listing and delisting your NFTs`} />
                        <BlogCard href = "/" title = {'Satureday Night Live'} background={'white'} image = {require('../../images/partners/partnercard4.png')} description={`Important updates for listing and delisting your NFTs`} />
                        <BlogCard href = "/" title = {'Satureday Night Live'} background={'white'} image = {require('../../images/partners/partnercard5.png')} description={`Important updates for listing and delisting your NFTs`} />
                        <BlogCard href = "/" title = {'Satureday Night Live'} background={'white'} image = {require('../../images/partners/partnercard6.png')} description={`Important updates for listing and delisting your NFTs`} />
                        <BlogCard href = "/" title = {'Satureday Night Live'} background={'white'} image = {require('../../images/partners/partnercard7.png')} description={`Important updates for listing and delisting your NFTs`} />
                        <BlogCard href = "/" title = {'Satureday Night Live'} background={'white'} image = {require('../../images/partners/partnercard8.png')} description={`Important updates for listing and delisting your NFTs`} />
                        <BlogCard href = "/" title = {'Satureday Night Live'} background={'white'} image = {require('../../images/partners/partnercard9.png')} description={`Important updates for listing and delisting your NFTs`} />
                    </div>
                </div>


                <div className='flex flex-col items-center mb-[70px] text-center'>
                    <p className='text-lg lg:text-xl font-bold text-slate-400 mb-4'>FAQs</p>
                    <p className='text-lg lg:text-xl font-bold text-slate-400 max-w-[75ch]'>                    
                        For more FAQs visit our partnership page in our help center
                    </p>
                </div>

                
                <div className="flex justify-between items-center mb-[70px]">

                    <div className='flex flex-col max-w-[63ch]'>
                        <p className='text-lg lg:text-xl font-bold text-slate-400 mb-6'>
                            <span className = 'text-gold'>DIGIRACK</span> is one of the most exciting, important companies
                            in the world right now because it's the portal to the new digital
                            economy. If you're interested in shaping a new business model
                            for creators, this is the team to join.
                        </p>
                        <p className='text-lg lg:text-xl font-bold text-slate-400 max-w-[75ch] mb-6'>                    
                            Katie Haun
                        </p>
                        <p className='text-lg lg:text-xl font-bold text-slate-400 max-w-[75ch]'>                    
                            General Partner at Andreessen Horowitz
                        </p>
                    </div>

                    <img src = {require('../../images/partners/hero.png')} alt = 'hero' className='hidden md:block max-w-[396px] '/>

                </div>


                <div className="mx-auto">
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

export default Partners;