import { APP_LOGO } from "../utils/constant";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={APP_LOGO} />
            </div>

            <div className="nav-item">
                <ul>
                    <li>
                        <i className="bi bi-person"></i>
                        <span>Offers</span>
                    </li>
                    <li>
                        <i className="bi bi-question-circle"></i>
                        <span>Help</span>
                    </li>
                    <li>
                        <i className="bi bi-person"></i>
                        <span>Mahi</span>
                    </li>
                    <li>
                        <i className="bi bi-cart"></i>
                        <span>Card</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
