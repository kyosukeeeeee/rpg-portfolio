import AudioBtn from "./AudioBtn";

import "./style/header.scss";

const Header: React.FC = () => {
    return (
        <div className="header-wrapper">
            <nav className="header-nav">
                <p className="item"><a href="/home">Home</a></p>
                <p className="item"><a href="/about">About</a></p>
                <p className="item"><a href="/work">Work</a></p>
                <p className="item"><a href="mailto:mikeneko3511@gmail.com">Contact</a></p>
            </nav>
            <AudioBtn />
        </div>
    )
}

export default Header;