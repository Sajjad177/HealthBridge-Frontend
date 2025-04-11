export interface User {
  _id: string;
  userId: string;
  role: "user" | "admin" | "doctor";
}
