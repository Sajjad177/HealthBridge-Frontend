import { baseApi } from "../../api/baseApi";

const userManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useUpdateUserProfileMutation,
  useGetSingleUserQuery,
} = userManagement;
