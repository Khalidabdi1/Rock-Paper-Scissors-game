import { useEffect, useRef, useState } from "react"


export default function Photo({click,changeClick,seletValue,Add}){

let [computer,setComputer]=useState(null)
    let photoOne=useRef(null)
    let photoTwo=useRef(null)




    useEffect(()=>{
          
        if(click){

  let ChooseComputer=["rock","scissors","paper"]
    let randomChoose=Math.floor(Math.random() *3)
    let computerValue=ChooseComputer[randomChoose]

        console.log(computer)
setComputer(computerValue)


console.log("useEffect reRender")
setTimeout(()=>{
  

console.log("reRender photo")
        ///who win ?
    
    console.log(`computerValue choosee this ${computerValue} and user choose is ${seletValue}`)
  

if(seletValue==="paper" && computerValue==="rock"){
Add(1,0)
}else if(seletValue==="paper" && computerValue==="scissors"){
Add(0,1)
}else if(seletValue==="paper" && computerValue==="paper"){
Add(0,0)
}else if(seletValue==="rock" && computerValue==="paper"){
    Add(0,1)
}else if(seletValue==="rock" && computerValue==="scissors"){
    Add(1,0)
}else if (seletValue==="rock" && computerValue==="rock"){
Add(0,0)
}else if(seletValue==="scissors" && computerValue==="rock"){
    Add(0,1)
}else if(seletValue==="scissors" && computerValue==="paper"){
    Add(1,0)
}else if(seletValue==="scissors" && computerValue==="scissors"){
    Add(0,0)
}


        },1800)
    



        }








    },[click])
    


    function repetitionPhotoOne(){
 setTimeout(()=>{
             photoOne.current.src="/rock.png"
            },100)

            setTimeout(()=>{
             photoOne.current.src="/scissors.png"
            },200)

            setTimeout(()=>{
             photoOne.current.src="/paper.png"
            },300)

             setTimeout(()=>{
             photoOne.current.src="/rock.png"
            },400)

            setTimeout(()=>{
             photoOne.current.src="/scissors.png"
            },500)

            setTimeout(()=>{
             photoOne.current.src="/paper.png"
            },600)

             setTimeout(()=>{
             photoOne.current.src="/rock.png"
            },700)

            setTimeout(()=>{
             photoOne.current.src="/scissors.png"
            },800)

            setTimeout(()=>{
             photoOne.current.src="/paper.png"
            },900)


             setTimeout(()=>{
             photoOne.current.src="/rock.png"
            },1000)

            setTimeout(()=>{
             photoOne.current.src="/scissors.png"
            },1200)

            setTimeout(()=>{
             photoOne.current.src="/paper.png"
            },1300)

             setTimeout(()=>{
             photoOne.current.src="/rock.png"
            },1400)

            setTimeout(()=>{
             photoOne.current.src="/scissors.png"
            },1500)

             setTimeout(()=>{
             photoOne.current.src="/paper.png"
            },1600)


    }

   function  repetitionPhotoTwo(){
 setTimeout(()=>{
             photoTwo.current.src="/rock.png"
            },100)

            setTimeout(()=>{
             photoTwo.current.src="/scissors.png"
            },200)

            setTimeout(()=>{
             photoTwo.current.src="/paper.png"
            },300)

             setTimeout(()=>{
             photoTwo.current.src="/rock.png"
            },400)

            setTimeout(()=>{
             photoTwo.current.src="/scissors.png"
            },500)

            setTimeout(()=>{
             photoTwo.current.src="/paper.png"
            },600)

             setTimeout(()=>{
             photoTwo.current.src="/rock.png"
            },700)

            setTimeout(()=>{
             photoTwo.current.src="/scissors.png"
            },800)

            setTimeout(()=>{
             photoTwo.current.src="/paper.png"
            },900)


             setTimeout(()=>{
             photoTwo.current.src="/rock.png"
            },1000)

            setTimeout(()=>{
             photoTwo.current.src="/scissors.png"
            },1200)

            setTimeout(()=>{
             photoTwo.current.src="/paper.png"
            },1300)

             setTimeout(()=>{
             photoTwo.current.src="/rock.png"
            },1400)

            setTimeout(()=>{
             photoTwo.current.src="/scissors.png"
            },1500)

             setTimeout(()=>{
             photoTwo.current.src="/paper.png"
            },1600)

           
    }
    if(click){

        //for animation
        if(photoOne.current ||photoTwo.current){
         repetitionPhotoOne()
         repetitionPhotoTwo()

        }
        
        //show photo with your select
        setTimeout(()=>{
   if(photoOne.current ||photoTwo.current){
         if(seletValue==="paper"){
         photoOne.current.src="/paper.png"
        }else if(seletValue==="scissors"){
         photoOne.current.src="/scissors.png"

        }else if(seletValue==="rock"){
        photoOne.current.src="/rock.png"


         }
        }

        },1700)
        //computerValue choose

        setTimeout(()=>{
               if(photoOne.current ||photoTwo.current){
         if(computer==="paper"){
         photoTwo.current.src="/paper.png"
        }else if(computer==="scissors"){
         photoTwo.current.src="/scissors.png"

        }else if(computer==="rock"){
        photoTwo.current.src="/rock.png"


         }
        }
        },1700)



        
       


setTimeout(()=>{
        changeClick(false)
 
},2000)

    }
    return (
        <div className="card-continer" style={{display:"flex",alignItems:"center",justifyContent:"center",height:"400px"}}>
        <div className="card-photo" style={{display:"flex" ,width:"90%",height:"400px",justifyContent:"space-between"}}>

            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} className="img-one">
            <img src="/paper.png" alt="paper" style={{width:"300px",height:"300px"}} ref={photoOne} ></img>
            <h3>You</h3>
            </div>

            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} className="img-two">
            <img src="/paper.png" alt="paper" style={{width:"300px",height:"300px"}} ref={photoTwo} ></img>
             <h3>computer</h3>

            </div>

      

        </div>
        </div>
    )
}