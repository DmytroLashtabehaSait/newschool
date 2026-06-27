"use client";

import { useState } from "react";
import { studentSchema } from "../lib/schema";
import type { Student } from "../lib/studentsList";

type AddStudentFormProps = {
	students: Student[];
	onAdd: (student: Student) => void;
};

const AddStudentForm = ({ students, onAdd }: AddStudentFormProps) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [studentId, setStudentId] = useState("");
	const [grade, setGrade] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const result = studentSchema.safeParse({
			firstName,
			lastName,
			studentId,
			grade,
			dateOfBirth
		});

		if (!result.success) {
			const fieldErrors: Record<string, string> = {};
			for (const issue of result.error.issues) {
				const field = String(issue.path[0]);
				if (!fieldErrors[field]) {
					fieldErrors[field] = issue.message;
				}
			}
			setErrors(fieldErrors);
			return;
		}

		const numericId = Number(result.data.studentId);
		if (students.some(s => s.id === numericId)) {
			setErrors({ studentId: "A student with this ID already exists" });
			return;
		}

		onAdd({
			id: numericId,
			firstName: result.data.firstName,
			lastName: result.data.lastName,
			grade: result.data.grade,
			dateOfBirth: result.data.dateOfBirth
		});

		setFirstName("");
		setLastName("");
		setStudentId("");
		setGrade("");
		setDateOfBirth("");
		setErrors({});
	};

	const inputClass = "rounded-lg border border-sky-300 bg-white px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400";

	return (
		<form onSubmit={handleSubmit} className="m-4 flex flex-col gap-3">
			<div className="flex flex-col gap-1">
				<label htmlFor="firstName" className="font-medium text-slate-700">
					First Name
				</label>
				<input id="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className={inputClass} />
				{errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="lastName" className="font-medium text-slate-700">
					Last Name
				</label>
				<input id="lastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)} className={inputClass} />
				{errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="studentId" className="font-medium text-slate-700">
					Student ID
				</label>
				<input id="studentId" type="text" value={studentId} onChange={e => setStudentId(e.target.value)} className={inputClass} placeholder="10-digit number" />
				{errors.studentId && <p className="text-sm text-red-600">{errors.studentId}</p>}
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="grade" className="font-medium text-slate-700">
					Grade
				</label>
				<select id="grade" value={grade} onChange={e => setGrade(e.target.value)} className={inputClass}>
					<option value="">Select grade</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
				</select>
				{errors.grade && <p className="text-sm text-red-600">{errors.grade}</p>}
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="dateOfBirth" className="font-medium text-slate-700">
					Date of Birth
				</label>
				<input id="dateOfBirth" type="date" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} className={inputClass} />
				{errors.dateOfBirth && <p className="text-sm text-red-600">{errors.dateOfBirth}</p>}
			</div>

			<button type="submit" className="mt-2 w-fit rounded-lg bg-sky-500 px-5 py-2 font-medium text-white hover:bg-sky-600">
				Add Student
			</button>
		</form>
	);
};

export default AddStudentForm;
