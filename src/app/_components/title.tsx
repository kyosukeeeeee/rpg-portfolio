import "../title.scss"

const Title: React.FC<{ text: string }> = ({text}) => {
    return (
        <div className="bg">
            <h1 className="title">Port Folio.</h1>
            <a className="button" href="/home">
                <p>{text} to Start.</p>
            </a>
        </div>
    )
}

export default Title;