import "./style/status.scss";

type StatusProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusSkill: React.FC<StatusProps> = ({visible, setVisible}) => {
    return (
        <div style={{ display: visible ? "block" : "none" }}>
            <nav>
                <p>フロントエンド</p>
                <p>バックエンド</p>
                <p>データベース</p>
                <p>その他</p>
            </nav>
            {/* フロント */}
            <ul className="status-list">
                <li className="status-item">HTML</li>
                <li className="status-item">CSS</li>
                <li className="status-item">JavaScript</li>
                <li className="status-item">TypeScript</li>
                <li className="status-item">React</li>
                <li className="status-item">Next.js</li>
                <li className="status-item">SCSS</li>
                <li className="status-item">BootStrap</li>
            </ul>
            {/* バックエンド */}
            <ul className="status-list">
                <li className="status-item">Java</li>
                <li className="status-item">C#</li>
                <li className="status-item">VB.net</li>
                <li className="status-item">PHP</li>
                <li className="status-item">SpringBoot</li>
                <li className="status-item">GoogleAppScript</li>
            </ul>
            {/* データベース */}
            <ul className="status-list">
                <li className="status-item">MySQL</li>
                <li className="status-item">PostgreSQL</li>
                <li className="status-item">SQL server</li>
                <li className="status-item">RDS</li>
            </ul>
            {/* その他 */}
            <ul className="status-list">
                <li className="status-item">AWS</li>
                <li className="status-item">Node.js</li>
                <li className="status-item">Linux</li>
            </ul>
        </div>
    )
}

export default StatusSkill;