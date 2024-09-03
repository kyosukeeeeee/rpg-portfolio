import { useEffect, useState } from "react";

import "./style/status.scss";

type StatusProps = {
    visibleQualification: boolean;
    setVisibleQualification: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusQualification: React.FC<StatusProps> = ({visibleQualification, setVisibleQualification}) => {
    const [activeQualification, setActiveQualification] = useState(false);

    const closePanel = () => {
        setVisibleQualification(false);
    }

    useEffect(() => {
        setActiveQualification(true);

        // ハンドルイベント
        const handleKeyDown = (event: KeyboardEvent) => {
            if(activeQualification === false) {
                return;
            }

            switch (event.key) {
                case 'Enter':
                    setVisibleQualification(false);
                    setActiveQualification(false);

                    break;
                default:
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            setActiveQualification(false)
        };
    }, [activeQualification]);

    return (
        <ul className="qualification-list" style={{ display: visibleQualification ? "block" : "none" }}>
            <li className="item">AWS Certified Solutions Architect - Associate</li>
            <li className="item">AWS Certified Cloud Practitioner</li>
            <li className="item">HTML プロフェッショナル Level1</li>
            <li className="item">ITパスポート</li>
            <p className="btn" onClick={closePanel}>Enterで閉じる</p>
        </ul>
    )
}

export default StatusQualification;