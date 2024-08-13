import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../../css/css_hoon/AboutUs.css";
import MypageModify from "../../components_hoon/MypageModify.jsx";

export default function MyPageModifyModal({
  isOpen,
  onClose,
  imageSrc,
  onImageChange,
}) {
  const [image, setImage] = useState(imageSrc);
  const fileInput = useRef(null);
  const modalBackground = useRef();

  useEffect(() => {
    setImage(imageSrc);
  }, [imageSrc]);

  const onChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
          onImageChange(reader.result); // 부모 컴포넌트로 이미지 전달
        }
      };
      reader.readAsDataURL(file);
    } else {
      setImage(imageSrc);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="mypage-modal-container"
      ref={modalBackground}
      onClick={(e) => {
        if (e.target === modalBackground.current) {
          onClose();
        }
      }}
    >
      <div className="mypage-profile-modify-modal-content">
        <div
          className="mypage-profile-modify-modal-close-button"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} style={{ cursor: "pointer" }} />
        </div>
        <div className="mypage-profile-modify-modal-content-title">
          <div>정보수정</div>
        </div>
        <div className="mypage-profile-modify-modal-content-text">
          {/* <div className="mypage-profile-modify-modal-content-img">
            <img src={image} alt="profile" />
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg, image/png, image/jpeg"
              name="profile-img"
              onChange={onChange}
              ref={fileInput}
            />
            <button
              className="mypage-profile-modify-modal-content-img-change-button"
              onClick={() => {
                fileInput.current.click();
              }}
            >
              <FontAwesomeIcon icon={faCamera} />
            </button>
          </div> */}
          <MypageModify onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
