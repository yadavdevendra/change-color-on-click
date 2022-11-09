function Placeholder ({ g,y }) {
    
        console.log(g,y);
        return (
            <div
                style={{
                    background: g === y ? 'black' : 'whitesmoke',
                    height: "250px",
                    width: "280px",
                    border:`1px solid ${false ? "whitesmoke":"black"}`,
                }}
            >
            {g}
            </div>
        );
    };
export default Placeholder;