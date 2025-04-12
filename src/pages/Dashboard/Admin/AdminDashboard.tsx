import { toast } from "sonner";
import { adminAssets } from "../../../assets/assets_admin/adminAssets";
import {
  useCancleAppointmentMutation,
  useGetAllAppointmentsQuery,
} from "../../../redux/features/appointment/appointmentManagement";
import { useGetAllDoctorsQuery } from "../../../redux/features/doctor/doctorManagement";

const AdminDashboard = () => {
  const { data, isLoading: isDocLoading } = useGetAllDoctorsQuery("");
  const doctors = data?.data;

  const { data: appointmentData, isLoading } = useGetAllAppointmentsQuery("");
  const appointments = appointmentData?.data;

  const totalPatients = appointments?.filter(
    (a: any) => a.isCompleted === true
  )?.length;

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

  if (isDocLoading || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-5">
      <div className="flex flex-wrap gap-5">
        <div className="admnin-dashboard-card">
          <img className="w-14" src={adminAssets.doctor_icon} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {doctors?.length}
            </p>
            <p className="text-gray-400">Doctors</p>
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
              {totalPatients}
            </p>
            <p className="text-gray-400">Patients</p>
          </div>
        </div>
      </div>

      <div className="mt-15 bg-white max-w-2xl">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100">
          <img src={adminAssets.list_icon} alt="" />
          <p className="text-gray-600 font-semibold">Latest Appointments</p>
        </div>

        <div className="pt-5 border border-t-0 border-gray-100">
          {/* enter this in map function */}
          {appointments?.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center gap-5 px-5 py-3 hover:bg-gray-100"
            >
              <img
                src={item?.docId?.image}
                alt=""
                className="w-14 rounded-full"
              />
              <div className="flex-1 text-sm">
                <p className="text-gray-800 font-medium">{item.docId.name}</p>
                <p className="text-gray-600">
                  {item.slotDate} - {item.slotTime}
                </p>
              </div>
              {/* after function add uncomment this if cancelled then show a delete icon for permanent delete */}

              {item.cancelled ? (
                <p className="text-red-500 text-xs font-medium">cancelled</p>
              ) : (
                <img
                  onClick={() => handleCancel(item._id, item.cancelled)}
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

export default AdminDashboard;
