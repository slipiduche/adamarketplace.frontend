import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    const [show, setShow] = useState(false);

    const hideNavBar = () => {
        setShow(false); 
    }

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const checkSetIsFixed = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }

        checkSetIsFixed();

        const onScroll = (e) => {
            requestAnimationFrame(checkSetIsFixed);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);


    const handleButtonClick = (e, index) => {
        if(e.target.getAttribute("mode") === "more" || e.target.getAttribute("mode") === null) {
            e.target.setAttribute("mode", "less");
            document.getElementById(`nav_dropdown_${index}`).style.display = "block";
            document.getElementById(`dropdown_button_${index}`).classList.add("dropdown_button_active");
        }
        else{
            e.target.setAttribute("mode", "more");
            document.getElementById(`nav_dropdown_${index}`).style.display = "none";
            document.getElementById(`dropdown_button_${index}`).classList.remove("dropdown_button_active");
        }
    }


    return(
        <nav className={`flex items-center justify-between flex-wrap bg-white-500 px-6 py-2 bg-white z-30  w-full ${isFixed ? 'fixed' : 'relative'}`} id = "navbar">
            <div className="flex items-center flex-shrink-0 mr-8">
                <Link to="/" className="flex items-center">
                    <img src={require('../../images/Navbar/logo.png')} alt = 'logo' className="max-w-[3.5rem] mr-4"/>
                    <span className="font-semibold text-xl tracking-tight">Digirack</span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button onClick = {()=>{setShow(!show)}} className="navbar_show_button flex items-center px-3 py-2 border rounded text-teal-200 border-black-400 hover:text-black hover:border-black">
                    <svg className="fill-black h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className= {`${show ? 'show' : 'hide'} w-full flex-grow lg:flex lg:items-center lg:w-auto navbar_items`}>
    
                {/* Searchbar */}
                <div className="flex items-center justify-center mr-4 mt-4 lg:mt-0">
                    <div className="flex border-2 rounded">
                        <button className="flex items-center justify-center px-4 border-l">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </button>
                        <input type="text" className="px-4 py-2 w-80" placeholder="Search..."></input>
                    </div>
                </div>

                <div className="text-base lg:flex-grow font-[600] text-lg lg:flex lg:justify-end">
                    
                    <div className="dropdown relative mt-4 lg:mt-0 z-10">
                        <button className="font-bold inline-flex items-center px-5 z-10" id = "dropdown_button_1" mode = "more" onClick={(e) => handleButtonClick(e, 1)}>
                            <span className="mr-1">Explore</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden w-[230px] z-20 border-2 border-gray-300" id = "nav_dropdown_1">
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/collections/all' className="rounded-t text-[16px] nav_link border-b-[1px] border-gray-400 bg-white py-4 px-5 block whitespace-no-wrap">All NFTs</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/collections/art' className="rounded-t text-[16px] nav_link border-b-[1px] border-gray-400 bg-white py-4 px-5 block whitespace-no-wrap">Art</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/collections/collectibles' className="bg-white text-[16px] nav_link border-b-[1px] border-gray-400 py-4 px-5 block whitespace-no-wrap">Collectibles</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/collections/domainnames' className="bg-white text-[16px] nav_link border-b-[1px] border-gray-400 py-4 px-5 block whitespace-no-wrap">Domain Names</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/collections/music' className="bg-white text-[16px] nav_link border-b-[1px] border-gray-400 py-4 px-5 block whitespace-no-wrap">Music</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/collections/photography' className="bg-white text-[16px] nav_link border-b-[1px] border-gray-400 py-4 px-5 block whitespace-no-wrap">Photography</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/collections/virtualworlds' className="bg-white text-[16px] nav_link border-b-[1px] border-gray-400 py-4 px-5 block whitespace-no-wrap">Virtual Worlds</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/collections/sports' className="bg-white text-[16px] nav_link border-b-[1px] border-gray-400 py-4 px-5 block whitespace-no-wrap">Sports</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/collections/tradingcards' className="bg-white text-[16px] nav_link border-b-[1px] border-gray-400 py-4 px-5 block whitespace-no-wrap">Trading Cards</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/collections/utility' className="rounded-b bg-white text-[16px] nav_link  py-4 px-5 block whitespace-no-wrap">Utility</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="dropdown relative mt-4 lg:mt-0">
                        <button className="font-bold inline-flex items-center px-5" id = "dropdown_button_2" mode = "more" onClick={(e) => handleButtonClick(e, 2)}>
                            <span className="mr-1">Stats</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden w-[230px] border-2 border-gray-300 z-10" id = "nav_dropdown_2">
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/rankingstats' className="rounded-t text-[16px] nav_link border-b-[1px] border-gray-400 bg-white py-4 px-5 block whitespace-no-wrap">Rankings</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/activitystats' className="rounded-b bg-white text-[16px] nav_link  py-4 px-5 block whitespace-no-wrap">Activity</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="dropdown relative mt-4 lg:mt-0 ">
                        <button className="font-bold inline-flex items-center px-5" id = "dropdown_button_3" mode = "more" onClick={(e) => handleButtonClick(e, 3)}>
                            <span className="mr-1">Resources</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden w-[230px] border-2 border-gray-300" id = "nav_dropdown_3">
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/helpcenter' className="rounded-t text-[16px] nav_link border-b-[1px] border-gray-400 bg-white py-4 px-5 block whitespace-no-wrap">Help Center</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/platformstats' className="bg-white text-[16px] nav_link border-b-[1px] border-gray-400 py-4 px-5 block whitespace-no-wrap">Platform Status</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/partners' className="bg-white text-[16px] nav_link border-b-[1px] border-gray-400 py-4 px-5 block whitespace-no-wrap">Partners</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/gasmarket' className="bg-white text-[16px] nav_link border-b-[1px] border-gray-400 py-4 px-5 block whitespace-no-wrap">Gas-Free Marketplace</Link>
                            </li>
                            <li className="">
                                <Link onClick = {hideNavBar} to = '/blog' className="rounded-b bg-white text-[16px] nav_link  py-4 px-5 block whitespace-no-wrap">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <Link onClick = {()=>{setShow(!show)}} to = "/connectwallet" className="block px-5 mt-4 lg:inline-block lg:mt-0">
                        Create
                    </Link>

                    <Link onClick = {()=>{setShow(!show)}} to = "/connectwallet" className="block px-5 mt-4 lg:inline-block lg:mt-0 mb-4 lg:mb-0">
                        <img src = {require('../../images/Navbar/wallet.png')} alt = "wallet" className="max-w-[1.7rem]" />
                    </Link>

            

                </div>

            </div>

        </nav>
    )

}


export default Navbar;