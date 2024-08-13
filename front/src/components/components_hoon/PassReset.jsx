import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const PassReset = () => {

  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    
    if (newPassword !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/member/passreset",
        {
          userId,         
          newPassword,
        }
      );
      if (response.data.success) {
        alert("비밀번호가 성공적으로 변경되었습니다.");
        navigate("/");
      } 
    } catch (error) {
      console.error("Error during password reset:", error);
      setError("비밀번호 변경에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="psreset">
      <p>비밀번호를 재설정 해주세요.</p>
      <input
        type="text"
        value={userId}
        onChange={(e)=>{setUserId(e.target.value)}}
        placeholder="기존 아이디"
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="새 비밀번호"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="새 비밀번호 확인"
      />
      <button className="pschange-btn" onClick={handleResetPassword}>변경하기</button>
      {error && <p style={{color:"red"}} className="error">{error}</p>}
    </div>
  );
};

export default PassReset;
