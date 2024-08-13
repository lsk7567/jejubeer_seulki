import React, { useRef, useState } from "react";
import MyPageModifyModal from "./MyPageModifyModal";

import { getUser } from "../../../util/localStorage.js";

export default function MyPageProfile() {
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  const { loginInfo } = getUser();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const fileInput = useRef(null);

  // 이미지 변경 시 호출될 함수
  const onImageChange = (newImage) => {
    setImage(newImage);
  };

  // 파일 선택 시 호출될 함수
  const onChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          onImageChange(reader.result); // 이미지 변경 함수 호출
        }
      };
      reader.readAsDataURL(file);
    } else {
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
    }
  };

  return (
    <div className="mypage-profile-container">
      <div className="mypage-profile-content">
        <span className="mypage-profile-image">
          <img
            src={Image}
            alt="profile-image"
            onClick={() => {
              setIsModalOpen(true);
            }}
          />
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/jpg, image/png, image/jpeg"
            name="profile-img"
            onChange={onChange}
            ref={fileInput}
          />
        </span>
        <div className="mypage-profile-greeting">
          <div>
            <span>{loginInfo.userName}</span>님 안녕하세요.
          </div>
          <div>누적 구매금액: 0원</div>
        </div>
      </div>
      <MyPageModifyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={Image}
        onImageChange={onImageChange} // onImageChange 함수 전달
      />
    </div>
  );
}
