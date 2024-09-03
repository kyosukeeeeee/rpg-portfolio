import { useEffect, useState } from "react";

import "./style/status.scss";

type StatusProps = {
    visibleProfile: boolean;
    setVisibleProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusProfile: React.FC<StatusProps> = ({visibleProfile, setVisibleProfile}) => {

    const closePanel = () => {
        setVisibleProfile(false);
    }

    useEffect(() => {
        console.log(`mount Profile: ${visibleProfile}`)
        // ハンドルイベント
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'Enter':
                    setVisibleProfile(false);

                    break;
                default:
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <ul className="profile-list" style={{ display: visibleProfile ? "block" : "none" }}>
            <li className="item"><span>名前：</span>高田 恭佑</li>
            <li className="item"><span>Lv：</span>28</li>
            <li className="item"><span>ジョブ：</span>Webエンジニア</li>
            <li className="item"><span>趣味：</span>ゲーム・映画</li>
            <p className="btn" onClick={closePanel}>Enterで閉じる</p>
        </ul>
    )
}

export default StatusProfile;