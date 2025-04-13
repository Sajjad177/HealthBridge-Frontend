import { baseApi } from "../../api/baseApi";

const appointmentManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppointments: builder.query({
      query: () => ({
        url: "/appointment/all",
        method: "GET",
      }),
      providesTags: ["Appointment"],
    }),
    addAppointment: builder.mutation({
      query: (data) => ({
        url: "/appointment/create-appointment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Appointment"],
    }),
    getUserOwnAppointments: builder.query({
      query: (userId) => ({
        url: `/appointment/${userId}`,
        method: "GET",
      }),
      providesTags: ["Appointment"],
    }),
    cancleAppointment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/appointment/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Appointment"],
    }),
    getDoctorOwnAppointments: builder.query({
      query: (id) => ({
        url: `/appointment/doctor/${id}`,
        method: "GET",
      }),
      providesTags: ["Appointment"],
    }),
    completeAppointment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/appointment/complete-appointment/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Appointment"],
    }),
  }),
});

export const {
  useGetAllAppointmentsQuery,
  useAddAppointmentMutation,
  useGetUserOwnAppointmentsQuery,
  useCancleAppointmentMutation,
  useGetDoctorOwnAppointmentsQuery,
  useCompleteAppointmentMutation, 
} = appointmentManagement;
