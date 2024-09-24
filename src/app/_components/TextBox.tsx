import { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import "./style/text_box.scss"

type textContent = {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>
}

const TextBox: React.FC<textContent> = ({ text, setText }) => {
    const textSoundRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const sound = new Audio("/audio/text_sound.mp3");
        sound.volume = 0.4;
        textSoundRef.current = sound;

        // クリーンアップ関数でオーディオを停止
        return () => {
            if (textSoundRef.current) {
                textSoundRef.current.pause();
                textSoundRef.current = null;
            }
        };
    }, []);

    const typeSound = () => {
        if (textSoundRef.current) {
            // 再生中でも最初から再生するように設定
            textSoundRef.current.currentTime = 0;
            textSoundRef.current.play().catch(error => {
                console.error('音声の再生エラー:', error);
            });
        }
    }

    return (
        <div className="text-box">
            <Typewriter
                words={[text]}
                loop={1}
                cursor
                cursorStyle='▼'
                typeSpeed={60}
                onType={typeSound}
                onLoopDone={() => {
                    setText("");
                }}
            />
        </div>
    )
}

export default TextBox;
