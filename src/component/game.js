import { useState } from "react"
import Photo from "./photo"
import Result from "./Result."
import MultipleSelect from "./select"

export default function Game(){
    console.log(Math.floor(Math.random() *3))
const[handleClick,setHandleClick]=useState(false)
const[userResult,setUserResult]=useState(0)
const[computerResult,setComputerResult]=useState(0)

//value from select 
function getSelection(value){
}


    return(
    <>
   
   <div>
    <Result user={userResult} computer={computerResult}/>
    <Photo click={handleClick} changeClick={setHandleClick}/>
    <MultipleSelect getSelection={getSelection}/>

    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <button onClick={()=>{
        setHandleClick(true)
        
        }}>Start </button>
    </div>

   </div>

    </>

    )
}