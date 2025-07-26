

export default function Photo(){
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div className="card-photo" style={{display:"flex" ,width:"90%",height:"400px",justifyContent:"space-between"}}>

            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <img src="/paper.png" alt="paper" style={{width:"300px",height:"300px"}}></img>
            <h3>You</h3>
            </div>

            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <img src="/paper.png" alt="paper" style={{width:"300px",height:"300px"}}></img>
             <h3>computer</h3>

            </div>

      

        </div>
        </div>
    )
}