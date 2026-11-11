'use client';
import { useEffect,useState } from "react";
export default function Stduents(){
    const [students,setStudents]=useState<any[]>([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res=>res.json())
        .then(data=>setStudents(data.users));
    },[]);
    return(<div>
        <h1>Students List</h1>
        {
            students.map((student)=>(<p key={student.id}>
                {student.firstName}{student.lastName}
            </p>))
        }
    </div>)
}