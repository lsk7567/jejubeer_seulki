import React, { useState } from "react";
import axios from "axios";
import PassReset from "./PassReset";

const EmailCode = () => {
  const [emailInput, setEmailInput] = useState(true)
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [psReset, setPsReset] = useState(false);
  const [error, setError] = useState("")

  const handleVerificationCode = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/member/emailcode",
        { email }
      );
        setVerificationCode(response.data.authCode);
        alert("인증번호가 이메일로 전송되었습니다.");
        setShowCodeInput(true);
    } catch (error) {
      alert("인증번호 전송에 실패했습니다. 이메일주소를 확인해주세요.");
    }
  };

  const handleConfirmCode = () => {
    if (inputCode === verificationCode) {
      alert("인증되었습니다");
      setShowCodeInput(false);
      setEmailInput(false);
      setPsReset(true);
    } else {
      setError("인증번호가 올바르지 않습니다. 다시 입력해주세요.");
    }
  };

  return (
    <div className="emailcode-content">
      {emailInput && (
      <div className="emailcode">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 입력"
        />
        <button className="send-btn" onClick={handleVerificationCode} disabled={!email}>
          인증번호 전송
        </button>
      </div>
      )}
      {showCodeInput &&(
      <div className="emailcode">
        <input
          type="text"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="인증번호 입력"
        />
        <button className="verify-btn" onClick={handleConfirmCode}>
          인증하기
        </button>
        {error && <p style={{ color: "red", fontSize:"13px"}}>{error}</p>}
      </div>
      )}
      {psReset && (
        <>
          <PassReset/>
        </>
      )}
    </div>
  );
};

export default EmailCode;
