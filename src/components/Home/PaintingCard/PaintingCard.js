import PurpleButton from "../../PurpleButton/PurpleButton";
import GrayButton from '../../GrayButton/GrayButton';
import "./PaintingCard.css";

const PaintingCard = ({image, title, tag, bid, background, href, button = 'purple'}) => {
    return (
        <>
            <div href = {href} className = 'flex flex-col rounded-lg max-w-389px mx-3 p-5 mb-4 box_shadow_1 painting_card' style={{background: background}}>
                
                <img src = {image} alt = 'painting' className="w-full rounded-lg"/>
                
                <div className = 'flex w-full justify-between'>
                    <p className='max-w-490px text-sm lg:text-20px 2xl:text-2xl leading-36px text-slate-400'>
                        {tag}
                    </p>
                    <div className="flex flex-col">
                        <p className='max-w-490px text-sm lg:text-20px 2xl:text-2xl leading-36px text-slate-400'>
                            Current Bid
                        </p>
                        <p className='max-w-490px text-sm lg:text-20px 2xl:text-2xl leading-36px text-bold'>
                            {bid}
                        </p>
                    </div>
                </div>

                <h2 className='max-w-490px text-sm lg:text-20px 2xl:text-2xl leading-36px text-bold mb-4'>
                    {title}
                </h2>

                {button === 'purple' ? (
                    <PurpleButton text = {'Place a Bid'} href = {href} />
                ):(
                    <GrayButton text = {'Place a Bid'} href = {href} />
                )}
            </div>
        </>
    )
}

export default PaintingCard;