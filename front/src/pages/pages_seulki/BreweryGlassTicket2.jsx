import React, { useRef, useState } from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniTwo } from "../../components/components_seulki/BreweryIntroNavMini.jsx";
import BreweryTourNav from "../../components/components_seulki/BreweryTourNav.jsx";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { useNavigate } from "react-router-dom";

import {
  TicketDesc1,
  TicketDesc2,
} from "../../components/components_seulki/TicketDesc.jsx";
import axios from "axios";
import emailjs from "@emailjs/browser";

export default function BreweryGlassTicket2() {
  const navigate = useNavigate();

  const location = useLocation();

  const [showProduct, setShowProduct] = useState(false);
  const [showProduct2, setShowProduct2] = useState(false);

  const [formData, setFormData] = useState({
    service: false,
    personal: false,
    choose: false,
    name: "",
    email: "",
    phoneNumber1: "",
    phoneNumber2: "",
    phoneNumber3: "",
    cash: "card",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const refs = {
    nameRef: useRef(null),
    emailRef: useRef(null),
    phoneNumber1Ref: useRef(null),
    phoneNumber2Ref: useRef(null),
    phoneNumber3Ref: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateCheckStep1 = () => {
    if (!formData.service) {
      alert("개인정보 수집 약관에 동의해주세요");
      document.getElementById("service").style.outline = "2px solid #1ecad3";
    } else if (!formData.personal) {
      alert("이용 규정 약관에 동의해주세요");
      document.getElementById("personal").style.outline = "2px solid #1ecad3";
    } else {
      return true;
    }
  };

  const handleFocus = (type) => {
    if (type === "service") {
      document.getElementById("service").style.outline = "none";
    } else if (type === "personal") {
      document.getElementById("personal").style.outline = "none";
    } else if (type === "all") {
      document.getElementById("service").style.outline = "none";
      document.getElementById("personal").style.outline = "none";
    }
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
    }

    setFormError(errors);
    return checkFlag;
  };

  const handleClick1 = () => setShowProduct(!showProduct);
  const handleClick2 = () => setShowProduct2(!showProduct2);

  const handleCheck = (type, isChecked) => {
    if (type === "all")
      setFormData({
        ...formData,
        service: isChecked,
        personal: isChecked,
        choose: isChecked,
      });
    else setFormData({ ...formData, [type]: !formData[type] });
  };

  const pickDate = location.state.pickDate; //선택날짜
  const pickTime = location.state.selectedTime; //선택시간
  const list1 = location.state.list1; //리스트1
  const list2 = location.state.list2; //리스트2
  const list3 = location.state.list3; //리스트3
  const total1 = location.state.total1; //리스트1 예약인원
  const total2 = location.state.total2; //리스트2 예약인원
  const total3 = location.state.total3; //리스트3 예약인원
  const totalCount =
    location.state.total1 + location.state.total2 + location.state.total3;
  // 총 예약인원
  const title = "나만의 전용잔 만들기";
  const payment =
    location.state.total1 * 15000 +
    location.state.total2 * 15000 +
    location.state.total3 * 15000;

  const all = [
    {
      formData,
      title,
      pickDate,
      pickTime,
      list1,
      list2,
      list3,
      total1,
      total2,
      total3,
      totalCount,
      payment,
    },
  ];

  const handleClick = () => {
    if (validateCheck()) {
      if (validateCheckStep1()) {
        //! 모든 유효성검사가 통과되면 실행할 코드
        const url = "http://127.0.0.1:8080/ticket/ticketing";

        axios({
          method: "post",
          url: url,
          data: all,
        })
          .then((res) => {
            if (res.data.cnt === 1) {
              alert("결제가 완료되었습니다!");

              // 이메일 전송
              const templateParams = {
                to_email: formData.email,
                to_name: formData.name,
                message: `예약 정보\n
                날짜 : ${pickDate}\n
                시간 : ${pickTime}\n
                인원 : ${totalCount}명\n
                프로그램 : ${title}\n
                결제금액 : ${payment.toLocaleString()}원`,
              };

              emailjs
                .send(
                  "service_0n6wvwu", // EmailJS 서비스 ID
                  "template_8t7bxkp", // EmailJS 템플릿 ID
                  templateParams,
                  "qu_rJPqTyi8tsiWv6" // EmailJS 사용자 ID
                )
                .then((result) => {
                  console.log("이메일 전송 성공:", result.text);
                  navigate("/brewery/glass/ticketing3", {
                    state: {
                      formData,
                      title,
                      pickDate,
                      pickTime,
                      list1,
                      list2,
                      list3,
                      total1,
                      total2,
                      total3,
                      totalCount,
                    },
                  });
                })
                .catch((error) => {
                  console.log("이메일 전송 실패:", error.text);
                });
            } else {
              alert("예약이 실패하였습니다");
            }
          })
          .catch((error) => console.log(error));
      }
    }
  };

  return (
    <div>
      <BreweryIntroNav num={1} />
      <BreweryIntroNavMiniTwo num={0} />
      <div className="content tour-ticket">
        <h1 className="tour-check1-h1">예약하기</h1>
        <BreweryTourNav num={1} />
        <form>
          <div className="tour-ticket-step2">
            <div className="tour-ticket-step2-div1">
              <div className="tour-ticket-step2-div1-1">
                <p className="tour-ticket-step2-div1-1-p">
                  <span className="tour-ticket-step2-div1-1-span">
                    프로그램 명
                  </span>
                  {title}
                </p>
                <p className="tour-ticket-step2-div1-1-p">
                  <span className="tour-ticket-step2-div1-1-span">예약일</span>
                  {location.state.pickDate}
                </p>
                <p className="tour-ticket-step2-div1-1-p">
                  <span className="tour-ticket-step2-div1-1-span">
                    예약시간
                  </span>
                  {location.state.selectedTime}
                </p>
                <p className="tour-ticket-step2-div1-1-p">
                  <span className="tour-ticket-step2-div1-1-span">인원</span>
                  {location.state.total}&nbsp;명
                </p>
              </div>

              <div className="tour-ticket-step2-div1-2">
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p className="group-form-info-p">
                      <span className="group-form-uni-s">●</span> 신청자명
                      <span className="group-form-error">{formError.name}</span>
                    </p>
                    <input
                      className="tour-ticket-info1"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      ref={refs.nameRef}
                    />
                  </li>
                  <li>
                    <p className="group-form-info-p">
                      <span className="group-form-uni-s">●</span> 휴대폰 번호
                      <span className="group-form-error">
                        {formError.phone}
                      </span>
                    </p>
                    <input
                      className="tour-ticket-info2"
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
                      className="tour-ticket-info2"
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
                      className="tour-ticket-info2"
                      type="text"
                      name="phoneNumber3"
                      value={formData.phoneNumber3}
                      onChange={handleChange}
                      ref={refs.phoneNumber3Ref}
                    />
                  </li>
                  <li>
                    <p className="group-form-info-p">
                      <span className="group-form-uni-s">●</span> 이메일
                      <span className="group-form-error">
                        {formError.email}
                      </span>
                    </p>
                    <p style={{ fontSize: "11px", color: "red" }}>
                      * 입력하신 메일주소로 예약정보가 발송됩니다.
                    </p>
                    <input
                      className="tour-ticket-info1"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      ref={refs.emailRef}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="tour-ticket-step2-div2">
              <ul>
                <li className="tour-ticket-step2-div2-li">
                  <div className="seulki-flex tour-ticket-step2-div2-li-1">
                    <input
                      className="tour-checkbox"
                      type="checkbox"
                      onChange={(e) => handleCheck("all", e.target.checked)}
                      onFocus={() => handleFocus("all")}
                    />
                    <span>모두 동의합니다.</span>
                  </div>
                  <p className="tour-ticket-step2-div2-li-1-p">
                    * 선택 항목에 동의하지 않아도 서비스를 이용하실 수 있습니다.
                  </p>
                </li>
                <li className="seulki-flex tour-ticket-step2-div2-li">
                  <span className="tour-ticket-step2-div2-li-2-span">
                    개인정보 수집 동의 (보기)
                  </span>
                  <button
                    className="tour-ticket-step2-div2-li-2-button"
                    type="button"
                    onClick={handleClick1}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                  <input
                    className="tour-ticket-step2-div2-li-2-input"
                    type="checkbox"
                    name="service"
                    id="service"
                    checked={formData.service}
                    onChange={() => handleCheck("service")}
                    onFocus={() => handleFocus("service")}
                  />
                  <span className="tour-ticket-step2-div2-li-2-span2">
                    동의
                  </span>
                </li>
                {showProduct && <TicketDesc1 />}
                <li className="seulki-flex tour-ticket-step2-div2-li">
                  <span className="tour-ticket-step2-div2-li-2-span">
                    이용 규정에 대한 동의 (보기)
                  </span>
                  <button
                    className="tour-ticket-step2-div2-li-2-button"
                    type="button"
                    onClick={handleClick2}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                  <input
                    className="tour-ticket-step2-div2-li-2-input"
                    type="checkbox"
                    name="personal"
                    id="personal"
                    checked={formData.personal}
                    onChange={() => handleCheck("personal")}
                    onFocus={() => handleFocus("personal")}
                  />
                  <span className="tour-ticket-step2-div2-li-2-span2">
                    동의
                  </span>
                </li>
                {showProduct2 && <TicketDesc2 />}
                <li className="tour-ticket-step2-div2-li">
                  <div className="seulki-flex">
                    <span className="tour-ticket-step2-div2-li-2-span">
                      프로모션/혜택 안내 수신동의 (선택)
                    </span>
                    <div className="tour-ticket-step2-div2-li-4">
                      <input
                        className="tour-ticket-step2-div2-li-2-input"
                        type="checkbox"
                        name="choose"
                        id="choose"
                        checked={formData.choose}
                        onChange={() => handleCheck("choose")}
                        onFocus={() => handleFocus("choose")}
                      />
                      <p className="tour-ticket-step2-div2-li-2-span3">동의</p>
                    </div>
                  </div>
                  <p className="tour-ticket-step2-div2-li-1-p">
                    * 신상품 소식, 이벤트 안내, 고객 혜택 등 다양한 정보를
                    제공합니다.
                  </p>
                  <table className="tour-ticket-step2-table">
                    <thead>
                      <tr>
                        <th>수집/이용 목적</th>
                        <th>수집/이용 항목</th>
                        <th>보유 및 이용 기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>맞춤형 프로모션과 혜택 홍보 및 제공</td>
                        <td>이름, 휴대폰번호, 이메일 주소</td>
                        <td>동의 철회 시 까지</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
              <div className="tour-ticket-step2-list">
                {location.state.total1 > 0 ? (
                  <p className="tour-ticket-step2-list-p">
                    {location.state.list1}
                    <br />
                    (15,000원 × {location.state.total1}명)
                    <p>
                      {(location.state.total1 * 15000).toLocaleString()}&nbsp;원
                    </p>
                  </p>
                ) : null}

                {location.state.total2 > 0 ? (
                  <p className="tour-ticket-step2-list-p">
                    {location.state.list2} <br />
                    (15,000원 × {location.state.total2}명)
                    <p>
                      {(location.state.total2 * 15000).toLocaleString()}&nbsp;원
                    </p>
                  </p>
                ) : null}

                {location.state.total3 > 0 ? (
                  <p className="tour-ticket-step2-list-p">
                    {location.state.list3} <br />
                    (15,000원 × {location.state.total3}명)
                    <p>
                      {(location.state.total3 * 15000).toLocaleString()}&nbsp;원
                    </p>
                  </p>
                ) : null}
              </div>
              <div className="tour-ticket-step2-list-total">
                <h2 className="tour-ticket-step2-list-total-h2">
                  <span>결제금액</span>
                  <span>
                    {(
                      location.state.total1 * 15000 +
                      location.state.total2 * 15000 +
                      location.state.total3 * 15000
                    ).toLocaleString()}
                    원
                  </span>
                </h2>
                <div className="tour-ticket-step2-list-total-input">
                  <div>
                    <input
                      className="tour-ticket-step2-list-total-radio"
                      type="radio"
                      name="cash"
                      value="card"
                      checked={formData.cash === "card"}
                      onChange={handleChange}
                    />
                    <p>신용카드</p>
                  </div>
                  <div>
                    <input
                      className="tour-ticket-step2-list-total-radio"
                      type="radio"
                      name="cash"
                      value="money"
                      checked={formData.cash === "money"}
                      onChange={handleChange}
                    />
                    <p>실시간 계좌이체</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="tour-ticket-step2-list-total-button"
                onClick={handleClick}
              >
                예약하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
