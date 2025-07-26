


export default function Result({user,computer}){
    return (
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <div className="Result-one">
              <h3 className="Result-title-one" > 
                    You Result :
                </h3>
            <div className="Result-one-inside">
              
                <h3 style={{textAlign:"center"}}>
                   {user}
                </h3>
            </div>
         </div>

        <div  className="Result-one">
                <h3 className="Result-title-one" > 
                     computer Result:
                </h3>
             <div className="Result-one-inside">
                <h3 style={{textAlign:"center"}}>
                    {computer}
                </h3>
            </div>
        </div>
      </div>
    )
}