
import './PurpleButton.css';
import { Link } from 'react-router-dom';

const PurpleButton = ({text, className = "", href = '/'}) => {
    return (
        <Link to = {href} className={`${className} purple_button`}> 
            {text}
        </Link>
    )
}

export default PurpleButton;