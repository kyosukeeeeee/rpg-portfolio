import { useEffect, useRef, useState } from "react";
import "./style/audioBtn.scss"

const AudioBtn: React.FC = () => {
    const [audioFlg, setAudioFlg] = useState(false);

    // useRefを使って一度だけ生成されたAudioインスタンスを保持する
    const musicRef = useRef<HTMLAudioElement | null>(null);

    // 初回レンダリング時に音楽インスタンスを作成し、refに保持する
    useEffect(() => {
        const music = new Audio();
        music.src = "/audio/home_bgm.ogg";
        music.volume = 0.2;
        musicRef.current = music;

        // クリーンアップ関数でオーディオを停止
        return () => {
            if (musicRef.current) {
                musicRef.current.pause();
                musicRef.current = null;
            }
        };
    }, []);

    const playMusic = () => {
        if (musicRef.current) {
            if (audioFlg) {
                musicRef.current.pause();
                setAudioFlg(false);
            } else {
                musicRef.current.play();
                setAudioFlg(true);
            }
        }
    };

    return (
        <div className="audio-btn" onClick={playMusic}>
            <img src="/images/volume.svg" style={{ display: audioFlg ? "block" : "none" }} />
            <img src="/images/volume_off.svg" style={{ display: audioFlg ? "none" : "block" }} />
        </div>
    );
}

export default AudioBtn;
