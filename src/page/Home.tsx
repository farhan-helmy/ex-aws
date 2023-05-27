import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [amount, setAmount] = useState(0);
  const [userid, setUserid] = useState("");
  const navigate = useNavigate();

  const handleSendTAC = () => {
    fetch("https://rjxh5ud0yh.execute-api.ap-southeast-1.amazonaws.com/dev/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        merchid: "kedai-pak-abu-213",
        userid,
        amount,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
       
        if (res.sms_status !== "SMS sent successfully.") {
          alert("Failed to send TAC");
        }
        navigate(`/otp?userid=${userid}&amount=${amount}&merchid=kedai-pak-abu-213`);
      });
  };
  return (
    <div className="flex flex-col gap-4">
      <img src="/assets/logo.jpeg" alt="logo" className="h-34" />
      <input
        onChange={(e) => setAmount(parseInt(e.target.value))}
        type="number"
        name="amount"
        id="amount"
        placeholder="Amount"
        className="w-full rounded-md border-0 py-4 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <input
        onChange={(e) => setUserid(e.target.value)}
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
