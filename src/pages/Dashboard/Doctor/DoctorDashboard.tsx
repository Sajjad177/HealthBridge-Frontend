import { toast } from "sonner";
import { adminAssets } from "../../../assets/assets_admin/adminAssets";
import {
  useCancleAppointmentMutation,
  useGetDoctorOwnAppointmentsQuery,
} from "../../../redux/features/appointment/appointmentManagement";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hook";
import PageLoading from "../../../components/PageLoading";

const DoctorDashboard = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data, isLoading } = useGetDoctorOwnAppointmentsQuery(user?.userId);
  const appointments = data?.data;
  console.log(appointments);

  const totalPatient =
    appointments?.filter((item: any) => item.isCompleted && !item.cancelled)
      .length || 0;

  const totalEarnings = appointments?.reduce((acc: any, item: any) => {
    if (item.isCompleted && !item.cancelled && item.payment === "Paid") {
      acc += item?.docId?.fees;
    }
    return acc;
  }, 0);

  // console.log(totalEarnings);

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
    return (
      <div className="flex justify-center items-center mt-20">
        <PageLoading />
      </div>
    );
  }

  return (
    <div className="m-5">
      <div className="flex flex-wrap gap-5">
        <div className="admnin-dashboard-card">
          <img className="w-14" src={adminAssets.earning_icon} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              ৳ {totalEarnings}
            </p>
            <p className="text-gray-400">Earnings</p>
          </div>
        </div>

        <div className="admnin-dashboard-card">
          <img src={adminAssets.appointments_icon} alt="" className="w-14" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {appointments?.length}
            </p>
            <p className="text-gray-400">Appointments</p>
          </div>
        </div>

        <div className="admnin-dashboard-card">
          <img src={adminAssets.patients_icon} alt="" className="w-14" />
          <div>
            {/* only show which are not cancelled and completed */}
            <p className="text-xl font-semibold text-gray-600">
              {totalPatient}
            </p>
            <p className="text-gray-400">Patients</p>
          </div>
        </div>
      </div>

      {/* ------- show latest booking table ---------- */}
      <div className="mt-15 bg-white max-w-2xl">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100">
          <img src={adminAssets.list_icon} alt="" />
          <p className="text-gray-600 font-semibold">Latest Booking </p>
        </div>

        <div className="pt-5 border border-t-0 border-gray-100">
          {/* enter this in map function */}
          {/* show there patient data */}
          {appointments?.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center gap-5 px-5 py-3 hover:bg-gray-100"
            >
              <img
                src={item.userId?.image}
                alt=""
                className="w-14 rounded-full"
              />
              <div className="flex-1 text-sm">
                <p className="text-gray-800 font-medium">{item.userId?.name}</p>
                <p className="text-gray-600">
                  {item.slotDate} - {item.slotTime}
                </p>
              </div>
              {/* after function add uncomment this if cancelled then show a delete icon for permanent delete */}

              {item.isCompleted ? (
                <p className="text-green-500 text-[14px] font-medium">
                  Completed
                </p>
              ) : item.cancelled ? (
                <p className="text-red-500 text-[14px] font-medium">
                  Cancelled
                </p>
              ) : (
                <img
                  onClick={() => handleCancel(item._id, item?.cancelled)}
                  src={adminAssets.cancel_icon}
                  alt=""
                  className="w-10 cursor-pointer"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
