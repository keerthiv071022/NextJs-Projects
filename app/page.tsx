import Link from "next/link";

export default function Home(){

    return(
        <div>
            <h1>Home Page</h1>
            <p>This is the Home Page</p>
            <Link href="/about">Go to About</Link>
            <br/>
            <Link href="/contact">Go to Contact</Link>
            <br/>
        </div>
    )
}