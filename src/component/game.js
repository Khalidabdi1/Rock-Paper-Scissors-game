import Photo from "./photo"
import Result from "./Result."
import MultipleSelect from "./select"

export default function Game(){
    console.log(Math.floor(Math.random() *3))

    return(
    <>
   
   <div>
    <Result/>
    <Photo/>
    <MultipleSelect/>

    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <button>Start </button>
    </div>

   </div>

    </>

    )
}