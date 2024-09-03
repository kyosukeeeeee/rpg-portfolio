import { useState, useRef, useEffect } from "react";

import Status from "./status";
import "./style/home.scss"

const Map: React.FC = () => {

    const viewMap = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 4, 0, 3, 0, 2, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 5, 6, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1],
    ]

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [userX, setX] = useState(2);
    const [userY, setY] = useState(3);
    const [statusPanel, setStatusPanel] = useState(false);
    const [activeMap, setActiveMap] = useState(true);

    useEffect(() => {
        if(!canvasRef.current) {
            throw new Error("canvas要素の取得に失敗しました。");
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        if(!ctx) {
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
            ctx.drawImage(userImage, 0, 0, userImage.width, userImage.height, 32*userX, 32*userY, 32, 32);
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
        };

        const onImageLoad = () => {
            loadedImages++;
            if (loadedImages === 8) {
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

        wallImage.src = "/images/wall.png";
        floorImage.src = "/images/floor.png";
        userImage.src = "/images/user.png";
        bedImage.src = "/images/bed.svg";
        danroImage.src = "/images/danro.png";
        shelfImage.src = "/images/shelf.png";
        tableImage.src = "/images/table.png";
        guestImage.src = "/images/guest.png";

    }, [userX, userY]);

    const moveRestrict = (x: number, y: number): boolean => {
        const newY = userY + y;
        const newX = userX + x;
        return viewMap[newY][newX] === 0;
    }

    useEffect(() => {
        setActiveMap(true)
        const handleKeyDown = (event: KeyboardEvent) => {
            if(activeMap === false) return;
    
            switch (event.key) {
                case 'ArrowUp':
                    if(moveRestrict(0, -1)) {
                        setY(prev => prev - 1);
                    }
                    break;
                case 'ArrowDown':
                    if(moveRestrict(0, 1)) {
                        setY(prev => prev + 1);
                    }
                    break;
                case 'ArrowLeft':
                    if(moveRestrict(-1, 0)) {
                        setX(prev => prev - 1);
                    }
                    break;
                case 'ArrowRight':
                    if(moveRestrict(1, 0)) {
                        setX(prev => prev + 1);
                    }
                    break;
                case 'Tab':
                    event.preventDefault();
                    setStatusPanel(prev => !prev);
                    setActiveMap(false);
                    break;
            }
        };
        document.addEventListener('keydown', handleKeyDown);

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
            <Status 
                visible={statusPanel}
                setVisible={setStatusPanel} 
                setActiveMap={setActiveMap} />
        </>
    )
}

export default Map;