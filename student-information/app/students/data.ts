export interface Student {
  id: string;
  name: string;
  age: number;
  course: string;
  email: string;
  phone: string;
  city: string;
  year: string;
  description: string;
}

export const students: Student[] = [
  {
    id: "1",
    name: "Arun Kumar",
    age: 20,
    course: "Computer Science",
    email: "arun@gmail.com",
    phone: "9876543210",
    city: "Kochi",
    year: "Second Year",
    description: "Interested in web development and programming.",
  },
  {
    id: "2",
    name: "Priya Sharma",
    age: 21,
    course: "Information Technology",
    email: "priya@gmail.com",
    phone: "9876543211",
    city: "Bangalore",
    year: "Third Year",
    description: "Passionate about technology and UI design.",
  },
  {
    id: "3",
    name: "Rahul Das",
    age: 19,
    course: "Computer Applications",
    email: "rahul@gmail.com",
    phone: "9876543212",
    city: "Chennai",
    year: "First Year",
    description: "Enjoys learning JavaScript and Python.",
  },
  {
    id: "4",
    name: "Sneha Nair",
    age: 22,
    course: "Business Administration",
    email: "sneha@gmail.com",
    phone: "9876543213",
    city: "Thrissur",
    year: "Final Year",
    description: "Interested in management and entrepreneurship.",
  },
  {
    id: "5",
    name: "Vishnu Raj",
    age: 20,
    course: "Computer Science",
    email: "vishnu@gmail.com",
    phone: "9876543214",
    city: "Kozhikode",
    year: "Second Year",
    description: "Enjoys coding and developing applications.",
  },
  {
    id: "6",
    name: "Anjali Menon",
    age: 21,
    course: "Information Technology",
    email: "anjali@gmail.com",
    phone: "9876543215",
    city: "Alappuzha",
    year: "Third Year",
    description: "Interested in data science and technology.",
  },
];