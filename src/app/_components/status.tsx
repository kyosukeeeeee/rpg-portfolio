import { useState, useEffect } from "react";

import StatusProfile from "./StatusProfile";
import StatusSkill from "./StatusSkill";
import StatusQualification from "./StatusQualification";

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
    // const [activeStatus, setActiveStatus] = useState(false);

    const STATUS_LIST = ["つよさ", "スキル", "しかく", "とじる"];

    const selctTab = (index: number) => {
        switch(index) {
            case 1:
                setProfilePanel(prev => !prev)
                break
            case 2:
                setSkillPanel(prev => !prev)
                break
            case 3:
                setQualificationPanel(prev => !prev)
                break
            case 4:
                setVisible(false)
                setActiveMap(prev => !prev)
                break
        }
    }

    useEffect(() => {

        // ハンドルイベント
        const handleKeyDown = (event: KeyboardEvent) => {
            if(profilePanel || skillPanel || qualificationPanel) return;
            switch (event.key) {
                case 'ArrowUp':
                    setSelectItem(prev => prev > 1 ? prev -1 : prev)
                    break;
                case 'ArrowDown':
                    setSelectItem(prev => prev < 4 ? prev + 1 : prev)
                    break;
                case 'Enter':
                    switch (selectItem){
                        case 1:
                            setProfilePanel(prev => !prev)
                            break
                        case 2:
                            setSkillPanel(prev => !prev)
                            break
                        case 3:
                            setQualificationPanel(prev => !prev)
                            break
                        case 4:
                            setVisible(false)
                            setActiveMap(prev => !prev)
                            break
                    }
                    break
                default:
                    break
            }
        };
        
        if (visible) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectItem]);

    return (
        <>
            <ul className="status-list" style={{ display: visible ? "block" : "none" }}>
                {
                    STATUS_LIST.map((item,index) => {
                        return (
                            <li key={index + 1} className="status-item" onClick={() => selctTab(index + 1)}>
                                {selectItem === index + 1 && "> "}
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
            {profilePanel && (
                <StatusProfile visibleProfile={profilePanel} setVisibleProfile={setProfilePanel} />
            )}
            {skillPanel && (
                <StatusSkill visibleSkill={skillPanel} setVisibleSkill={setSkillPanel} />
            )}
            {qualificationPanel && (
                <StatusQualification visibleQualification={qualificationPanel} setVisibleQualification={setQualificationPanel} />
            )}
        </>
    )
}

export default Status;