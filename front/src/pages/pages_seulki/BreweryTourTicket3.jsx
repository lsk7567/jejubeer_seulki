import React from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniTwo } from "../../components/components_seulki/BreweryIntroNavMini.jsx";
import BreweryTourNav from "../../components/components_seulki/BreweryTourNav.jsx";
import { useLocation } from "react-router-dom";

export default function BreweryTourTicket3() {
  const location = useLocation();

  return (
    <div>
      <BreweryIntroNav num={1} />
      <BreweryIntroNavMiniTwo num={0} />
      <div className="content tour-ticket-step3">
        <h1 className="tour-ticket-step3-h1">예약하기</h1>
        <BreweryTourNav num={2} />
        <h1 className="tour-ticket-step3-h1">예약이 완료되었습니다!</h1>
        <ul className="tour-check2-ul">
          <li>
            <span className="tour-check2-ul-span">신청자 명</span>
            {location.state.formData.name}
          </li>
          <li>
            <span className="tour-check2-ul-span">프로그램 명</span>
            {location.state.title}
          </li>
          <li className="seulki-flex">
            <span className="tour-check2-ul-span">프로그램 타입</span>
            <div className="tour-ticket-step3-list-div">
              {location.state.total1 > 0 ? (
                <p className="tour-ticket-step3-list-p">
                  {location.state.list1}
                  <p>{location.state.total1}&nbsp;명</p>
                </p>
              ) : null}

              {location.state.total2 > 0 ? (
                <p className="tour-ticket-step3-list-p">
                  {location.state.list2}
                  <p>{location.state.total2}&nbsp;명</p>
                </p>
              ) : null}

              {location.state.total3 > 0 ? (
                <p className="tour-ticket-step3-list-p">
                  {location.state.list3}
                  <p>{location.state.total3}&nbsp;명</p>
                </p>
              ) : null}
            </div>
          </li>
          <li>
            <span className="tour-check2-ul-span">방문예약일자</span>
            {location.state.pickDate} &nbsp;/ &nbsp;{location.state.pickTime}
          </li>
          <li>
            <span className="tour-check2-ul-span">총 인원</span>
            {location.state.totalCount}&nbsp;명
          </li>
          <li>
            <span className="tour-check2-ul-span">핸드폰 번호</span>
            {location.state.formData.phoneNumber1}-
            {location.state.formData.phoneNumber2}-
            {location.state.formData.phoneNumber3}
          </li>
        </ul>

        <hr className="seulki-line" />
      </div>
    </div>
  );
}
