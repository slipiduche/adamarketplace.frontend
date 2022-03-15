import { useState } from "react";
import BlueButton from "../../components/BlueButton/BlueButton";
import CategoryCard2 from "../../components/CategoryCard2/CategoryCard2";
import { artscollection, collectiblescollection, sportscollection } from "../../nftcollections";
import { domainnames } from "../../nftcollections";
import { musiccollection } from "../../nftcollections";
import { tradingcards } from "../../nftcollections";
import { photographycollection } from "../../nftcollections";
import { virtualworlds } from "../../nftcollections";
import { utilitycollection } from "../../nftcollections";

const AllCollections = () => {


    const [collections, setCollections] = useState(collectiblescollection);


    const changeCollection = (e, collection) => {
        let tabs = document.getElementsByClassName('collection_tab');
        for(let tab of tabs){
            if(e.target === tab){
                tab.classList.add("active");
            }
            else{
                tab.classList.remove("active")
            }
        }
        if(collection === "art"){
            setCollections(artscollection);
        }
        else if (collection === 'collectibles'){
            setCollections(collectiblescollection);
        }
        else if(collection === "domainnames"){
            setCollections(domainnames);
        }
        else if(collection === "music"){
            setCollections(musiccollection);
        }
        else if(collection === "photography"){
            setCollections(photographycollection);
        }
        else if(collection === "virtualworlds"){
            setCollections(virtualworlds);
        }
        else if(collection === "sports"){
            setCollections(sportscollection);
        }
        else if(collection === "tradingcards"){
            setCollections(tradingcards);
        }
        else if(collection === "utility"){
            setCollections(utilitycollection);
        }
    }

    return(
        <div className="bg-white"> 
        
            <div className="border-t-[1px] border-gray-300">
                <div className="lg:container mx-auto px-4">
                    <h1 className='text-[30px] lg:text-[40px] font-[600] text-center py-8 mt-6 mb-10'>Explore Collections</h1>
                </div>
                <div className="flex w-full justify-center mb-4">
                    <ul className="flex w-full max-w-[1050px] justify-between">
                        <li className="mr-4">
                            <button className="collection_tab active" onClick={(e) => changeCollection(e, "art")}>Art</button>
                        </li>
                        <li className="mr-4">
                            <button className="collection_tab" onClick={(e) => changeCollection(e, "collectibles")}>Collectibles</button>
                        </li>
                        <li className="mr-4">
                            <button className="collection_tab" onClick={(e) => changeCollection(e, "domainnames")}>Domain Names</button>
                        </li>
                        <li className="mr-4">
                            <button className="collection_tab" onClick={(e) => changeCollection(e, "music")}>Music</button>
                        </li>
                        <li className="mr-4">
                            <button className="collection_tab" onClick={(e) => changeCollection(e, "photography")}>Photography</button>
                        </li>
                        <li className="mr-4">
                            <button className="collection_tab" onClick={(e) => changeCollection(e, "virtualworlds")}>Virtual Worlds</button>
                        </li>
                        <li className="mr-4">
                            <button className="collection_tab" onClick={(e) => changeCollection(e, "sports")}>Sports</button>
                        </li>
                        <li className="mr-4">
                            <button className="collection_tab" onClick={(e) => changeCollection(e, "tradingcards")}>Trading Cards</button>
                        </li>
                        <li className="mr-4">
                            <button className="collection_tab" onClick={(e) => changeCollection(e, "utility")}>Utility</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{"background" : "white"}}> 
                <div className="lg:container mx-auto px-4 pb-32 pt-[30px]">
                    <div className=" mx-auto">
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10"> */}
                        <div className="flex justify-center flex-wrap">
                            {collections.map((item) => {
                                return(
                                    <CategoryCard2 href = {`/collection/${item.id}`} title = {item.title} image = {item.image} profileImage = {item.profileimage} description = {item.description} by = {item.by}/>
                                )
                            })}
                        </div>

                        <div className="w-full flex justify-center">
                            <BlueButton text = "See All" className={"text-white mt-[100px] px-24 py-6 text-[30px]"}/>
                        </div>

                    </div>
                </div>
            </div>
                    

        </div>
    )
}


export default AllCollections;