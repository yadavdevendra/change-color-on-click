import { Tiles } from '@shopify/polaris';
import React, { useState } from 'react';
import Placeholder from './Placeholder';



function CliclButtonChangeColor() {
    const [mx,setmx] = useState(0)
    const [my,setmy] = useState(0)
    window.addEventListener("keydown",(e)=>{
        console.log(e.code);
        if(e.code=== "ArrowDown"){
            if(my >= 1)return
                setmy(my+1)
        }
        if(e.code=== "ArrowUp"){
            if(my <= 0)return
            setmy(my-1)
        }
        if(e.code=== "ArrowRight"){
            if(mx >= 1)return
            setmx(mx+1)
        }
        if(e.code=== "ArrowLeft"){
            if(mx <= 0)return
            setmx(mx-1)
        }
    })
    
    return (

        <Tiles columns={{ lg: 2 }} gap={{xs:0}}>
            {Array(2).fill("").map((_,y) => {
              return  Array(2).fill("").map((_,x)=>{
                    return (
                       <Placeholder g={`${x},${y}`} x={mx} y={my}  key={`${x},${y}`}/>
                    )

                })
            })}
        </Tiles>
    );
}

export default CliclButtonChangeColor