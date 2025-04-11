import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/login-user",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    doctorLogin: builder.mutation({
      query: (doctorData) => ({
        url: "/auth/login-doctor",
        method: "POST",
        body: doctorData,
      }),
      invalidatesTags: ["Doctor"],
    }),
  }),
});

export const { useLoginUserMutation, useDoctorLoginMutation } = authApi;
