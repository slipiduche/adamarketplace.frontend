import './GrayButton.css';
import { Link } from 'react-router-dom';

const GrayButton = ({text, className = "", href = '/'}) => {
    return (
        <Link to = {href} className={`${className} gray_button`}> 
            {text}
        </Link>
    )
}

export default GrayButton;