import { useEffect, useState } from "react";

import "./style/status.scss";

type StatusProps = {
    visibleSkill: boolean;
    setVisibleSkill: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusSkill: React.FC<StatusProps> = ({visibleSkill, setVisibleSkill}) => {

    const CATEGORY = ["フロントエンド", "バックエンド", "データベース", "その他"];
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNavClick = (index: number) => {
        setActiveIndex(index);
    }

    return (
        <div className="skill-content" style={{ display: visibleSkill ? "block" : "none" }}>
            <nav className="skill-navi">
                {CATEGORY.map((item, index) => {
                    return (
                        <p 
                            key={index}
                            className={`item${index + 1} ${index === activeIndex ? "active" : ""}`}
                            onClick={() => handleNavClick(index)}
                        >
                            {item}
                        </p>
                    )
                })}
            </nav>
            {/* フロント */}
            <ul className={`skill-list ${activeIndex === 0 ? "show" : "hide"}`}>
                <li className="item">HTML</li>
                <li className="item">CSS</li>
                <li className="item">JavaScript</li>
                <li className="item">TypeScript</li>
                <li className="item">React</li>
                <li className="item">Next.js</li>
                <li className="item">SCSS</li>
                <li className="item">BootStrap</li>
            </ul>
            {/* バックエンド */}
            <ul className={`skill-list ${activeIndex === 1 ? "show" : "hide"}`}>
                <li className="item">Java</li>
                <li className="item">C#</li>
                <li className="item">VB.net</li>
                <li className="item">PHP</li>
                <li className="item">SpringBoot</li>
                <li className="item">GoogleAppScript</li>
            </ul>
            {/* データベース */}
            <ul className={`skill-list ${activeIndex === 2 ? "show" : "hide"}`}>
                <li className="item">MySQL</li>
                <li className="item">PostgreSQL</li>
                <li className="item">SQL server</li>
                <li className="item">RDS</li>
            </ul>
            {/* その他 */}
            <ul className={`skill-list ${activeIndex === 3 ? "show" : "hide"}`}>
                <li className="item">AWS</li>
                <li className="item">Node.js</li>
                <li className="item">Linux</li>
                <li className="item">Word Press</li>
            </ul>
        </div>
    )
}

export default StatusSkill;