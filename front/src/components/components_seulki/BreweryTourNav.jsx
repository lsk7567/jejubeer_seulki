import React from "react";
import "../../css/css_seulki/seulki.css";

export default function BreweryTourNav({ num }) {
  return (
    <ul className="tour-ticket-nav">
      <li className={`tour-ticket-nav-li ${num === 0 ? "active" : ""}`}>
        01 날짜 및 시간 선택
      </li>
      <li className={`tour-ticket-nav-li ${num === 1 ? "active" : ""}`}>
        02 예약정보입력
      </li>
      <li className={`tour-ticket-nav-li ${num === 2 ? "active" : ""}`}>
        03 확인 및 결제
      </li>
    </ul>
  );
}
