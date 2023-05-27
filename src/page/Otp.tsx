import { useState } from "react";
import OtpInput from "react-otp-input";
import "./otp.css"

export const Otp = () => {
  const [otp, setOtp] = useState("");
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
