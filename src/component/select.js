import { useEffect, useState } from "react";


export default function MultipleSelect({getSelection}) {
 const [select,setSelect]=useState("")
 console.log(`from select ${select}`)

 useEffect(()=>{

 getSelection(select)

 },[select])

  return (
    <div style={{margin:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}>
       <h3 style={{marginRight:"10px"}}>Choose one :</h3>

      <select value={select} onChange={(e)=>{
        setSelect(e.target.value)}
        
        }>
          <option value={""}>---choose one----</option>
        <option value={"paper"}>paper</option>
        <option value={"rock"}>rock</option>
        <option value={"scissors"}>scissors</option>


      </select>

      
    </div>
  );
}
