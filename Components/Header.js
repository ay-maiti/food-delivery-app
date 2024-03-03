import { logo_url } from "../utils/constants";

const Header = () => {
    return <div className="header">
        <div className="logo-container">
            <img className="logo" alt="Munch logo" src={logo_url}/>
        </div>
        <div className="header-links">
            <a href="#">Your Basket</a>
            <a href="#">Login</a>
            <a href="#">Signup</a>
        </div>
    </div>
}

export default Header;