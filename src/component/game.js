import { useState } from "react"
import Photo from "./photo"
import Result from "./Result."
import MultipleSelect from "./select"

export default function Game(){
const[handleClick,setHandleClick]=useState(false)
const[userResult,setUserResult]=useState(0)
const[computerResult,setComputerResult]=useState(0)
const[select,setSelect]=useState("")

//value from select 
function getSelection(value){
    setSelect(value)
}


function AddToResult(addUser,addComputer){
    setTimeout(() => {
        setUserResult(userResult+addUser)
setComputerResult(computerResult+addComputer)
    }, 1600);

}
    return(
   
   
   <div>
    <Result user={userResult} computer={computerResult}/>
    <Photo click={handleClick} changeClick={setHandleClick} seletValue={select} Add={AddToResult} />
    <MultipleSelect getSelection={getSelection}/>

    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <button disabled={handleClick? true:false} onClick={()=>{
     
        setHandleClick(true)
       
        }}>Start </button>
    </div>

   </div>

  

    )
}