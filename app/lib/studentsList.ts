export type Student = {
	firstName: string;
	lastName: string;
	grade: number;
	dateOfBirth: Date;
	id: number;
};

//credit to AI for filling in this
export const students = [
	{
		firstName: "John",
		lastName: "Doe",
		id: 1234567890,
		grade: 10,
		dateOfBirth: new Date("2007-03-15")
	},
	{
		firstName: "Jane",
		lastName: "Smith",
		id: 1234567891,
		grade: 11,
		dateOfBirth: new Date("2006-07-22")
	},
	{
		firstName: "Peter",
		lastName: "Jones",
		id: 1234567892,
		grade: 9,
		dateOfBirth: new Date("2008-11-01")
	},
	{
		firstName: "Alice",
		lastName: "Brown",
		id: 1234567893,
		grade: 12,
		dateOfBirth: new Date("2005-01-30")
	},
	{
		firstName: "Michael",
		lastName: "Davis",
		id: 1234567894,
		grade: 10,
		dateOfBirth: new Date("2007-09-10")
	}
];
