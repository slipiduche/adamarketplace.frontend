

import { Link } from 'react-router-dom';
import FAQCard from '../../components/FAQCard/FAQCard';
import BlueButton from '../../components/BlueButton/BlueButton';
import './HelpCenter.css'
const HelpCenter = () => {

    return(
        <div className="bg-white">

            <div className = "h-[620px] help_center_cover flex justify-center items-center">
                <div className="lg:container mx-auto px-4">
                    {/* searchbar */}
                    <div className="flex justify-center">
                        <div class="flex border-2 rounded max-w-[400px]">
                            <button class="flex items-center bg-white justify-center px-4 border-r">
                                <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                    </path>
                                </svg>
                            </button>
                            <input type="text" class="px-4 py-2 w-80" placeholder="Search..." />
                        </div>
                    </div>
                </div>
            </div>


            <div className="lg:container mx-auto px-4 pt-4 pt-[100px] pb-12">

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-12 gap-y-10 mb-10'>
                    <FAQCard href = {'/'} title = {"Getting Started"} description={"Lorem Ipsum is simply dummy text of the printiand typesetting industry. "} />
                    <FAQCard href = {'/'} title = {"Buying"} description={"Lorem Ipsum is simply dummy text of the printiand typesetting industry. "} />
                    <FAQCard href = {'/'} title = {"Selling"} description={"Lorem Ipsum is simply dummy text of the printiand typesetting industry. "} />
                    <FAQCard href = {'/'} title = {"Creating"} description={"Lorem Ipsum is simply dummy text of the printiand typesetting industry. "} />
                    <FAQCard href = {'/'} title = {"FAQ"} description={"Lorem Ipsum is simply dummy text of the printiand typesetting industry. "} />
                    <FAQCard href = {'/'} title = {"User Safety"} description={"Lorem Ipsum is simply dummy text of the printiand typesetting industry. "} />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-12 gap-y-10'>
                    <FAQCard href = {'/'} title = {"Partners"} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`} />
                    <FAQCard href = {'/'} title = {"Developers"} description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`} />
                </div>

            </div>

            <div className='border-t-4 border-gray-300 py-12'>
                <div className="lg:container mx-auto px-4 text-black">

                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-[40px]'>Promoted Articles</h1>
                    
                    <div className='grid grid-cols-2 gap-6 md:gap-10 mb-[68px]'>
                        <Link to = '/' className = 'text-bold text-gray-500 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>
                            How do i set my NFT as my twitter Profile picture
                        </Link>
                        <Link to = '/' className = 'text-bold text-gray-500 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>
                            How do i set my NFT as my twitter Profile picture
                        </Link>
                        <Link to = '/' className = 'text-bold text-gray-500 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>
                            How do i set my NFT as my twitter Profile picture
                        </Link>
                        <Link to = '/' className = 'text-bold text-gray-500 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>
                            How do i set my NFT as my twitter Profile picture
                        </Link>
                        <Link to = '/' className = 'text-bold text-gray-500 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>
                            How do i set my NFT as my twitter Profile picture
                        </Link>
                        <Link to = '/' className = 'text-bold text-gray-500 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>
                            How do i set my NFT as my twitter Profile picture
                        </Link>
                        <Link to = '/' className = 'text-bold text-gray-500 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>
                            How do i set my NFT as my twitter Profile picture
                        </Link>
                        <Link to = '/' className = 'text-bold text-gray-500 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>
                            How do i set my NFT as my twitter Profile picture
                        </Link>
                        
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
                            <input className = "px-6 py-4 bg-transparent border-2 rounded-lg border-black w-full max-w-[500px]" placeholder="Enter your Email / Phone Number" type="text"/>
                        </div>

                        <div>
                            <BlueButton className = 'text-white' text = 'Sign Up' onClick = {()=>{console.log('signed up')}} />
                        </div>

                    </div>

                </div>

            </div>




            
        </div>
    )
   

}

export default HelpCenter;