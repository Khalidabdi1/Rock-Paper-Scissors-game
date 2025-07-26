


export default function Result(){
    return (
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <div className="Result-one">
              <h3 className="Result-title-one" > 
                    You Result :
                </h3>
            <div className="Result-one-inside">
              
                <h3 style={{textAlign:"center"}}>
                    0
                </h3>
            </div>
         </div>

        <div  className="Result-one">
                <h3 className="Result-title-one" > 
                     computer Result:
                </h3>
             <div className="Result-one-inside">
                <h3 style={{textAlign:"center"}}>
                    0
                </h3>
            </div>
        </div>
      </div>
    )
}