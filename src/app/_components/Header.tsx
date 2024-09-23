import AudioBtn from "./AudioBtn";

import "./style/header.scss";

const Header: React.FC = () => {
    return (
        <div className="header-wrapper">
            <nav className="header-nav">
                <p className="item"><a href="#">Home</a></p>
                <p className="item"><a href="#">Work</a></p>
                <p className="item"><a href="#">Contact</a></p>
            </nav>
            <AudioBtn />
        </div>
    )
}

export default Header;