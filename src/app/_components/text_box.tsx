import "./style/text_box.scss"

type textContent = {
    text: string
}

const TextBox: React.FC<textContent> = ({text}) => {
    return (
        <div className="text-box">
            <p className="text-content">{text}</p>
        </div>
    )
}

export default TextBox;