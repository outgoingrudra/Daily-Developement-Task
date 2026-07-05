import React, { useEffect, useRef, useState } from "react";

export default function OTP() {
  const OTP_DIGITS = 5;
  const [otp, setOtp] = useState(new Array(OTP_DIGITS).fill(""));

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  function handleValueChange(val, idx) {
    val = val.trim();
    if (isNaN(val)) return;
    console.log(val);
    const tempArr = [...otp];
    tempArr[idx] = val.slice(-1);
    setOtp(tempArr);
    val && refArr.current[idx+1]?.focus();
  }

  function handleKeyDown(e,idx){
    if(!e.target.value && e.key=="Backspace"){
              refArr.current[idx-1]?.focus();
    }
  }
  return (
    <div>
      <h3 className="text-center text-2xl ">OTP</h3>
      <div className="text-center">
        {otp.map((val, idx) => (
          <input
            key={idx}
            type="text"
            className="border h-10 w-10 m-2 text-center text-2xl rounded-md"
            value={val}
            onChange={(e) => handleValueChange(e.target.value, idx)}
            ref={(input)=>refArr.current[idx] = input}
            onKeyDown={(e)=> handleKeyDown(e,idx)}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
}
