import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleSendTAC = () => {
    navigate("/otp");
  };
  return (
    <div className="flex flex-col gap-4">
      <img src="/assets/logo.jpeg" alt="logo" className="h-34" />
      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="Amount"
        className="w-full rounded-md border-0 py-4 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <input
        type="text"
        name="Id"
        id="id"
        placeholder="ID"
        className="w-full rounded-md border-0 py-4 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <div>
        <button
          onClick={handleSendTAC}
          className="p-2 w-full rounded-md bg-indigo-500 text-white"
        >
          Send TAC
        </button>
      </div>
    </div>
  );
};
