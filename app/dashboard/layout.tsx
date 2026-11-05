import  type {ReactNode} from "react";

export default function dashboardLayout({children}:{children:ReactNode}){
    return(
        <div>
            <h1>Dashboard menu</h1>
            <nav>
                <p>Dashboard</p>
                <p>Profile</p>
            </nav>
        <hr/>
        {children}
        </div>

    )
}