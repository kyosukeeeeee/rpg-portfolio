import { Typewriter } from 'react-simple-typewriter';

import "./style/text_box.scss"

type textContent = {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>
}

const TextBox: React.FC<textContent> = ({text, setText}) => {
    return (
        <div className="text-box">
            <Typewriter
                words={[text]}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                onLoopDone={
                    () => {
                        setText("")
                    }
                }
            />
        </div>
    )
}

export default TextBox;