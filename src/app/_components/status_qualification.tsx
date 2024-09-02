import "./style/status.scss";

type StatusProps = {
    visibleQualification: boolean;
    setVisibleQualification: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusQualification: React.FC<StatusProps> = ({visibleQualification, setVisibleQualification}) => {
    return (
        <ul className="qualification-list" style={{ display: visibleQualification ? "block" : "none" }}>
            <li className="item">AWS Certified Solutions Architect - Associate</li>
            <li className="item">AWS Certified Cloud Practitioner</li>
            <li className="item">HTML プロフェッショナル Level1</li>
            <li className="item">ITパスポート</li>
        </ul>
    )
}

export default StatusQualification;