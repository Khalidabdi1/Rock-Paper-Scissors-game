import { useState } from "react";


export default function MultipleSelect() {
 const [select,setSelect]=useState(" ")
console.log(select)
  return (
    <div style={{margin:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}>
       <h3 style={{marginRight:"10px"}}>Choose one :</h3>

      <select value={select} onChange={(e)=>{setSelect(e.target.value)}}>
        <option>paper</option>
        <option>rook</option>
        <option>scissors</option>


      </select>
      
      
    </div>
  );
}
