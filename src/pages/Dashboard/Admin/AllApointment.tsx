import { toast } from "sonner";
import { adminAssets } from "../../../assets/assets_admin/adminAssets";
import {
  useCancleAppointmentMutation,
  useGetAllAppointmentsQuery,
} from "../../../redux/features/appointment/appointmentManagement";
import { calculateAge } from "../../../utils/global";

const AllApointment = () => {
  const { data } = useGetAllAppointmentsQuery("");
  const appointments = data?.data;
  // console.log(data);

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

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="text-lg font-semibold mb-3">All Apointment</p>
      <div className="bg-white border rounder border-gray-100 text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-5 border-b border-gray-100">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/* show this div in map function */}
        {appointments?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-600 py-3 px-5 border-b border-gray-100 hover:bg-gray-50"
          >
            <p className="max-sm:hidden">{index + 1}</p>

            <div className="flex items-center gap-2">
              <img
                src={item?.docId?.image}
                alt=""
                className="w-10 rounded-full"
              />{" "}
              <p>{item.docId.name}</p>
            </div>
            <p className="max-sm:hidden">
              {calculateAge(item.userId.dateOfBirth)}
            </p>
            <p>
              {item.slotDate} - {item.slotTime}
            </p>
            <div className="flex items-center gap-2">
              <img
                src={item?.userId?.image}
                alt=""
                className="w-10 rounded-full bg-gray-200"
              />{" "}
              <p>{item.userId?.name}</p>
            </div>
            <p>{item.docId.fees}</p>

            {item.cancelled ? (
              <p className="text-red-500 text-sm font-medium">cancelled</p>
            ) : (
              <img
                onClick={() => handleCancel(item._id, item.cancelled)}
                src={adminAssets.cancel_icon}
                alt=""
                className="w-10 cursor-pointer"
              />
            )}

            {/* when click the cancle button appointment will canceled. [cancelled == true] */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApointment;
