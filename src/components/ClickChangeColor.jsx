import React, { useState } from 'react';
import { Tiles, Text } from '@shopify/polaris';


function ClickChangeColor() {
    
    return (

        <Tiles columns={{ lg: 2 }} >
            {Array(4).fill("").map((_,index) => {
                return (
                    <Placeholder label={index} />
                )
            })}
        </Tiles>
    );
}

const Placeholder = ({ label = '', height = '250px', width = '350px' }) => {
    const [isActive, setIsActive] = useState(false)
    
    return (
        <div
            style={{
                background: isActive ? '#000' : 'white',
                height: height,
                width: width,
            }}
         onClick={()=>{setIsActive(!isActive)}}
        >
            <div
                style={{
                    color: '#FFFFFF',
                }}
            >
                <Text as="h2" variant="bodyMd" fontWeight="medium">
                    {label}
                </Text>
            </div>
        </div>
    );
};
export default ClickChangeColor;