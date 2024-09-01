import { useState, useEffect, Dispatch, SetStateAction } from "react";

import StatusProfile from "./status_profile";
import StatusSkill from "./status_skill";
import StatusQualification from "./status_qualification";
import "./style/status.scss";

type StatusProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Status: React.FC<StatusProps> = ({ visible, setVisible }) => {

    const [selectItem, setSelectItem] = useState(1);
    const [profilePanel, setProfilePanel] = useState(false);
    const [skillPanel, setSkillPanel] = useState(false);
    const [qualificationPanel, setQualificationPanel] = useState(false);

    const STATUS_LIST = [
        { id: 1, text: "つよさ"},
        { id: 2, text: "スキル"},
        { id: 3, text: "しかく"},
        { id: 4, text: "とじる"},
    ]

    const handleKeyDown = (event: KeyboardEvent) => {
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
                        setProfilePanel(true);
                        break;
                    case 2:
                        setSkillPanel(true);
                        break;
                    case 3:
                        setQualificationPanel(true);
                        break;
                    case 4:
                        setVisible(false);
                        break;
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectItem]);

    return (
        <ul className="status-list" style={{ display: visible ? "block" : "none" }}>
            {
                STATUS_LIST.map((item) => {
                    return (
                        <>
                            <li key={item.id} className="status-item">
                                {selectItem === item.id && "> "}
                                {item.text}
                            </li>
                            <StatusProfile visible={profilePanel} setVisible={setProfilePanel} />
                            <StatusSkill visible={skillPanel} setVisible={setSkillPanel} />
                            <StatusQualification visible={qualificationPanel} setVisible={setQualificationPanel} />
                        </>
                    )
                })
            }
        </ul>
    )
}

export default Status;