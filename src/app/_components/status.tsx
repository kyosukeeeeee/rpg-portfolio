import { useState, useEffect, Dispatch, SetStateAction } from "react";

import "./style/status.scss";

// typeとinterfaceの違いについて調べる
type StatusProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Status: React.FC<StatusProps> = ({ visible, setVisible }) => {

    const [selectItem, setSelectItem] = useState(1);

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
                        break;
                    case 2:
                        break;
                    case 3:
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
                        <li key={item.id} className="status-item">
                            {selectItem === item.id && "> "}
                            {item.text}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Status;