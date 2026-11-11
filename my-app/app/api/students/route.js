
import { NextResponse } from "next/server";

let students = [
  { id: 1, name: "Anu", age: 20, course: "MCA" },
  { id: 2, name: "Rahul", age: 22, course: "BCA" },
  { id: 3, name: "Meera", age: 21, course: "MBA" }
];

// GET - View all students
export async function GET() {
  return NextResponse.json(students);
}

// POST - Add a student
export async function POST(request) {
  const body = await request.json();

  const student = {
    id: Date.now(),
    ...body
  };

  students.push(student);

  return NextResponse.json(
    {
      message: "Student added successfully",
      student: student
    },
    { status: 201 }
  );
}

// PUT - Update a student
export async function PUT(request) {
  const body = await request.json();

  const student = students.find(
    (s) => s.id === Number(body.id)
  );

  if (!student) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  student.name = body.name;
  student.age = body.age;
  student.course = body.course;

  return NextResponse.json(
    {
      message: "Student updated successfully",
      student: student
    },
    { status: 200 }
  );
}

// DELETE - Delete a student
export async function DELETE(request) {
  const body = await request.json();

  const index = students.findIndex(
    (s) => s.id === Number(body.id)
  );

  if (index === -1) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  const deletedStudent = students.splice(index, 1);

  return NextResponse.json(
    {
      message: "Student deleted successfully",
      student: deletedStudent[0]
    },
    { status: 200 }
  );
}
