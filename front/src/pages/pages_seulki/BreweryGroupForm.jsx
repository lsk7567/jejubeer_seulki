import React, { useRef, useState } from "react";
import "../../css/css_seulki/seulki.css";
import { useNavigate } from "react-router-dom";

export default function BreweryGroupForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber1: "",
    phoneNumber2: "",
    phoneNumber3: "",
    userCount: "",
    info: "",
    date: "",
    selectedTime: "(선택)",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
    count: "",
    date: "",
    time: "",
  });

  const refs = {
    nameRef: useRef(null),
    emailRef: useRef(null),
    phoneNumber1Ref: useRef(null),
    phoneNumber2Ref: useRef(null),
    phoneNumber3Ref: useRef(null),
    userCountRef: useRef(null),
    dateRef: useRef(null),
    selectedTimeRef: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateCheck = () => {
    let checkFlag = true;
    const errors = {};

    if (!formData.name.trim()) {
      alert("이름을 입력해주세요");
      errors.name = "이름을 입력해주세요!";
      refs.nameRef.current.focus();
      checkFlag = false;
    } else if (!formData.phoneNumber1.trim()) {
      alert("휴대폰 앞자리를 입력해주세요");
      errors.phone = "휴대폰 번호를 입력해주세요!";
      refs.phoneNumber1Ref.current.focus();
      checkFlag = false;
    } else if (!formData.phoneNumber2.trim()) {
      alert("휴대폰 두번째 자리를 입력해주세요");
      errors.phone = "휴대폰 번호를 입력해주세요!";
      refs.phoneNumber2Ref.current.focus();
      checkFlag = false;
    } else if (!formData.phoneNumber3.trim()) {
      alert("휴대폰 세번째 자리를 입력해주세요");
      errors.phone = "휴대폰 번호를 입력해주세요!";
      refs.phoneNumber3Ref.current.focus();
      checkFlag = false;
    } else if (!formData.email.trim()) {
      alert("이메일을 입력해주세요");
      errors.email = "이메일을 입력해주세요!";
      refs.emailRef.current.focus();
      checkFlag = false;
    } else if (formData.date === "") {
      alert("방문 일자를 선택해주세요");
      errors.date = "방문 일자를 선택해주세요!";
      refs.dateRef.current.focus();
      checkFlag = false;
    } else if (formData.selectedTime === "(선택)") {
      alert("방문 시간을 선택해주세요");
      errors.time = "방문 시간을 선택해주세요!";
      refs.selectedTimeRef.current.focus();
      checkFlag = false;
    } else if (!formData.userCount.trim()) {
      alert("방문 인원을 입력해주세요");
      errors.count = "방문 인원을 입력해주세요!";
      refs.userCountRef.current.focus();
      checkFlag = false;
    }

    setFormError(errors);
    return checkFlag;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validateCheck()) {
      alert("문의가 접수되었습니다!");
      navigate("/brewery/group");
    }
  };

  return (
    <div>
      <img src="/images/images_seulki/brewerygroup/1.jpg" alt="" />
      <div className="content brewerygroup">
        <form className="group-form">
          <p className="brewerygroup-p">
            <strong>문의 접수 후, 2~3일 내로, 가능 여부 회신 드립니다.</strong>
          </p>
          <ul className="group-form-ul">
            <li>
              <p className="group-form-info-p">
                단체명 <span className="group-form-uni-s">●</span>
                <span className="group-form-error">{formError.name}</span>
              </p>
              <input
                className="group-info1"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                ref={refs.nameRef}
              />
            </li>
            <li>
              <p className="group-form-info-p">
                연락처 (예약자) <span className="group-form-uni-s">●</span>
                <span className="group-form-error">{formError.phone}</span>
              </p>
              <input
                className="group-info2"
                type="text"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
                ref={refs.phoneNumber1Ref}
              />
              &nbsp;&nbsp;
              <span>-</span>
              &nbsp;&nbsp;
              <input
                className="group-info2"
                type="text"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                onChange={handleChange}
                ref={refs.phoneNumber2Ref}
              />
              &nbsp;&nbsp;
              <span>-</span>
              &nbsp;&nbsp;
              <input
                className="group-info2"
                type="text"
                name="phoneNumber3"
                value={formData.phoneNumber3}
                onChange={handleChange}
                ref={refs.phoneNumber3Ref}
              />
            </li>
            <li>
              <p className="group-form-info-p">
                이메일 (예약자) <span className="group-form-uni-s">●</span>
                <span className="group-form-error">{formError.email}</span>
              </p>
              <input
                className="group-info1"
                type="text"
                name="email"
                value={formData.email}
                ref={refs.emailRef}
                onChange={handleChange}
              />
            </li>
            <li>
              <p className="group-form-info-p">
                방문일자 <span className="group-form-uni-s">●</span>
                <span className="group-form-error">{formError.date}</span>
              </p>
              <input
                className="group-info3"
                type="date"
                id="breweryDate"
                name="date"
                value={formData.date}
                onChange={handleChange}
                ref={refs.dateRef}
              />
            </li>
            <li>
              <p className="group-form-info-p">
                방문 시간 (권장 소요 시간 : 1시간 10분)
                <span className="group-form-uni-s">●</span>
                <span className="group-form-error">{formError.time}</span>
              </p>
              <select
                className="group-info3"
                name="selectedTime"
                onChange={handleChange}
                ref={refs.selectedTimeRef}
              >
                <option value="선택">(선택)</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="18:00">18:00</option>
                <option value="10:00 - 11:00">
                  10:00 - 11:00 (운영 시간 외 투어는 별도의 추가 요금 발생)
                </option>
              </select>
            </li>
            <li>
              <p className="group-form-info-p">
                방문 인원 (16명 이상 시 단독 진행)
                <span className="group-form-uni-s">●</span>
                <span className="group-form-error">{formError.count}</span>
              </p>
              <input
                className="group-info1"
                type="text"
                name="userCount"
                value={formData.userCount}
                onChange={handleChange}
                ref={refs.userCountRef}
              />
            </li>
            <li>
              <p className="group-form-info-p">내용</p>
              <input
                className="group-info1"
                type="text"
                name="info"
                value={formData.info}
                onChange={handleChange}
              />
            </li>
          </ul>
        </form>

        <div className="group-button">
          <button
            className="brewery_button1"
            type="button"
            onClick={handleClick}
          >
            문의글 남기기
          </button>
        </div>
      </div>
    </div>
  );
}
