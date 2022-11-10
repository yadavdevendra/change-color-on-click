function Placeholder ({g,x,y}) {
    
        console.log("inpute",g,x+","+y);
        return (
            <div
                style={{
                    background:g === (`${x},${y}`)? 'black' : 'whitesmoke',
                    height: "250px",
                    width: "280px",
                    border:`1px solid ${g === (`${x},${y}`)? "whitesmoke":"black"}`,
                }}
            >
            {g}
            </div>
        );
    };
export default Placeholder;