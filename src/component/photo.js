import { useRef } from "react"


export default function Photo({click,changeClick,seletValue,Add}){


    let photoOne=useRef(null)
    let photoTwo=useRef(null)
let randomChoose=Math.floor(Math.random() *3)
    let ChooseComputer=["rock","scissors","paper"]

    let computer=ChooseComputer[randomChoose]
    

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

        //computer choose



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


        ///who win ?
    console.log(`computer choosee this ${computer} and user choose is ${seletValue}`)

if(seletValue==="paper" && computer==="rock"){
Add(1,0)
}else if(seletValue==="paper" && computer==="scissors"){
Add(0,1)
}else if(seletValue==="paper" && computer==="paper"){
Add(0,0)
}else if(seletValue==="rock" && computer==="paper"){
    Add(0,1)
}else if(seletValue==="rock" && computer==="scissors"){
    Add(1,0)
}else if (seletValue==="rock" && computer==="rock"){
Add(0,0)
}else if(seletValue==="scissors" && computer==="rock"){
    Add(0,1)
}else if(seletValue==="scissors" && computer==="paper"){
    Add(1,0)
}else if(seletValue==="scissors" && computer==="scissors"){
    Add(0,0)
}

        },1800)


setTimeout(()=>{
        changeClick(false)
 
},2000)
    }
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div className="card-photo" style={{display:"flex" ,width:"90%",height:"400px",justifyContent:"space-between"}}>

            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <img src="/paper.png" alt="paper" style={{width:"300px",height:"300px"}} ref={photoOne}></img>
            <h3>You</h3>
            </div>

            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <img src="/paper.png" alt="paper" style={{width:"300px",height:"300px"}} ref={photoTwo}></img>
             <h3>computer</h3>

            </div>

      

        </div>
        </div>
    )
}