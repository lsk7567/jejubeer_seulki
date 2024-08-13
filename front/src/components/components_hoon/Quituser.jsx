import React, { useState } from 'react';
import axios from 'axios';
import { getUser, removeUser } from '../../util/localStorage.js';
import { useNavigate } from 'react-router-dom';
import { getIsLogout } from "../../modules/modules_hoon/reduxMemberAxios";
import { useDispatch } from 'react-redux';
export default function Quituser() {
  const { userInfo } = getUser();
  const [userId] = useState(userInfo.userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const url = 'http://127.0.0.1:8080/member/quit';
      const data = { userId };
      const response = await axios.post(url, data);

      if (response) {
        alert('탈퇴되었습니다.');
        dispatch(getIsLogout());
        removeUser();
        navigate('/');
      } else {
        alert('탈퇴 처리에 실패했습니다. 다시 시도해 주세요.');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="mypage-profile-quit-modal-content-title">
        <div>회원탈퇴</div>
      </div>
      <div className="mypage-profile-quit-modal-content-text">
        <div>
          가입된 회원정보가 모두 삭제됩니다. 작성하신 게시물은 삭제되지
          않습니다.
        </div>
        <div>
          탈퇴 후 같은 계정으로 재가입 시 기존에 가지고 있던 적립금은 복원되지
          않으며, 사용 및 다운로드 했던 쿠폰도 사용 불가능합니다.
        </div>
        <div>회원 탈퇴를 진행하시겠습니까?</div>
      </div>
      <div className="mypage-profile-quit-buttons">
        <button className="mypage-profile-quit-modal-close" onClick={() => navigate('/')}>
          취소
        </button>
        <button className="mypage-profile-quit-button" onClick={handleSubmit}>
          탈퇴하기
        </button>
      </div>
    </>
  );
}
