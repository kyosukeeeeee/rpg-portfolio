import { Typewriter } from 'react-simple-typewriter';

import "./style/title.scss"

const Title: React.FC<{ text: string }> = ({text}) => {
    return (
        <div className="bg">
            <h1 className="title">
                <Typewriter
                    words={["Hello World!", "My PortFolio."]}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={120}
                    deleteSpeed={100}
                    delaySpeed={1000}
                />
            </h1>
            <a className="button" href="/home">
                <p>{text} to start.</p>
            </a>
        </div>
    )
}

export default Title;