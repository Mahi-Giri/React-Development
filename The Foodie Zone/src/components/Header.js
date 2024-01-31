import { APP_LOGO } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";

const Header = () => {
    const [button, setButton] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={APP_LOGO} />
            </div>

            <div className="nav-item">
                <ul>
                    <li>
                        <Link to="/search" className="link">
                            <i className="bi bi-search"></i>
                            <span>Search</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="link">
                            <i className="bi bi-house"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">
                            <i className="bi bi-person"></i>
                            <span>Contact US</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/lazyloading" className="link">
                            <i className="bi bi-person"></i>
                            <span>Lazy Loading</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">
                            <i className="bi bi-question-circle"></i>
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <i className="bi bi-person"></i>
                        <span>Mahi</span>
                    </li>
                    <li>
                        <i className="bi bi-cart"></i>
                        <span>Card</span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                if (button == "Login") {
                                    setButton("Logout");
                                } else {
                                    setButton("Login");
                                }
                            }}>
                            {button}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
