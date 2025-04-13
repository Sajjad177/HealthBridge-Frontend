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
    toggleAvability: builder.mutation({
      query: ({ id, available }) => ({
        url: `/doctor/available/${id}`,
        method: "PUT",
        body: available,
      }),
      invalidatesTags: ["Doctor"],
    }),
    getSingleDoctor: builder.query({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "GET",
      }),
      providesTags: ["Doctor"],
    }),
    updateDoctorProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/doctor/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Doctor"],
    }),
  }),
});

export const {
  useGetAllDoctorsQuery,
  useAddDoctorMutation,
  useToggleAvabilityMutation,
  useGetSingleDoctorQuery,
  useUpdateDoctorProfileMutation,
} = doctorManagement;
