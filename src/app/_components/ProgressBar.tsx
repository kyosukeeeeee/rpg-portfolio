import React from 'react'

import "./style/progressBar.scss"

type ValueProps = {
    value: number
} 

const ProgressBar:React.FC<ValueProps> = ({value}) => {
    return (
        <div className="bar-wrapper">
            <div className="param">
                <span>0</span>
                <span>20</span>
                <span>40</span>
                <span>60</span>
                <span>80</span>
                <span>100</span>
            </div>
            <progress className="meter" max="100" value={value}></progress>
        </div>
    )
}

export default ProgressBar
