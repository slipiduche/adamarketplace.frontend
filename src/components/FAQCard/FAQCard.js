

const FAQCard = ({href, title, description}) => {
    return(
        <a href={href} className="flex flex-col align-center bg-white border-2 border-gray-300 rounded-lg text-center px-4 md:px-8 xl:px-12 py-4 xl:py-8 ">
            <h2 className="text-lg sm:text-xl sm:text-2xl font-bold text-black mb-4">
                {title}
            </h2>
            <p className="text-base sm:text-lg sm:text-xl text-slate-500 ">
                {description}
            </p>
        </a>
    )
}

export default FAQCard;