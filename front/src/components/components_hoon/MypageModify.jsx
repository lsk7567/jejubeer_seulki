import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getUser } from "../../util/localStorage.js";
import DaumPostCodeModal from "./DaumPostCodeModal.jsx";

export default function MypageModify({ onClose }) {
  const { userInfo, loginInfo } = getUser();
  const [modifyInfo, setModifyInfo] = useState({
    phoneNumber: "",
    address: "",
    detailaddress: "",
  });
  const [userId] = useState(userInfo.userId);
  const birthdayFormat = loginInfo.birthday
    ? loginInfo.birthday.slice(0, 10)
    : "";

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8080/modify/info", { userId })
      .then((res) => {
        setModifyInfo({
          phoneNumber: res.data.phoneNumber,
          address: res.data.address,
          detailaddress: res.data.detailaddress,
        });
      })
      .catch((error) => console.log(error));
  }, [userId]);

  const handleModifyChange = (e) => {
    const { name, value } = e.target;
    setModifyInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddress = (data) => {
    setModifyInfo((prevState) => ({
      ...prevState,
      address: data.address,
      detailaddress: data.detailaddress,
    }));
  };

  const handleSubmit = async () => {
    try {
      const url = "http://127.0.0.1:8080/modify/update";
      const data = {
        phoneNumber: modifyInfo.phoneNumber,
        address: modifyInfo.address,
        detailAddress: modifyInfo.detailaddress,
        userId,
      };

      const response = await axios.post(url, data);

      if (response) {
        alert("수정되었습니다.");
        if (onClose) onClose();
      } else {
        alert("수정에 실패하였습니다.");
      }
    } catch (error) {
      console.log(error);
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div>
      <div className="mypage-modify-userinfo">
        <h5>
          이름<p></p>
        </h5>
        <div className="logininfo-userinfo">{loginInfo.userName}</div>
      </div>
      <div className="mypage-modify-userinfo">
        <h5>
          성별<p></p>
        </h5>
        <div className="logininfo-userinfo">{loginInfo.gender}</div>
      </div>
      <div className="mypage-modify-userinfo">
        <h5>
          연락처<p></p>
        </h5>
        <input
          type="text"
          className="mypage-modify-phone"
          name="phoneNumber"
          value={modifyInfo.phoneNumber}
          onChange={handleModifyChange}
        />
      </div>
      <div className="mypage-modify-userinfo">
        <h5>
          주소<p></p>
        </h5>
        <DaumPostCodeModal
          handleAddress={handleAddress}
          formData={modifyInfo}
          handleChange={handleModifyChange}
        />
        <input
          type="text"
          className="mypage-modify-detail-address"
          name="detailaddress"
          value={modifyInfo.detailaddress}
          onChange={handleModifyChange}
        />
      </div>
      <div className="mypage-modify-userinfo">
        <h5>
          생년월일<p></p>
        </h5>
        <div className="logininfo-userinfo">{birthdayFormat}</div>
      </div>
      <div className="mypage-modify-userinfo-btn" onClick={handleSubmit}>
        확인
      </div>
    </div>
  );
}
