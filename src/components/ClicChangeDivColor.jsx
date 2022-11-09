import { Tiles } from '@shopify/polaris';
import React, { useState } from 'react';
import Placeholder from './Placeholder';



function ClicChangeDivColor() {
    const [count,setCount] = useState(0)
    window.addEventListener("keydown",(e)=>{
        console.log(e.code);
        if(e.code=== "ArrowDown"){
            if(count >=2) return
                setCount(count+2)
        }
        if(e.code=== "ArrowUp"){
            if(count<0)return
            setCount(count-2)
        }
        if(e.code=== "ArrowRight"){
            if(count >=1)return
            setCount(count+1)
        }
        if(e.code=== "ArrowLeft"){
            if(count <=0)return
            setCount(count-1)
        }
    })
    
    return (

        <Tiles columns={{ lg: 2 }} gap={{xs:'0'}}>
            {Array(4).fill("").map((_,y) => {
              
                    return (
                       <Placeholder g={y}  y={count}  key={y}/>
                    )

            })}
        </Tiles>
    );
}

export default ClicChangeDivColor