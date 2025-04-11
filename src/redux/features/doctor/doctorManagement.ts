import { baseApi } from "../../api/baseApi";

const doctorManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDoctors: builder.query({
      query: () => ({
        url: "/doctor",
        method: "GET",
      }),
      providesTags: ["Doctor"],
    }),
    addDoctor: builder.mutation({
      query: (data) => ({
        url: "/doctor/add-doctor",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Doctor"],
    }),
  }),
});


export const { useGetAllDoctorsQuery, useAddDoctorMutation } = doctorManagement;
