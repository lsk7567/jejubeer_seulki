import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function DaumPostCodeModal({ handleAddress, formData}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFFF",
    postcodeTextColor: "#C05850",
    emphTextColor: "#222222",
  };

  const postCodeStyle = {
    width: "340px",
    height: "250px",
    margin: "0 0 0 0",
    position: "absolute",
    border: "1px solid black"
  };

  const completeHandler = (data) => {
    const { address } = data;
    handleAddress({ address });
  };
  return (
    <div className="user-addr">
      <input
        type="text"
        className="mypage-modify-address"
        placeholder=" 주소"
        name="address"
        onClick={handleToggle}
        value={formData.address}
        readOnly
      />
      {isOpen && (
        <div>
          <DaumPostcode
            className="postmodal"
            theme={themeObj}
            style={postCodeStyle}
            onComplete={completeHandler}
          />
        </div>
      )}
    </div>
  );
}
