import { useState, useRef, useEffect } from "react";

const Map: React.FC = () => {

    /*
    マップ概要
    1 = 壁
    0 = 移動可能範囲
    */
    const viewMap = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1],
    ]

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [userX,setX] = useState(1);
    const [userY,setY] = useState(1);

    useEffect(() => {
        // 排他
        if(!canvasRef.current) {
            throw new Error("canvas要素の取得に失敗しました。");
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        //排他
        if(!ctx) {
            throw new Error("2dContextの取得に失敗しました。");
        }

        /*
        画像素材
        */
        const wallImage = new Image();
        const floorImage = new Image();
        const userImage = new Image();
        let loadedImages = 0;

        const drawMap = () => {
            for (let y = 0; y < viewMap.length; y++) {
                for (let x = 0; x < viewMap[y].length; x++) {
                    if (viewMap[y][x] === 1) {
                        ctx.drawImage(wallImage, 0, 0, 32, 32, 32 * x, 32 * y, 32, 32);
                    } else {
                        ctx.drawImage(floorImage, 0, 0, 32, 32, 32 * x, 32 * y, 32, 32);
                    }
                }
            }

            ctx.drawImage(userImage, 0, 0, 32, 32, 32*userX, 32*userY, 32, 32);
        };

        const onImageLoad = () => {
            loadedImages++;
            if (loadedImages === 3) {
                drawMap();
            }
        };

        wallImage.onload = onImageLoad;
        floorImage.onload = onImageLoad;
        userImage.onload = onImageLoad;

        wallImage.src = "/images/wall.png";
        floorImage.src = "/images/floor.png";
        userImage.src = "/images/user.png";

    }, [userX,userY])

    // 移動判定
    const moveRestrict = (x: number, y: number): boolean => {
        const newY = userY + y;
        const newX = userX + x;
        return viewMap[newY][newX] === 0;
    }

    // キーダウンイベント
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
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
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [userX, userY]); // userXとuserYを依存配列に追加

    return (
        <canvas
            ref={canvasRef}
            width={224}
            height={224}>
        </canvas>
    )
}

export default Map;