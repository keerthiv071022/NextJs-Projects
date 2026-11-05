import Link from "next/link";
import  type {ReactNode} from "react";

export default function RootLayout({children}:{children:ReactNode}){
  return(
    <html lang="en">
      <body>
        <header>
          <h1>
        My college website
          </h1>
          <nav>
            <Link href='/'>Home</Link>
            {"|"}
            <Link href='/about'>About</Link>
            {"|"}
            <Link href='/contact'>Contact</Link>

          </nav>
        </header>
        <hr/>
        <main>
          {children}
        </main>
        <hr/>
        <footer>
          <p>Copyright 2026 @ my college</p>
          
        </footer>
      </body>






    </html>
  )
}
