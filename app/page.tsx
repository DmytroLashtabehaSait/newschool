"use client"

import { useState } from "react";
import { students } from "./lib/studentsList";

export default function Home() {
  const [studentResponsive, setStudentResponsive ] = useState(students)
  return (
    <main className="flex-1 ">
      <div className="bg-sky-100 p-2 m-5 rounded-xl">
        <h1 className="ml-5 mt-5 font-bold ">Students:</h1>
        {studentResponsive.map((student) => (
          <div
            key={student.id}
            className="flex-col flex bg-sky-200 m-4 p-2 rounded-2xl"
          >
            <p className="text-slate-700 font-bold">{student.id}</p>
            <div className="flex flex-row justify-between">
              <span>
                <p>{student.firstName}  {student.lastName}</p>
              </span>
              <p>Grade: {student.grade}</p>
              <p>Born on: {student.dateOfBirth.toISOString().slice(0, 10)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-sky-100 p-2 m-5 rounded-xl">
        <h1 className="ml-5 mt-5 font-bold ">Add a new student:</h1>
        {/* implement form */}
      </div>

    </main>
  );
}
