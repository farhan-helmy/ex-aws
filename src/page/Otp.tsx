import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import "./otp.css";
import { useSearchParams, useNavigate } from "react-router-dom";

export const Otp = () => {
  const [otp, setOtp] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(otp);
    if (otp.length === 6) {
      verifyOtp();
    }
  }, [otp]);

  const verifyOtp = () => {
    fetch("https://rjxh5ud0yh.execute-api.ap-southeast-1.amazonaws.com/dev/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
        merchid: searchParams.get("merchid"),
        userid: searchParams.get("userid"),
        amount: parseInt(searchParams.get("amount") as string),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.detail);
        if (res.detail === "Invalid OTP") {
          navigate("/failed");
        }else{
          navigate(`/success?userid=${searchParams.get("userid")}&amount=${searchParams.get("amount")}&merchid=${searchParams.get("merchid")}`);
        }
       
      });
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div>Enter OTP</div>
      <div>
        <OtpInput
          inputStyle="inputStyle"
          inputType="number"
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
    </div>
  );
};
