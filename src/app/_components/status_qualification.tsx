import "./style/status.scss";

type StatusProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusQualification: React.FC<StatusProps> = ({visible, setVisible}) => {
    return (
        <ul className="status-list" style={{ display: visible ? "block" : "none" }}>
            <li className="status-item">AWS Certified Solutions Architect - Associate</li>
            <li className="status-item">AWS Certified Cloud Practitioner</li>
            <li className="status-item">HTML プロフェッショナル Level1</li>
            <li className="status-item">ITパスポート</li>
        </ul>
    )
}

export default StatusQualification;