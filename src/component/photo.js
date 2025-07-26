

export default function Photo(){
    return (
        <div style={{display:"flex" ,backgroundColor:"red",width:"100%",height:"400px"}}>

            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <img src="/paper.png" alt="paper" style={{width:"50%"}}></img>
            <h3>You</h3>
            </div>

            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <img src="/paper.png" alt="paper" style={{width:"50%"}}></img>
             <h3>computer</h3>

            </div>

      

        </div>
    )
}