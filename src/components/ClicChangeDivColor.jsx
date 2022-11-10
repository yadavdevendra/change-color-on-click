import { Tiles } from '@shopify/polaris';
import React, { useState } from 'react';
import Placeholder from './Placeholder';



function ClicChangeDivColor() {
    const [inputDirx, setInputDirx] = useState(0)
    const [inputDiry, setInputDiry] = useState(0)
    window.addEventListener('keydown', e => {
        //let inputDir = {x: 0, y: 1} // Start the game
        console.log("element", e.key);
        switch (e.key) {
            case "ArrowUp":
                console.log("ArrowUp");
                if (inputDiry <= 0) return
                setInputDiry(inputDiry - 1)
                break;

            case "ArrowDown":
                console.log("ArrowDown");
                if (inputDiry >= 1) return
                setInputDiry(inputDiry + 1)
                break;

            case "ArrowLeft":
                console.log("ArrowLeft");
                if (inputDirx <= 0) return
                setInputDirx(inputDirx - 1)
                break;

            case "ArrowRight":
                console.log("ArrowRight");
                if (inputDirx >= 1) return
                setInputDirx(inputDirx + 1)
                break;
            default:
                break;
        }

    });
    return (

        <Tiles columns={{ lg: 2 }} gap={{ xs: '0' }}>
            {Array(2).fill("").map((_, y) => {
                return Array(2).fill("").map((_, x) => {
                    return (
                        <Placeholder g={`${x},${y}`} x={inputDirx} y={inputDiry} key={`${x},${y}`} />
                    )

                })
            })}
        </Tiles>
    );
}

export default ClicChangeDivColor