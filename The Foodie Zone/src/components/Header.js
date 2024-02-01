import { APP_LOGO } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";

const Header = () => {
    const [button, setButton] = useState("Login");

    return (
        <div className="header flex justify-between border-2 max-w-7xl items-center px-0">
            <div className="logo-container">
                <img className="logo w-24" src={APP_LOGO} />
            </div>

            <div className="nav-item">
                <ul className="flex my-3">
                    <li className="mx-3">
                        <Link to="/search" className="link">
                            <i className="bi bi-search mx-1"></i>
                            <span>Search</span>
                        </Link>
                    </li>
                    <li className="mx-3">
                        <Link to="/" className="link">
                            <i className="bi bi-house mx-1"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="mx-3">
                        <Link to="/contact" className="link">
                            <i className="bi bi-person mx-1"></i>
                            <span>Contact US</span>
                        </Link>
                    </li>
                    <li className="mx-3">
                        <Link to="/lazyloading" className="link">
                            <i className="bi bi-person mx-1"></i>
                            <span>Lazy Loading</span>
                        </Link>
                    </li>
                    <li className="mx-3">
                        <Link to="/about" className="link">
                            <i className="bi bi-question-circle mx-1"></i>
                            <span>About</span>
                        </Link>
                    </li>
                    <li className="mx-3">
                        <i className="bi bi-person mx-1"></i>
                        <span>Mahi</span>
                    </li>
                    <li className="mx-3">
                        <i className="bi bi-cart mx-1"></i>
                        <span>Card</span>
                    </li>
                    <li className="mx-3">
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
