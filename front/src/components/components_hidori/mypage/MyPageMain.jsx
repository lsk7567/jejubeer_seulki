import React, { useEffect, useRef, useState } from "react";
import MyPageProfile from "../mypage/MyPageProfile.jsx";
import MyPageModifyModal from "./MyPageModifyModal.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderHistory, Wishlist, Inquiry } from "./MyPageSidebar.jsx";
import Quituser from "../../components_hoon/Quituser.jsx";

export default function MyPageMain() {
  const [quitModal, setQuitModal] = useState(false);
  const [modifyModal, setModifyModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("order");
  const modalBackground = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (quitModal || modifyModal) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [quitModal, modifyModal]);

  const renderContent = () => {
    switch (selectedMenu) {
      case "order":
        return <OrderHistory />;
      case "wishlist":
        return <Wishlist />;
      case "inquiry":
        return <Inquiry />;
      default:
        return <OrderHistory />;
    }
  };

  return (
    <div className="content">
      <div className="mypage-main">
        <MyPageProfile />
        <div className="mypage-side-navigator">
          <div onClick={() => setSelectedMenu("order")}>주문/예약 조회</div>
          <div onClick={() => setSelectedMenu("wishlist")}>위시리스트</div>
          <div onClick={() => setSelectedMenu("inquiry")}>1:1 문의</div>
          <div
            className="mypage-profile-modify-modal-open"
            onClick={() => setModifyModal(true)}
          >
            정보 수정
          </div>
          <MyPageModifyModal
            isOpen={modifyModal}
            onClose={() => setModifyModal(false)}
            imageSrc="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          />

          <div
            className={"mypage-profile-quit-modal-open"}
            onClick={() => setQuitModal(true)}
          >
            회원탈퇴
          </div>
          {quitModal && (
            <div
              className={"mypage-modal-container"}
              ref={modalBackground}
              onClick={(e) => {
                if (e.target === modalBackground.current) {
                  setQuitModal(false);
                }
              }}
            >
              <div className={"mypage-profile-quit-modal-content"}>
                <Quituser/>
                {/* <div className="mypage-profile-quit-modal-content-title">
                  <div>회원탈퇴</div>
                </div>
                <div className="mypage-profile-quit-modal-content-text">
                  <div>
                    가입된 회원정보가 모두 삭제됩니다. 작성하신 게시물은
                    삭제되지 않습니다.
                  </div>
                  <div>
                    탈퇴 후 같은 계정으로 재가입 시 기존에 가지고 있던 적립금은
                    복원되지 않으며, 사용 및 다운로드 했던 쿠폰도 사용
                    불가능합니다.
                  </div>
                  <div>회원 탈퇴를 진행하시겠습니까?</div>
                </div>
                <div className="mypage-profile-quit-buttons">
                  <button
                    className={"mypage-profile-quit-modal-close"}
                    onClick={() => setQuitModal(false)}
                  >
                    취소
                  </button>
                  <button className="mypage-profile-quit-button">
                    탈퇴하기
                  </button>
                </div> */}
              </div>
            </div>
          )}
        </div>
        <div className="mypage-selected-sidebar-content">{renderContent()}</div>
      </div>
    </div>
  );
}
