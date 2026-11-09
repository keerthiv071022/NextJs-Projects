import Link from "next/link";
import { students } from "./data";

export default function Students() {
  return (
    <div className="container page-section">
      <div className="page-heading">
        <p className="subtitle">OUR COMMUNITY</p>
        <h1>Student Directory</h1>
        <p>Explore our students and their information.</p>
      </div>

      <div className="student-grid">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <div className="student-avatar">
              {student.name.charAt(0)}
            </div>

            <h2>{student.name}</h2>

            <p>{student.course}</p>
            <p>{student.year}</p>

            <Link
              href={`/students/${student.id}`}
              className="view-button"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}