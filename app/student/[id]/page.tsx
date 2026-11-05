export default async function StudentDetails({params}:{params:Promise<{id:string}>}){
    const {id}=await params;
    return(
        <div>
            <h1>Student Details</h1>
            <p>Student Id:{id}</p>
        </div>
    )
}