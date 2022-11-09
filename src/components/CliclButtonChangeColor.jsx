import React from 'react';
import { Tiles} from '@shopify/polaris';
import Placeholder from './Placeholder';


function CliclButtonChangeColor() {
    
    return (

        <Tiles columns={{ lg: 2 }} gap={{xs: '0'}} >
            {Array(4).fill("").map((_,index) => {
                return (
                    <Placeholder key={index}/>
                )
            })}
        </Tiles>
    );
}

export default CliclButtonChangeColor