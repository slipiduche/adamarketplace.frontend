
import { Link } from 'react-router-dom';
import './BlueButton.css';

const BlueButton = ({className, text, href = false, onClick}) => {
    return(
        <>
            {href ? (
                <Link to = {href} className={`${className} px-10 py-5 blue_button text-xl font-bold`}>
                    {text}
                </Link>
            ):(
                <button onClick={onClick} className={`${className} px-10 py-5 blue_button text-xl font-bold`}>
                    {text}
                </button>
            )}
        </>
    )
}

export default BlueButton;