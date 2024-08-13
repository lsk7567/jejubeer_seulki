import React, { useRef, useState } from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniTwo } from "../../components/components_seulki/BreweryIntroNavMini.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BreweryTourCheck1() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber1: "",
    phoneNumber2: "",
    phoneNumber3: "",
    cash: "양조장투어(Brewery)",
  });

  const [formError, setFormError] = useState({
    name: "",
    phone: "",
  });

  const refs = {
    nameRef: useRef(null),
    phoneNumber1Ref: useRef(null),
    phoneNumber2Ref: useRef(null),
    phoneNumber3Ref: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateCheck = () => {
    let checkFlag = true;
    const errors = {};

    if (!formData.name.trim()) {
      alert("신청자명을 입력해주세요");
      errors.name = "신청자명을 입력해주세요!";
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
    }

    setFormError(errors);
    return checkFlag;
  };

  const handleSubmit = () => {
    if (validateCheck()) {
      const url = "http://127.0.0.1:8080/ticket/ticketcheck";

      axios({
        method: "post",
        url: url,
        data: formData,
      })
        .then((res) => {
          if (res.data.cnt === 1) {
            alert("예약이 확인되었습니다.\n예약 확인 페이지로 이동합니다.");
            navigate("/brewery/tour/ticketing/check2", {
              state: { formData },
            });
          } else {
            alert("입력하신 정보에 해당되는 예약이 없습니다.");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <BreweryIntroNav num={1} />
      <BreweryIntroNavMiniTwo num={1} />
      <div className="content tour-check1">
        <h1 className="tour-check1-h1">양조장 예약 확인</h1>
        <p className="brewerytour-div3-p2">
          예약시 입력하셨던 신청자 명과 휴대폰 번호를 입력해주세요. <br />
          <br />
          예약 내역을 확인하실 수 있습니다.
        </p>
        <form>
          <ul className="tour-check1-ul">
            <li>
              <p className="group-form-info-p">
                <span className="group-form-uni-s">●</span> 신청자명
                <span className="group-form-error">{formError.name}</span>
              </p>
              <input
                className="group-info1"
                style={{ width: "250px" }}
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
                <span className="group-form-uni-s">●</span> 프로그램 종류
              </p>
              <div
                style={{ width: "400px" }}
                className="tour-ticket-step2-list-total-input"
              >
                <div>
                  <input
                    className="tour-ticket-step2-list-total-radio"
                    type="radio"
                    name="cash"
                    value="양조장투어(Brewery)"
                    checked={formData.cash === "양조장투어(Brewery)"}
                    onChange={handleChange}
                  />
                  <p>양조장투어(Brewery)</p>
                </div>
                <div>
                  <input
                    className="tour-ticket-step2-list-total-radio"
                    type="radio"
                    name="cash"
                    value="나만의 전용잔 만들기"
                    checked={formData.cash === "나만의 전용잔 만들기"}
                    onChange={handleChange}
                  />
                  <p>나만의 전용잔 만들기</p>
                </div>
              </div>
            </li>
          </ul>
          <button
            type="button"
            className="tour-check1-btn"
            onClick={handleSubmit}
          >
            예약 확인하기
          </button>
        </form>
      </div>
    </div>
  );
}
