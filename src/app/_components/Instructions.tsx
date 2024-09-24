import "./style/instructions.scss";

const Instructions: React.FC = () => {
    return (
        <ul className="instructions-wrapper">
            <p className="title">操作説明</p>
            <li className="item"><span>移動・選択</span>：矢印キー</li>
            <li className="item"><span>決定・調べる</span>：Enterキー</li>
            <li className="item"><span>メニュー</span>：Tabキー</li>
            <p className="addition">クリックでも移動・選択・調べるなどの操作が可能です。</p>
        </ul>
    )
}

export default Instructions;