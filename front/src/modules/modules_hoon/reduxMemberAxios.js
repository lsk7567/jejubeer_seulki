import {
  setIsLogin,
  setIsLogout,
} from "../../reducer/reducer_hoon/memberReducer.js";
import { axiosGet, axiosPost } from "../reduxAxios.js";
import * as cookie from "../../util/cookies.js";
import { jwtDecode } from "jwt-decode"; // `jwt-decode`를 제대로 불러옵니다

/* 아이디, 비밀번호 유효성 체크 로직 */
export const loginValidationCheck = ({ formData, userIdRef, userPassRef }) => {
  let checkFlag = true;

  if (!formData.userId.trim()) {
    alert("아이디를 입력해주세요");
    userIdRef.current.focus();
    checkFlag = false;
  } else if (!formData.userPass.trim()) {
    alert("비밀번호를 입력해주세요");
    setTimeout(() => {
      if (userPassRef.current) {
        userPassRef.current.focus();
      }
    }, 10);
    checkFlag = false;
  }

  return checkFlag;
};

/* 로그인 */
export function getIsLogin({ formData }) {
  const url = "http://127.0.0.1:8080/member/login";
  const data = formData;

  return async (dispatch) => {
    try {
      const loginResult = await axiosPost({ url, data });
      const cnt = loginResult.cnt;
      if (cnt) {
        const token = loginResult.token;
        cookie.setCookie("x-auth-jwt", token); // JWT 토큰을 쿠키에 저장

        // JWT 토큰을 디코딩하여 사용자 정보를 얻음
        const userInfo = jwtDecode(token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        // 추가 정보도 로컬 스토리지에 저장
        localStorage.setItem(
          "login_token",
          JSON.stringify({
            token: token,
            userName: loginResult.userName,
            userEmail: loginResult.userEmail,
            gender: loginResult.gender,
            phoneNumber: loginResult.phoneNumber,
            address: loginResult.address,
            birthday: loginResult.birthday,
          })
        );

        dispatch(setIsLogin({ cnt })); // 로그인 상태로 업데이트
      } else {
        alert("로그인에 실패했습니다. 아이디나 비밀번호를 확인해주세요.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };
}

/* 로그아웃 */
export const getIsLogout = () => {
  return (dispatch) => {
    dispatch(setIsLogout()); // 로그아웃 상태로 업데이트
  };
};
