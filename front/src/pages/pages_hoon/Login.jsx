import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AboutusSubtitle from "../../components/components_hoon/AboutusSubtitle";
import axios from "axios";
import * as cookie from "../../util/cookies.js";
import EmailCode from "../../components/components_hoon/EmailCode.jsx";
import { getIsLogin, loginValidationCheck } from "../../modules/modules_hoon/reduxMemberAxios.js";
import {useSelector, useDispatch} from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userIdRef = useRef(null);
  const userPassRef = useRef(null);
  const [rememberId, setRememberId] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("findid");
  const [resultIdfind, setResultIdfind] = useState("");
  const [resultPsfind, setResultPsfind] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    userPass: "",
    userName: "",
    userEmail: "",
    phoneNumber: "",
  });

  /* 아이디,비밀번호 찾기 */
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setFormData({
        userId: "",
        userPass: "",
        userName: "",
        userEmail: "",
        phoneNumber: "",
      });
      setModalContent("findid");
    }
    setResultIdfind("");
  };
  const showFindId = () => {
    setModalContent("findid");
    setResultIdfind("");
  };
  const showFindIdresult = () => {
    setModalContent("findidresult");
  };
  const showFindPs = () => {
    setModalContent("findps");
    setResultIdfind("");
    setFormData({
      userId: "",
      userPass: "",
      userName: "",
      phoneNumber: "",
    });
  };
  const showFindPsReset = () => {
    setModalContent("psreset");
    setResultIdfind("");
  };

  /* 아이디 찾기 */
  const handleFindIdSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://127.0.0.1:8080/member/findUserId",
        {
          userName: formData.userName,
          phoneNumber: formData.phoneNumber,
        }
      );
      const { userId, userName } = result.data;
      if (userId) {
        setResultIdfind(`${userName}님의 아이디는 "${userId}" 입니다.`);
      } else {
        setResultIdfind("입력하신 정보에 맞는 아이디가 존재하지 않습니다.");
      }
      showFindIdresult();
    } catch (error) {
      console.log(error);
    }
  };
  /* 비밀번호 찾기 */
  const handleFindPsSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/member/findUserPs",
        {
          userId: formData.userId,
          userName: formData.userName,
        }
      );
      const { userId, userName, userEmail, cnt } = response.data;
      if (cnt === 1) {
        setResultPsfind(`${userName}님의 계정은 "${userId}${userEmail}" 입니다.`);
      } else {
        setResultPsfind("입력하신 정보에 맞는 계정이 존재하지 않습니다.");
      }
      showFindPsReset();
    } catch (error) {
      console.error(error);
    }
  };
  

  /* 로그인 시 아이디 저장 */
  useEffect(() => {
    const savedUserId = cookie.getCookie("savedUserId");
    if (savedUserId) {
      setFormData((prevData) => ({ ...prevData, userId: savedUserId }));
      setRememberId(true);
    }
  }, []);
  const handleCheckboxChange = (e) => {
    setRememberId(e.target.checked);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /* 로그인 처리 */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (loginValidationCheck({formData, userIdRef, userPassRef})) {
      dispatch(getIsLogin({formData}));
      
      if (rememberId) {
        cookie.setCookie("savedUserId", formData.userId);
      } else {
        cookie.removeCookies("savedUserId");
      }
    } 
  };

  /* 로그인 결과 */
  const isLogin = useSelector(state=>state.member.isLogin)
  console.log(isLogin);
  useEffect(()=>{
    if(isLogin){
      navigate("/")
    }
  },[isLogin])

  /* 카카오 로그인 */
  const Rest_api_key='3da3e056e02695bf2b6e4c7d63736125'
  const redirect_uri = 'http://localhost:3000/kakao' 
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
  const handleLogin = ()=>{
      window.location.href = kakaoURL
  }

  return (
    <div className="login-content-wrap">
      <AboutusSubtitle title="LOGIN" />
      <form onSubmit={handleSubmit}>
        <div className="login-box">
          <input
            type="text"
            placeholder="아이디"
            name="userId"
            ref={userIdRef}
            value={formData.userId}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="비밀번호"
            name="userPass"
            ref={userPassRef}
            value={formData.userPass}
            onChange={handleChange}
          />
        </div>
        <div className="login-saved">
          <input
            className="login-saved-checkbox"
            type="checkbox"
            checked={rememberId}
            onChange={handleCheckboxChange}
          />
          <span>아이디 저장</span>
        </div>
        <div className="login-btn-box">
          <button className="login-btn" type="submit">
            로그인
          </button>
        </div>
        <div className="login-member-btn-box">
          <button className="login-join-btn" type="button">
            <Link className="link-d" to="/join">
              회원가입
            </Link>
          </button>
          <button
            className="login-member-btn"
            type="button"
            onClick={toggleModal}
          >
            아이디•비밀번호 찾기
          </button>
        </div>
        <div className="borderline">
          <div className="border-left"></div>
          <div>or</div>
          <div className="border-right"></div>
        </div>
        <div className="joinkakao-btn-box">
            <button className="joinkakao-btn" type="button" onClick={handleLogin}>
              카카오로 시작하기
            </button>
        </div>
      </form>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            {modalContent === "findid" && (
              <div className="findid-content">
                <div>
                  <p> 아이디 찾기</p>
                  <button className="findid-btn1" onClick={showFindId}>
                    아이디 찾기
                  </button>
                  <button className="findps-btn1" onClick={showFindPs}>
                    비밀번호 찾기
                  </button>
                </div>
                <div className="phonetofind">
                  <span>이름, 핸드폰번호를 입력해주세요.</span>
                  <input
                    type="text"
                    placeholder="이름"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="핸드폰 번호"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="findid-btn"
                  type="button"
                  onClick={handleFindIdSubmit}
                >
                  아이디 찾기
                </button>
              </div>
            )}
            {modalContent === "findidresult" && (
              <div className="findid-content">
                <div>
                  <p>아이디 찾기</p>
                  {resultIdfind && <p className="findidresult">{resultIdfind}</p>}
                  <button className="tofindps-btn" onClick={showFindPs}>
                    비밀번호 찾기
                  </button>
                  <button className="tologin-btn" onClick={toggleModal}>
                    로그인
                  </button>
                </div>
              </div>
            )}
            {modalContent === "findps" && (
              <div className="findid-content">
                <div>
                  <p>비밀번호 찾기</p>
                  <button className="findid-btn2" onClick={showFindId}>
                    아이디 찾기
                  </button>
                  <button className="findps-btn2" onClick={showFindPs}>
                    비밀번호 찾기
                  </button>
                </div>
                <div className="phonetofind">
                  <span>아이디, 이름을 입력해주세요.</span>
                  <input
                    type="text"
                    placeholder="아이디"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="이름"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="findid-btn"
                  type="button"
                  onClick={handleFindPsSubmit}
                >
                  비밀번호 찾기
                </button>
              </div>
            )}
            {modalContent === "psreset" && (
              <div className="findid-content">
                <div>
                  <p>비밀번호 재설정</p>
                  {resultPsfind && <p className="findpsresult">{resultPsfind}</p>}
                  {resultPsfind && !resultPsfind.includes("입력하신 정보에 맞는 계정이 존재하지 않습니다.") && <EmailCode />}
                </div>
                  <button className="toprev-btn" onClick={showFindPs}>
                    이전
                  </button>
                  <button className="tologin-btn" onClick={toggleModal}>
                    로그인
                  </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
