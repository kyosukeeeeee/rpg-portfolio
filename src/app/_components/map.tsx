import { useState, useRef, useEffect } from "react";

import Status from "./Status";
import TextBox from "./TextBox";
import "./style/home.scss"

const Map: React.FC = () => {

    const viewMap = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 4, 0, 3, 0, 2, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 5, 6, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 7, 1, 1, 1],
    ];

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [{userX, userY}, setUserXY] = useState({ userX: 2, userY: 3 });
    const [statusPanel, setStatusPanel] = useState(false);
    const [activeMap, setActiveMap] = useState(true);
    const [textContent, setTextContent] = useState("");

    const [drawPngX, setDrawPngX] = useState(0);
    const [drawPngY, setDrawPngY] = useState(0);

    // const drawPngMove = () => {
    //     if(drawPngX === 0) {
    //         setDrawPngX(32);
    //     } else if (drawPngX === 32) {
    //         setDrawPngX(64);
    //     } else {
    //         setDrawPngX(0);
    //     }
    // }

    // useEffect(() => {

    //     setInterval(drawPngMove, 1000);

    //     return () => clearInterval(flgMove);

    // }, [drawPngX])

    useEffect(() => {
        if (!canvasRef.current) {
            throw new Error("canvas要素の取得に失敗しました。");
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // キャンバスをクリックしたときのイベント
        const handleClick = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // クリックされたマス目の位置を計算
            const gridX = Math.floor(x / 32);
            const gridY = Math.floor(y / 32);

            // クリックした場所が移動可能な位置ならユーザーの位置を更新
            if (viewMap[gridY][gridX] === 0) {
                setUserXY({ userX: gridX, userY: gridY });
            } else if (viewMap[gridY][gridX] === 2) {
                setTextContent("ふかふかのベッドだ。");
            } else if (viewMap[gridY][gridX] === 3) {
                setTextContent("暖炉だ。");
            } else if (viewMap[gridY][gridX] === 4) {
                setTextContent("本棚には読んでいない技術書がたくさんある。。");
            } else if (viewMap[gridY][gridX] === 6) {
                setTextContent("こんにちは！ここは高田 恭佑のポートフォリオです！");
            } else if (viewMap[gridY][gridX] === 7) {
                setTextContent("鍵がかかっている。");
            }
        };
        canvas.addEventListener('click', handleClick);
        
        if (!ctx) {
            throw new Error("2dContextの取得に失敗しました。");
        }

        const wallImage = new Image();
        const floorImage = new Image();
        const userImage = new Image();
        const bedImage = new Image();
        const danroImage = new Image();
        const shelfImage = new Image();
        const tableImage = new Image();
        const guestImage = new Image();
        const doorImage = new Image();
        let loadedImages = 0;

        const drawMap = () => {
            for (let y = 0; y < viewMap.length; y++) {
                for (let x = 0; x < viewMap[y].length; x++) {
                    if (viewMap[y][x] === 1) {
                        ctx.drawImage(wallImage, 0, 0, wallImage.width, wallImage.height, 32 * x, 32 * y, 32, 32);
                    } else {
                        ctx.drawImage(floorImage, 0, 0, floorImage.width, floorImage.height, 32 * x, 32 * y, 32, 32);
                    }
                }
            }

            // ユーザー描画
            ctx.drawImage(userImage, drawPngX, drawPngY, 32, 32, 32 * userX, 32 * userY, 32, 32);
            // ベッド描画
            ctx.drawImage(bedImage, 0, 0, bedImage.width, bedImage.height, 32 * 5, 32 * 1, 32, 32);
            // 暖炉描画
            ctx.drawImage(danroImage, 0, 0, danroImage.width, danroImage.height, 32 * 3, 32 * 1, 32, 32);
            // 本棚描画
            ctx.drawImage(shelfImage, 0, 0, shelfImage.width, shelfImage.height, 32 * 1, 32 * 1, 32, 32);
            // テーブル描画
            ctx.drawImage(tableImage, 0, 0, tableImage.width, tableImage.height, 32 * 3, 32 * 3, 32, 32);
            // ゲスト描画
            ctx.drawImage(guestImage, 0, 0, guestImage.width, guestImage.height, 32 * 4, 32 * 3, 32, 32);
            // ドア描画
            ctx.drawImage(doorImage, 0, 0, doorImage.width, doorImage.height, 32 * 3, 32 * 6, 32, 32);
        };

        const onImageLoad = () => {
            loadedImages++;
            if (loadedImages === 9) {
                drawMap();
            }
        };

        wallImage.onload = onImageLoad;
        floorImage.onload = onImageLoad;
        userImage.onload = onImageLoad;
        bedImage.onload = onImageLoad;
        danroImage.onload = onImageLoad;
        shelfImage.onload = onImageLoad;
        tableImage.onload = onImageLoad;
        guestImage.onload = onImageLoad;
        doorImage.onload = onImageLoad;

        wallImage.src = "/images/wall01.svg";
        floorImage.src = "/images/floor.svg";
        // userImage.src = "/images/user.svg";
        userImage.src = "/images/user.png";
        bedImage.src = "/images/bed.svg";
        danroImage.src = "/images/danro.svg";
        shelfImage.src = "/images/shelf.svg";
        tableImage.src = "/images/table.svg";
        guestImage.src = "/images/guest.svg";
        doorImage.src = "/images/door.svg";

        return () => {
            canvas.removeEventListener('click', handleClick);
        };

    }, [userX, userY]);

    const moveRestrict = (x: number, y: number): boolean => {
        const newY = userY + y;
        const newX = userX + x;
        return viewMap[newY][newX] === 0;
    };

    useEffect(() => {

        const handleKeyDown = (event: KeyboardEvent) => {
            if (activeMap === false) return;

            switch (event.key) {
                case 'ArrowUp':
                    setDrawPngY(96);
                    if (moveRestrict(0, -1)) {
                        setUserXY(prev => ({ ...prev, userY: prev.userY - 1 }));
                    }
                    break;
                case 'ArrowDown':
                    setDrawPngY(0);
                    if (moveRestrict(0, 1)) {
                        setUserXY(prev => ({ ...prev, userY: prev.userY + 1 }));
                    }
                    break;
                case 'ArrowLeft':
                    setDrawPngY(32);
                    if (moveRestrict(-1, 0)) {
                        setUserXY(prev => ({ ...prev, userX: prev.userX - 1 }));
                    }
                    break;
                case 'ArrowRight':
                    setDrawPngY(64);
                    if (moveRestrict(1, 0)) {
                        setUserXY(prev => ({ ...prev, userX: prev.userX + 1 }));
                    }
                    break;
                case 'Tab':
                    event.preventDefault();
                    setStatusPanel(prev => !prev);
                    setActiveMap(false);
                    break;
                case 'Enter':
                    if ((userX === 4 && userY === 4) || (userX === 4 && userY === 2) || (userX === 5 && userY === 3)) {
                        setTextContent("こんにちは！ここは高田 恭佑のポートフォリオです！");
                    } else if ((userX === 1 && userY === 2)) {
                        setTextContent("本棚には読んでいない技術書がたくさんある。。");
                    } else if ((userX === 3 && userY === 2)) {
                        setTextContent("暖炉だ。");
                    } else if ((userX === 5 && userY === 2)) {
                        setTextContent("ふかふかのベッドだ。");
                    } else if ((userX === 3 && userY === 5)) {
                        setTextContent("鍵がかかっている。");
                    }
                    break;
            }
        };

        if (activeMap) {
            setActiveMap(true);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            setActiveMap(false);
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            setActiveMap(false);
        };

    }, [userX, userY, activeMap]);

    return (
        <>
            <div className="map-wrapper">
                <canvas
                    ref={canvasRef}
                    width={224}
                    height={224}
                    className="map">
                </canvas>
            </div>
            {statusPanel && (
                <Status 
                    visible={statusPanel}
                    setVisible={setStatusPanel} 
                    setActiveMap={setActiveMap}
                />
            )}
            {textContent && (
                <TextBox text={textContent} setText={setTextContent} />
            )}
        </>
    );
};

export default Map;
