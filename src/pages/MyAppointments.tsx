import { toast } from "sonner";
import {
  useCancleAppointmentMutation,
  useGetUserOwnAppointmentsQuery,
} from "../redux/features/appointment/appointmentManagement";

const MyAppointments = () => {
  const { data, isLoading } = useGetUserOwnAppointmentsQuery("");
  const appointments = data?.data;
  const [cancleAppointment] = useCancleAppointmentMutation();

  const handleCancel = async (id: string, cancelledStatus: boolean) => {
    try {
      const res = await cancleAppointment({
        id,
        data: { cancelled: !cancelledStatus },
      }).unwrap();

      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p className="text-xl pb-3 mt-12 font-medium text-zinc-700 border-b border-zinc-200">
        My Appointments
      </p>

      <div>
        {appointments?.map((item: any, index: number) => {
          const isCancelled = item.cancelled;
          const isPaid = item.payment;
          const isCompleted = item.isCompleted;

          const showPayAndCancelBtns = !isCancelled && !isPaid && !isCompleted;
          const showPaidBtn = isPaid && !isCancelled;

          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b border-zinc-200"
            >
              {/* Doctor Image */}
              <div>
                <img
                  src={item.docId.image}
                  alt={item.docId.name}
                  className="w-32 bg-indigo-50 rounded"
                />
              </div>

              {/* Appointment Info */}
              <div className="flex-1 text-sm text-gray-700 space-y-1">
                <p className="text-lg font-semibold text-gray-900">
                  {item.docId.name}
                </p>
                <p className="text-gray-600">{item.docId.speciality}</p>
                <p className="text-gray-500">{item.docId.address}</p>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">Date & Time:</span>{" "}
                  <span className="text-gray-800">
                    {item.slotDate} | {item.slotTime}
                  </span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 justify-end">
                {showPaidBtn && (
                  <button className="sm:min-w-48 py-2 border border-green-500 rounded text-green-500 font-medium">
                    Paid
                  </button>
                )}

                {showPayAndCancelBtns && (
                  <>
                    <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-stone-500 rounded cursor-pointer hover:bg-[#5f5fff] hover:text-white transition-all duration-300 ease-in-out">
                      Pay Online
                    </button>
                    <button
                      onClick={() => handleCancel(item._id, item.cancelled)}
                      className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-stone-500 rounded cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      Cancel Appointment
                    </button>
                  </>
                )}

                {isCancelled && (
                  <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500 font-medium cursor-not-allowed">
                    Appointment Cancelled
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyAppointments;
