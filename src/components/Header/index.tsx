import { Link } from "react-router-dom";

import "./style.css";
import Logo from "../../assets/logo-coca.jfif";

function Header() {
    return (
        <header>
            <img src={Logo} alt="descrição" className="logo" />

            <div>

                <button><Link to="/">Home</Link></button>
                <button><Link to="/About">About</Link></button>
                <button><Link to="/Contact">Contact</Link></button>
                <button><Link to="/Produto">Produto</Link></button>



            </div>

        </header>
    )
}

export default Header;