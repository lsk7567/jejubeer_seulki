import React, { useEffect, useRef, useState } from "react";
import "../../../css/css_mimi/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, fas } from "@fortawesome/free-solid-svg-icons";

const PurchaseReviewModal = ({ isOpen, onForceClose, onSubmitClose }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null); // 이미지 미리보기 URL 상태 추가
  const [hearts, setHearts] = useState(Array(5).fill(false)); // 하트 상태 관리하는 배열

  useEffect(() => {
    if (isOpen) {
      setHearts(Array(5).fill(false)); // 모달이 열릴 때 하트 초기화
    }
  }, [isOpen]);

  if (!isOpen) return null; // 모달이 열리지 않으면 아무것도 반환하지 않음

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file); // 선택한 파일의 URL 생성
      setImagePreviewUrl(previewUrl); // 미리보기 URL 상태 업데이트
    }
  };

  const handleForceClose = () => {
    setImagePreviewUrl(null);
    onForceClose();
  };

  const handleSubmitClose = () => {
    setImagePreviewUrl(null);
    onSubmitClose();
  };

  const handleRatingClick = (index) => {
    const newHearts = hearts.map((_, i) =>
      i <= index ? !hearts[index] : false
    ); // 클릭한 하트까지 상태 변경하기
    setHearts(newHearts);
  };

  return (
    <div className="modal-overlay">
      <div className="review-modal-content">
        <p className="review-modal-content-title">구매평 작성</p>
        <button className="modal-close" onClick={handleForceClose}>
          ×
        </button>
        <div className="modal-purchase-product-info-box">
          <div>
            <img src="https://cdn.imweb.me/thumbnail/20240514/645192eba5ae0.jpg" />
          </div>
          <div>
            [Event 디스펜서+스티커 set 증정] 제주누보 몬스터팩 (48 cans)
          </div>
        </div>
        <div className="modal-purchase-product-rating-box">
          <p>상품은 어떠셨나요?</p>
          <p>
            {hearts.map((isActive, index) => (
              <span
                key={index}
                className="modal-purchase-product-rating-heart"
                onClick={() => handleRatingClick(index)}
                style={{ cursor: "pointer" }} /* 클릭 가능하게 커서 변경하기 */
              >
                {isActive ? "❤️" : "♡"} {/* 상태에 따라 하트 표시하기 */}
              </span>
            ))}
          </p>
        </div>
        <textarea
          className="modal-purchase-product-textarea"
          placeholder="어떤 점이 좋으셨나요?"
        />
        <p className="modal-purchase-product-file-notice">사진 첨부</p>
        <div className="modal-purchase-product-file">
          <div onClick={handleFileClick}>
            <FontAwesomeIcon
              icon={faPlus}
              className="modal-purchase-product-file-plus"
            />
            {imagePreviewUrl && (
              <img
                src={imagePreviewUrl}
                alt="첨부된 이미지"
                className="preview-image"
              />
            )}{" "}
            {/* 미리보기 이미지 추가 */}
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className="modal-purchase-product-notice">
          상품을 구매하신 분들이 작성한 리뷰입니다.
        </div>
        <button
          type="button"
          className="modal-purchase-review-submit-button"
          onClick={handleSubmitClose}
        >
          제출
        </button>
      </div>
    </div>
  );
};

export default PurchaseReviewModal;
