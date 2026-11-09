import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <p className="subtitle">WELCOME TO STUDENTHUB</p>

          <h1>
            Your Learning Journey
            <br />
            Starts Here
          </h1>

       

          <Link href="/students" className="button">
            Explore Students
          </Link>
        </div>
      </section>

    
    </div>
  );
}