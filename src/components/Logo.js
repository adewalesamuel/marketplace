import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export function Logo(props) {
    return (
        <Link to="/" className="logo">
            <img src={logo} alt="Elite marketplace logo" 
            width={props.width ?? "105"} height={props.height ?? "25"} />
        </Link>
    )
}