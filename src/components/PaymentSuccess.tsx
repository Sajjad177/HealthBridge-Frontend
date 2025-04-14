import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useVerifyPaymentMutation } from "../redux/features/appointment/appointmentManagement";
import Navbar from "./Navbar";

interface VerifyPaymentResponse {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");

  const [verifyPayment, { data, isLoading }] = useVerifyPaymentMutation();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (orderId) {
      verifyPayment(orderId)
        .unwrap()
        .catch((err) => {
          setError("Something went wrong verifying the payment.");
          console.error(err);
        });
    }
  }, [orderId, verifyPayment]);

  const paymentData: VerifyPaymentResponse | undefined = data?.data?.[0];
  console.log(paymentData);

  if (isLoading)
    return <div className="p-10 text-lg font-semibold">Loading...</div>;
  if (error)
    return <div className="p-10 text-red-600 font-semibold">{error}</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-700 mb-2">
          <strong>Order ID:</strong> {paymentData?.order_id}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Transaction Status:</strong>{" "}
          <button
            className={`px-3 py-1 text-sm font-medium rounded-full ${
              paymentData?.transaction_status === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {paymentData?.bank_status}
          </button>
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Amount:</strong> {paymentData?.amount} {paymentData?.currency}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Name:</strong> {paymentData?.name}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {paymentData?.email}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> {paymentData?.phone_no}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Payment Method:</strong> {paymentData?.method}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Date:</strong> {paymentData?.date_time}
        </p>
        <p className="text-green-700 font-semibold mt-4">
          Thanks for your payment!
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
