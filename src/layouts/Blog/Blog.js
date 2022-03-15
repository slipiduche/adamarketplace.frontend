
import {useEffect, useState} from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlueButton from '../../components/BlueButton/BlueButton';
import { blogs } from '../../blogsdata';

const Blog = () => {

    const [currPage, setCurrPage] = useState(0);
    const [Blogs, setBlogs] = useState(blogs.slice(0, 9));
    const totalPages = (Math.floor(blogs.length/9) + 1);

    useEffect(()=> {
        setBlogs(blogs.slice(currPage*9, (currPage+1)*9));
    }, [currPage]);

    const displayDots = () => {
        const dots = [];
        for(let i = 0; i < totalPages; i++){
            if(i === currPage){
                dots.push(<button className="mr-2 text-white text-8xl scale_15 pointer">.</button>)
            }
            else{
                dots.push(<button onClick = {()=>setCurrPage(i)} className='mr-2 text-gray-600 text-8xl scale_15'>.</button>)
            }
        }
        return dots;
    }


    const displayPageButtons = () => {
        const buttons = [];
        for(let i = 0; i < totalPages; i++){
            if(i === currPage){
                buttons.push(<button className="mr-2 text-white bg-blue-700 text-2xl py-4 px-10 rounded-lg scale_15">{i+1}</button>);
            }
            else{
                buttons.push(<button onClick = {()=>setCurrPage(i)} className='mr-2 text-white bg-gray-500 text-2xl py-4 px-10 rounded-lg scale_15'>{i+1}</button>);
            }
        }
        return buttons;
    }

    return(

        <div className="bg-darkslategray text-white">

            <div className='bg-white'>
                <div className="lg:container mx-auto px-4 pt-16 pb-16">
                    <div className='max-w-[900px] mx-auto'>
                        <div className="flex justify-center pt-5 pb-16 border-[1px] border-gray-300 rounded-lg">
                            <img src = {require('../../images/Blog/hero.png')} alt = 'hero' className='hidden md:block max-w-[396px] mr-4'/>
                            <div className="flex flex-col justify-center">
                                <p className='text-xl font-semibold text-green-200 bg-sky-600 px-3 py-2 max-w-[7ch] mb-3'>Guide</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-black max-w-[20ch] mb-2 relative left-4 sm:left-6">
                                    The beginner Guide to
                                    Creating & selling Digital art 
                                    NFTs 
                                </h2>
                                <div className='relative left-8 sm:left-12'>
                                    <p className="text-lg font-bold max-w-[25ch] mb-10 text-slate-500">                            
                                        Lorem Ipsum is simply dummy text of the printiand typesetting industry. 
                                    </p>
                                    <BlueButton text = 'View Post' href = '/blog/post' />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:container mx-auto px-4 pt-4 pb-32">

                <div className="max-w-[1400px] mx-auto mb-[70px]">

                    <div className='flex w-full justify-center mb-6'>
                        {displayDots()}
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-y-12 mb-12'>
                        {Blogs.map(blog => {
                          return <BlogCard href = "/" title = {blog.tag} background={'white'} image = {blog.image} description={blog.title} blueheader = {true}/>  
                        })}         
                    </div>


                    <div className='flex w-full justify-center mb-[85px]'>
                        {currPage > 0 ? (
                            <button onClick={()=>setCurrPage(currPage-1)} className="mr-2 text-white bg-blue-700 text-2xl py-4 px-5 rounded-lg scale_15">Prev</button>
                        ): null}

                        {displayPageButtons()}

                        {(currPage < totalPages - 1) ? (
                            <button onClick={()=>setCurrPage(currPage+1)} className="mr-2 text-white bg-blue-700 text-2xl px-5 rounded-lg scale_15">Next</button>
                        ): null}

                    </div>
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

export default Blog;