import { useParams } from "react-router-dom";
import { assets, currency, daysOfWeek } from "../assets/assets_frontend/assets";
import { useEffect, useState } from "react";
import RelatedDoctors from "../components/RelatedDoctors";
import {
  useGetAllDoctorsQuery,
  useGetSingleDoctorQuery,
} from "../redux/features/doctor/doctorManagement";
import { useAppSelector } from "../redux/hook";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useAddAppointmentMutation } from "../redux/features/appointment/appointmentManagement";
import { toast } from "sonner";

const Appointment = () => {
  const { id } = useParams();
  const [docSlots, setDocSlots] = useState<any[][]>([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const { data: allDoctorsData, isLoading } = useGetAllDoctorsQuery(undefined);
  const doctors = allDoctorsData?.data || [];

  const {
    data: docData,
    isLoading: isDocLoading,
    refetch,
  } = useGetSingleDoctorQuery(id);
  const doctor = docData?.data;

  const user = useAppSelector(selectCurrentUser);
  const [createAppointment] = useAddAppointmentMutation();

  const getAvailableSlots = async () => {
    if (!doctor) return;

    const slotsArray: any[][] = [];
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      currentDate.setHours(10, 0, 0, 0);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        let now = new Date();
        if (now.getHours() >= 10) {
          currentDate.setHours(now.getHours() + 1);
          currentDate.setMinutes(now.getMinutes() >= 30 ? 30 : 0);
        }
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slotsArray.push(timeSlots);
    }

    setDocSlots(slotsArray);
  };

  useEffect(() => {
    getAvailableSlots();
  }, [doctor]);

  const handleAppointment = async () => {
    try {
      const selectedSlot = docSlots[slotIndex]?.find(
        (slot: any) => slot.time === slotTime
      );

      if (!selectedSlot) {
        toast.error("Please select a time slot.");
        return;
      }

      const appointmentData = {
        docId: doctor?._id,
        userId: user?.userId,
        amount: doctor?.fees,
        slotDate: selectedSlot?.dateTime.toDateString(),
        slotTime: selectedSlot?.time,
      };

      const res = await createAppointment(appointmentData).unwrap();

      toast.success(res?.message || "Appointment booked successfully.");
      setSlotTime(""); // Reset selected slot
      refetch(); // Refresh doctor data
    } catch (error: any) {
      // Check for error structure
      const errorMessage =
        error?.data?.message ||
        error?.data?.error?.message ||
        "Something went wrong. Please try again.";

      toast.error(errorMessage);
    }
  };

  if (isLoading || isDocLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            src={doctor?.image}
            alt="Doctor"
            className="bg-primary w-full sm:max-w-72 rounded-lg"
          />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {doctor?.name || "Doctor Name"}{" "}
            <img src={assets.verified_icon} alt="Verified" className="w-5" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {doctor?.degree || "Doctor Degree"} -{" "}
              {doctor?.speciality || "Speciality"}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {doctor?.experience || "2 years"}
            </button>
          </div>

          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="Info" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {doctor?.about || "Lorem ipsum dolor sit amet consectetur..."}
            </p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment Fee:{" "}
            <span className="text-gray-600">
              {currency} {doctor?.fees || "120"}
            </span>
          </p>
        </div>
      </div>

      {/* --------- Booking Slot -------------- */}
      <div className="sm:ml-72 sm:pl-4 mt-10 font-medium text-gray-700">
        <p>Booking slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
          {docSlots.map((item: any, idx: number) => (
            <div
              onClick={() => setSlotIndex(idx)}
              key={idx}
              className={`text-center py-4 px-3 min-w-20 rounded-lg cursor-pointer text-sm ${
                slotIndex === idx
                  ? "bg-primary text-white font-semibold"
                  : "border border-gray-300 text-gray-700"
              }`}
            >
              <p>
                {item[0] && daysOfWeek[new Date(item[0].dateTime).getDay()]}
              </p>
              <p className="text-xs">
                {item[0] && new Date(item[0].dateTime).getDate()}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3 justify-start">
          {docSlots[slotIndex]?.map((item: any, idx: number) => {
            const slotDateKey = `${item.dateTime.getDate()}_${
              item.dateTime.getMonth() + 1
            }_${item.dateTime.getFullYear()}`;
            const isBooked = doctor?.slots_booked?.[slotDateKey]?.includes(
              item.time
            );

            const isSelected = item.time === slotTime;
            const isDisabled = isBooked;

            return (
              <p
                key={idx}
                onClick={() => {
                  if (!isDisabled) setSlotTime(item.time);
                }}
                className={`
                  text-sm font-medium px-5 py-2 rounded-lg transition-all duration-200
                  ${
                    isSelected && !isDisabled
                      ? "bg-primary text-white shadow-md"
                      : ""
                  }
                  ${
                    isDisabled
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "cursor-pointer border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {item.time}
              </p>
            );
          })}
        </div>
        <button
          onClick={handleAppointment}
          disabled={!doctor?.available}
          className={`text-sm font-light px-14 py-3 rounded-full my-6 ${
            doctor?.available
              ? "bg-primary text-white cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {doctor?.available ? "Book an appointment" : "Not available"}
        </button>
      </div>

      {/* Related Doctors */}
      {doctor && (
        <RelatedDoctors
          docId={id}
          speciality={doctor.speciality}
          doctors={doctors}
        />
      )}
    </div>
  );
};

export default Appointment;
