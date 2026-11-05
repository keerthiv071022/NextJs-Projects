"use client";
import {useState} from "react";
export default function Counter(){
const[count,setCount]=useState(0);
return(
    <div>
        <h1>counter application</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>

      <button onClick={()=>setCount(count-1)}>Decrease</button>

    
    </div>
)
}