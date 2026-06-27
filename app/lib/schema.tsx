import {z} from "zod"

export const studentSchema = z.object({
  firstName: z.string().min(2, "Please enter minimum 2 characters"),
  lastName: z.string().min(2, "Please enter minimum 2 characters"),
  studentId: z.string().regex(/^\d{10}$/, "Student ID must be a 10-digit number"),
  grade: z.number().max(12).min(10),
  dateOfBirth: z.date().min(new Date("2007-09-01"), {message : "must be younger than 19 as of September"}).max(new Date("2011-09-01"), {message : "must be older than 15 as of September"})
  
});

export type StudentSchema = z.infer<typeof studentSchema>
