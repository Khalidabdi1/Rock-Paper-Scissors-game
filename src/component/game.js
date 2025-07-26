import Photo from "./photo"
import Result from "./Result."

export default function Game(){
    console.log(Math.floor(Math.random() *3))

    return(
    <>
   
   <div>
    <Result/>
    <Photo/>
   </div>

    </>

    )
}