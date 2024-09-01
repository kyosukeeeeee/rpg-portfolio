import "./style/status.scss";

type StatusProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusProfile: React.FC<StatusProps> = ({visible, setVisible}) => {
    return (
        <ul className="status-list" style={{ display: visible ? "block" : "none" }}>
            <li className="status-item"><span>名前</span>高田 恭佑</li>
            <li className="status-item"><span>Lv</span>28</li>
            <li className="status-item"><span>ジョブ</span>Webエンジニア</li>
            <li className="status-item"><span>趣味</span>ゲーム・映画</li>
        </ul>
    )
}

export default StatusProfile;