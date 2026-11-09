import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "../data";

interface StudentDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function StudentDetails({
  params,
}: StudentDetailsProps) {
  const { id } = await params;

  const student = students.find((item) => item.id === id);

  if (!student) {
    notFound();
  }

  return (
    <div className="container page-section">
      <Link href="/students" className="back-link">
        ← Back to Students
      </Link>

      <div className="details-card">
        <div className="details-avatar">
          {student.name.charAt(0)}
        </div>

        <h1>{student.name}</h1>
        <p className="details-course">{student.course}</p>

        <div className="details-grid">
          <div>
            <span>Student ID</span>
            <h3>{student.id}</h3>
          </div>

          <div>
            <span>Age</span>
            <h3>{student.age} Years</h3>
          </div>

          <div>
            <span>Course</span>
            <h3>{student.course}</h3>
          </div>

          <div>
            <span>Academic Year</span>
            <h3>{student.year}</h3>
          </div>

          <div>
            <span>Email</span>
            <h3>{student.email}</h3>
          </div>

          <div>
            <span>Phone</span>
            <h3>{student.phone}</h3>
          </div>

          <div>
            <span>City</span>
            <h3>{student.city}</h3>
          </div>
        </div>

        <div className="description">
          <h3>About Student</h3>
          <p>{student.description}</p>
        </div>
      </div>
    </div>
  );
}