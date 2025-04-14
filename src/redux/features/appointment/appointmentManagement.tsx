import { baseApi } from "../../api/baseApi";

const appointmentManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPayment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/appointment/payment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Appointment"],
    }),
    verifyPayment: builder.mutation({
      query: (order_id: string) => ({
        url: "/appointment/verify-payment",
        method: "GET",
        params: { order_id },
      }),
      invalidatesTags: ["Appointment"],
    }),
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
  useAddPaymentMutation,
  useVerifyPaymentMutation,
  useGetAllAppointmentsQuery,
  useAddAppointmentMutation,
  useGetUserOwnAppointmentsQuery,
  useCancleAppointmentMutation,
  useGetDoctorOwnAppointmentsQuery,
  useCompleteAppointmentMutation,
} = appointmentManagement;
