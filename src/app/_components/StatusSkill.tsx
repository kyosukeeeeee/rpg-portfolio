import { useEffect, useState } from "react";

import ProgressBar from "./ProgressBar";

import "./style/status.scss";

type StatusProps = {
    visibleSkill: boolean;
    setVisibleSkill: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusSkill: React.FC<StatusProps> = ({visibleSkill, setVisibleSkill}) => {

    const CATEGORY = ["フロントエンド", "バックエンド", "データベース", "その他"];
    const FRONT = [
        {skill: "HTML&CSS", value: 100},
        {skill: "BootStrap", value: 60},
        {skill: "SCSS", value: 60},
        {skill: "JavaScript", value: 80},
        {skill: "TypeScript", value: 60},
        {skill: "React", value: 80},
        {skill: "Node.js", value: 60},
    ]
    const BACK = [
        {skill: "Java", value: 80},
        {skill: "C#", value: 80},
        {skill: "VB.NET", value: 60},
        {skill: "PHP", value: 60},
        {skill: "SpringBoot", value: 80},
        {skill: "GoogleAppScript", value: 80},
    ]
    const DATABASE = [
        {skill: "MySQL", value: 80},
        {skill: "PostgreSQL", value: 80},
        {skill: "SQL server", value: 80},
        {skill: "RDS", value: 60},
    ]
    const OTHER = [
        {skill: "AWS", value: 60},
        {skill: "Node.js", value: 60},
        {skill: "Linux", value: 60},
        {skill: "WordPress", value: 100},
    ]
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSkill, setActiveSkill] = useState(false);

    const handleNavClick = (index: number) => {
        setActiveIndex(index);
    }

    const closePanel = () => {
        setVisibleSkill(false);
    }

    useEffect(() => {
        setActiveSkill(true);

        // ハンドルイベント
        const handleKeyDown = (event: KeyboardEvent) => {
            if(activeSkill === false) {
                return;
            }

            switch (event.key) {
                case 'Enter':
                    setVisibleSkill(false);
                    setActiveSkill(false);

                    break;

                // case 'ArrowRight':
                //     if(activeIndex < 3) {
                //         setActiveIndex(prev => prev + 1);
                //     }

                //     break;
                
                // case 'ArrowLeft':
                //     if(activeIndex > 0) {
                //         setActiveIndex(prev => prev - 1);
                //     }

                //     break;

                default:
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            setActiveSkill(false)
        };
    }, [activeSkill]);

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
                {FRONT.map((item,index) => {
                    return (
                        <li key={index} className="item">
                            {item.skill}
                            <ProgressBar value={item.value} />
                        </li>
                    )
                })}
                <p className="btn" onClick={closePanel}>Enterで閉じる</p>
            </ul>
            {/* バックエンド */}
            <ul className={`skill-list ${activeIndex === 1 ? "show" : "hide"}`}>
                {BACK.map((item,index) => {
                    return (
                        <li key={index} className="item">
                            {item.skill}
                            <ProgressBar value={item.value} />
                        </li>
                    )
                })}
                <p className="btn" onClick={closePanel}>Enterで閉じる</p>
            </ul>
            {/* データベース */}
            <ul className={`skill-list ${activeIndex === 2 ? "show" : "hide"}`}>
                {DATABASE.map((item,index) => {
                    return (
                        <li key={index} className="item">
                            {item.skill}
                            <ProgressBar value={item.value} />
                        </li>
                    )
                })}
                <p className="btn" onClick={closePanel}>Enterで閉じる</p>
            </ul>
            {/* その他 */}
            <ul className={`skill-list ${activeIndex === 3 ? "show" : "hide"}`}>
                {OTHER.map((item,index) => {
                    return (
                        <li key={index} className="item">
                            {item.skill}
                            <ProgressBar value={item.value} />
                        </li>
                    )
                })}
                <p className="btn" onClick={closePanel}>Enterで閉じる</p>
            </ul>
        </div>
    )
}

export default StatusSkill;