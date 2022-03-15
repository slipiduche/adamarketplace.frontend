

const Sticker = ({image, title, description, descriptionClass, titleClass}) => {
    return(
        <div className="flex flex-col align-center mx-5 mb-4">
            <div className="flex justify-center mb-3 w-full">
                <img src={image} alt="sticker" className="w-full max-w-100px"/>
            </div>
            <h2 className={`text-center text-lg font-bold mb-5 ${titleClass}`}>{title}</h2>
            <p className={`${descriptionClass} max-w-[40ch] text-11px xl:text-sm text-slate-400 text-center`}>
                {description}
            </p>
        </div>

    ) 
}

export default Sticker;