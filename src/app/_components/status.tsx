import { useState, useEffect } from "react";

import StatusProfile from "./status_profile";
import StatusSkill from "./status_skill";
import StatusQualification from "./status_qualification";

import "./style/status.scss";

type StatusProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setActiveMap: React.Dispatch<React.SetStateAction<boolean>>;
};

const Status: React.FC<StatusProps> = ({ visible, setVisible, setActiveMap }) => {

    const [selectItem, setSelectItem] = useState(1);
    const [profilePanel, setProfilePanel] = useState(false);
    const [skillPanel, setSkillPanel] = useState(false);
    const [qualificationPanel, setQualificationPanel] = useState(false);
    const [activeStatus, setActiveStatus] = useState(true);

    const STATUS_LIST = [
        { id: 1, text: "つよさ"},
        { id: 2, text: "スキル"},
        { id: 3, text: "しかく"},
        { id: 4, text: "とじる"},
    ]

    // ハンドルイベント
    const handleKeyDown = (event: KeyboardEvent) => {
        if(activeStatus === false) {
            return;
        }

        switch (event.key) {
            case 'ArrowUp':
                setSelectItem(prev => prev > 1 ? prev -1 : prev);
                break;
            case 'ArrowDown':
                setSelectItem(prev => prev < 4 ? prev + 1 : prev);
                break;
            case 'Enter':
                switch (selectItem){
                    case 1:
                        setVisible(false);
                        setProfilePanel(true);

                        break;
                    case 2:
                        setVisible(false);
                        setSkillPanel(true);
                        
                        break;
                    case 3:
                        setVisible(false);
                        setQualificationPanel(true);
                        setVisible(false);
                        break;
                    case 4:
                        setVisible(false);
                        setActiveStatus(false);
                        setActiveMap(true);
                        break;
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setActiveStatus(true);

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectItem, activeStatus]);

    return (
        <>
            <ul className="status-list" style={{ display: visible ? "block" : "none" }}>
                {
                    STATUS_LIST.map((item) => {
                        return (
                            <li key={item.id} className="status-item">
                                {selectItem === item.id && "> "}
                                {item.text}
                            </li>
                        )
                    })
                }
            </ul>
            <StatusProfile visibleProfile={profilePanel} setVisibleProfile={setProfilePanel} />
            <StatusSkill visibleSkill={skillPanel} setVisibleSkill={setSkillPanel} />
            <StatusQualification visibleQualification={qualificationPanel} setVisibleQualification={setQualificationPanel} />
        </>
    )
}

export default Status;