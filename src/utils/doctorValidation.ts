import { z } from "zod";

export const DoctorValidation = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }),
  password: z.string({
    required_error: "Password is reqauired",
  }),
  speciality: z.string({
    required_error: "Speciality is reqauired",
  }),
  experience: z.string({
    required_error: "Experience is reqauired",
  }),
  degree: z.string({
    required_error: "Degree is reqauired",
  }),
  about: z.string({
    required_error: "About is reqauired",
  }),
  fees: z.number({
    required_error: "Fees is reqauired",
  }),
  address: z.string({
    required_error: "Address is reqauired",
  }),
  image: z.string({
    required_error: "Image is reqauired",
  }),
});
