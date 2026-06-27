import {z} from "zod"

export const studentSchema = z.object({
  firstName: z.string().min(2, "Please enter minimum 2 characters"),
  lastName: z.string().min(2, "Please enter minimum 2 characters"),
  grade: z.number().max(100).nonnegative,
  dateOfBirth: z.date().min(new Date("2007-09-01"), {message : "must be younger than 19 as of September"}).max(new Date("2020-09-01"), {message : "must be older than 6 as of September"})
});

export type StudentSchema = z.infer<typeof studentSchema>

