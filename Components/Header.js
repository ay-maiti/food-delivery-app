import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    return <div className="header">
        <Link to="/">
        <div className="logo-container">
            <img className="logo" alt="Munch logo" src={logo_url}/>
        </div>
        </Link>
        <div className="header-links">
            <Link to="/basket">Your Basket</Link>
            <a href="#">Login</a>
            <a href="#">Signup</a>
            <a href="#">About</a>
        </div>
    </div>
}

export default Header;