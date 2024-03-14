import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useGetOnlineStatus from "../utils/useGetOnlineStatus";
import { useContext} from "react";
import rabbit from "../utils/rabbit"

const Header = () => {
    const onlineStatus = useGetOnlineStatus()
    const hat = useContext(rabbit);
    return <div className="header">
        <Link to="/">
        <div className="logo-container">
            <img className="logo" alt="Munch logo" src={logo_url}/>
        </div>
        </Link>
        <ul className="header-links">
            <li>{onlineStatus?"🟢":"❌"}</li>
            <li><Link className="link" to="/grocery">Grocery</Link></li>
            <li><Link className="link" to="/basket">Your Basket</Link></li>
            <li><Link className="link" to="/login">Login</Link></li>
            <li><Link className="link" to="/signup">Signup</Link></li>
            <li><Link className="link" to="/about">About</Link></li>
            <li>{"Welcome "+hat.userName}</li>
        </ul>
    </div>
}

export default Header;