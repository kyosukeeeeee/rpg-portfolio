import React, { useState, useEffect } from 'react';

import "./style/character.scss";

type StatusProps = {
    num: number;
};

const Character: React.FC<StatusProps> = ({ num }) => {
    const [bottomPx, setBottomPx] = useState('0px');

    const imagePath =  `/images/character${num}.svg`;

    useEffect(() => {
        // 1秒ごとにCSSの値を更新する
        const interval = setInterval(() => {
            setBottomPx(prev => (prev === '0px' ? '5px' : '0px'));
        }, 500);
    
        // コンポーネントのアンマウント時にintervalをクリア
        return () => clearInterval(interval);
      }, []);
    
      // スタイルオブジェクトを作成
      const style = {
        bottom: bottomPx,
        transition: 'bottom 0.25s ease',
      };

    return (
        <div className="character" style={style}>
            <img src={imagePath} alt="user" />
        </div>
    )
}

export default Character;