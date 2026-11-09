import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container navbar">
        <Link href="/" className="logo">
          Student<span>Hub</span>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/students">Students</Link>
        </nav>
      </div>
    </header>
  );
}