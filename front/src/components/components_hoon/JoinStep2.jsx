import React, { useRef, useState } from "react";
import ProfileImageUpload from "../components_hoon/ProfileImageUpload.jsx";
import axios from "axios";
import DaumPostCodeModal from "./DaumPostCodeModal.jsx";

export default function JoinStep2({
  prev,
  next,
  formData,
  setFormData,
  handleChange,
  handleAddress,
}) {
  /* 회원정보 객체화 */
  const refs = {
    userProfileRef: useRef(null),
    userIdRef: useRef(null),
    userEmailRef: useRef(null),
    userPassRef: useRef(null),
    userPassCheckRef: useRef(null),
    userNameRef: useRef(null),
    genderMaleRef: useRef(null),
    genderFemaleRef: useRef(null),
    phoneNumberRef: useRef(null),
    addressRef: useRef(null),
    detailaddressRef: useRef(null),
    birthdayYearRef: useRef(null),
    birthdayMonthRef: useRef(null),
    birthdayDayRef: useRef(null),
  };
  /* userId 중복체크 */
  const handleIdCheck = () => {
    if (refs.userIdRef.current.value == "") {
      alert("아이디를 입력해주세요");
      refs.userIdRef.current.focus();
    } else {
      const url = "http://127.0.0.1:8080/member/idCheck";
      const userId = refs.userIdRef.current.value;
      axios({
        method: "post",
        url: url,
        data: { userId: userId },
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.cnt === 1) {
            alert("이미 사용중인 아이디 입니다. 다시 입력해주세요");
            refs.userIdRef.current.focus();
          } else {
            alert("사용 가능한 아이디입니다.");
            refs.emailIdRef.current.focus();
          }
        })
        .catch(
          (error) => console.error("Error:", error) // 디버그 로그
        );
    }
  };
  /* 이메일주소 선택 로직 */
  const domains = [
    "직접입력",
    "@naver.com",
    "@hanmail.com",
    "@daum.net",
    "@nate.com",
    "@hotmail.com",
    "@gmail.com",
    "@icloud.com",
  ];

  const [isDirectEmail, setIsDirectEmail] = useState(false);
  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (value === "직접입력") {
      setIsDirectEmail(true);
      setFormData({ ...formData, userEmail: "" });
    } else {
      setIsDirectEmail(false);
      setFormData({ ...formData, userEmail: value });
    }
  };
  const handleDirectEmailChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, userEmail: value }));
  };

  /* 생년월일 선택 로직 */
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  /* 유효성 체크 로직 */
  const validationCheck = () => {
    let checkFlag = true;
    if (refs.userIdRef.current.value === "") {
      alert("아이디를 입력해주세요.");
      refs.userIdRef.current.focus();
      checkFlag = false;
    } else if (refs.userEmailRef.current.value === "") {
      alert("이메일주소를 입력해주세요.");
      refs.userEmailRef.current.focus();
      checkFlag = false;
    } else if (refs.userPassRef.current.value === "") {
      alert("비밀번호를 입력해주세요.");
      refs.userPassRef.current.focus();
      checkFlag = false;
    } else if (refs.userPassCheckRef.current.value === "") {
      alert("비밀번호를 확인해주세요.");
      refs.userPassCheckRef.current.focus();
      checkFlag = false;
    } else if (refs.userNameRef.current.value === "") {
      alert("이름을 입력해주세요.");
      refs.userNameRef.current.focus();
      checkFlag = false;
    } else if (
      !refs.genderMaleRef.current.checked &&
      !refs.genderFemaleRef.current.checked
    ) {
      alert("성별을 선택해주세요.");
      refs.genderMaleRef.current.focus();
      checkFlag = false;
    } else if (refs.phoneNumberRef.current.value === "") {
      alert("연락처를 입력해주세요.");
      refs.phoneNumberRef.current.focus();
      checkFlag = false;
    } else if (refs.birthdayYearRef.current.value === "") {
      alert("생년월일을 선택해주세요.");
      refs.birthdayYearRef.current.focus();
      checkFlag = false;
    } else if (refs.birthdayMonthRef.current.value === "") {
      alert("생년월일을 선택해주세요.");
      refs.birthdayMonthRef.current.focus();
      checkFlag = false;
    } else if (refs.birthdayDayRef.current.value === "") {
      alert("생년월일을 선택해주세요.");
      refs.birthdayDayRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
  };
  const [error, setError] = useState("");

  /* 비밀번호 체크 로직 */
  const passCheck = () => {
    let checkFlag = true;
    const pass = refs.userPassRef.current;
    const passCheck = refs.userPassCheckRef.current;

    if (pass.value !== passCheck.value) {
      setError("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      pass.value = "";
      passCheck.value = "";
      pass.focus();
      checkFlag = false;
    }
    return checkFlag;
  };

  /* 회원가입 데이터 전송 로직 */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validationCheck() && passCheck()) {
      const url = "http://127.0.0.1:8080/member/join";
      axios
        .post(url, formData)
        .then((res) => {
          if (res.data.cnt === 1) {
            alert("회원가입에 성공하였습니다.");
            next();
          } else {
            alert("회원가입 실패!");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="joinstep2-content-wrap">
      <form className="join-content-form">
        <div className="user-email-password">
          <input
            type="text"
            placeholder=" 아이디"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            ref={refs.userIdRef}
          />
          {isDirectEmail ? (
            <input
              type="text"
              placeholder="이메일"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleDirectEmailChange}
              ref={refs.userEmailRef}
              onBlur={() => setIsDirectEmail(false)}
            />
          ) : (
            <select
              name="userEmail"
              value={formData.userEmail}
              onChange={handleEmailChange}
              ref={refs.userEmailRef}
            >
              <option value="" disabled>
                이메일
              </option>
              {domains.map((domain, index) => (
                <option key={index} value={domain}>
                  {domain}
                </option>
              ))}
              {formData.userEmail && !domains.includes(formData.userEmail) && (
                <option value={formData.userEmail}>{formData.userEmail}</option>
              )}
            </select>
          )}
          <button className="idCheck-btn" type="button" onClick={handleIdCheck}>
            중복확인
          </button>
          <input
            type="password"
            placeholder=" 비밀번호"
            name="userPass"
            value={formData.userPass}
            onChange={handleChange}
            ref={refs.userPassRef}
          />
          <input
            type="password"
            placeholder=" 비밀번호 확인"
            name="userPassCheck"
            value={formData.userPassCheck}
            onChange={handleChange}
            ref={refs.userPassCheckRef}
          />
        </div>
        {error && <div style={{ color: "red", fontSize: "12px" }}>{error}</div>}
        <div className="user-name">
          <h5>
            이름<p></p>
          </h5>
          <input
            type="text"
            placeholder=" 이름을(를) 입력하세요"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            ref={refs.userNameRef}
          />
        </div>
        <div className="user-gender">
          <h5>
            성별<p></p>
          </h5>
          <div>
            <input
              className="gender-checkbox"
              type="radio"
              name="gender"
              value="남자"
              checked={formData.gender === "남자"}
              onChange={handleChange}
              ref={refs.genderMaleRef}
            />
            <span>남자</span>
          </div>
          <div>
            <input
              className="gender-checkbox"
              type="radio"
              name="gender"
              value="여자"
              checked={formData.gender === "여자"}
              onChange={handleChange}
              ref={refs.genderFemaleRef}
            />
            <span>여자</span>
          </div>
        </div>
        <div className="user-phone">
          <h5>
            연락처<p></p>
          </h5>
          <input
            type="text"
            placeholder=" 연락처"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            ref={refs.phoneNumberRef}
          />
        </div>
        <div>
          <h5>
            주소<p></p>
          </h5>
          <DaumPostCodeModal
            handleAddress={handleAddress}
            handleChange={handleChange}
            refs={refs}
            formData={formData}
          />
          <input
            type="text"
            className="mypage-modify-detail-address"
            placeholder=" 상세주소"
            name="detailaddress"
            value={formData.detailaddress}
            onChange={handleChange}
            ref={refs.detailaddressRef}
          />
        </div>
        <div className="user-birth">
          <h5>
            생년월일<p></p>
          </h5>
          <select
            name="birthdayYear"
            value={formData.birthdayYear || ""}
            onChange={handleChange}
            ref={refs.birthdayYearRef}
          >
            <option value="" disabled>
              년도
            </option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            name="birthdayMonth"
            value={formData.birthdayMonth || ""}
            onChange={handleChange}
            ref={refs.birthdayMonthRef}
          >
            <option value="" disabled>
              월
            </option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="birthdayDay"
            value={formData.birthdayDay}
            onChange={handleChange}
            ref={refs.birthdayDayRef}
          >
            <option value="" disabled>
              일
            </option>
            {days.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div className="joinstep2-btn-box">
          <button
            className="joinstep2-btn-prev"
            type="button"
            onClick={() => prev()}
          >
            이전
          </button>
          <button
            className="joinstep2-btn-join"
            type="button"
            onClick={handleSubmit}
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}
