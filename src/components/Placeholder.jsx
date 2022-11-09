import { useState } from "react";


function Placeholder ({ height = '250px', width = '350px' }) {
    const [isActive, setIsActive] = useState(false)
        
        return (
            <div
                style={{
                    background: isActive ? 'black' : 'whitesmoke',
                    height: height,
                    width: width,
                    border:`1px solid ${isActive ? "whitesmoke":"black"}`,
                }}
             onClick={()=>{setIsActive(!isActive)}}
            >
            </div>
        );
    };
export default Placeholder;