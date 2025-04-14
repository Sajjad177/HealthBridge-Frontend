import { toast } from "sonner";
import {
  useGetAllDoctorsQuery,
  useToggleAvabilityMutation,
} from "../../../redux/features/doctor/doctorManagement";
import PageLoading from "../../../components/PageLoading";

const DoctorList = () => {
  const { data, isLoading } = useGetAllDoctorsQuery("");
  const doctors = data?.data;
  const [updateAvailability] = useToggleAvabilityMutation();

  const handleToggleAvailability = async (
    id: string,
    currentAavailability: boolean
  ) => {
    try {
      const res = await updateAvailability({
        id,
        data: { available: !currentAavailability },
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
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium mb-4">All Doctors</h1>

      <div className="w-full flex flex-wrap gap-4 pt-2 gap-y-6">
        {doctors?.map((item: any, index: number) => (
          <div
            key={index}
            className="border border-gray-100 rounded-xl max-w-56 w-full overflow-hidden cursor-pointer group flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt=""
              className="bg-indigo-50 group-hover:bg-[#5f5fff] transition-all duration-300 ease-in-out"
            />
            <div className="p-4">
              <p className="text-neutral-800 font-semibold text-base">
                {item.name}
              </p>
              <p className="text-zinc-600 text-sm mt-1">{item.speciality}</p>

              <div className="mt-3 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.available}
                  className="accent-green-500 cursor-pointer"
                  onClick={() => {
                    handleToggleAvailability(
                      item._id as string,
                      item.available as boolean
                    );
                  }}
                />
                <span className="text-sm text-green-600">Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
