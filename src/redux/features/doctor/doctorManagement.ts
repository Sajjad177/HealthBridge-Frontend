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
  }),
});

export const { useGetAllDoctorsQuery } = doctorManagement;
