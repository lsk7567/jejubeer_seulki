import React from "react";
import "../../css/css_seulki/seulki.css";
import { MenuMainTitle } from "../../components/MenuTitle.jsx";
import BreweryMap from "../../components/components_seulki/BreweryMap.jsx";

export default function Contact() {
  return (
    <div className="content contact-s">
      <MenuMainTitle title={"CONTACT"} />
      <div className="contect-text">
        주소 : 제주시 한림읍 금능농공길 62-11
        <br />
        <br /> 투어 문의 : 000-798-9872
        <br /> 양조장 운영일 : 수요일 - 일요일 (설날 & 추석 전 날, 당일 휴무)
        <br />
        양조장 운영 시간 : 12:30 - 19:30 (주문마감 19:00)
        <br />
        <br /> 납품 & 대표 문의 : 000-798-9800 / test@test.co.kr
        <br /> 채용 문의 : test@test.co.kr
        <br /> IR 문의 : 000-2235-5559
      </div>
      <div className="contact-map">
        <BreweryMap width={"100%"} height={"500px"} />
      </div>
    </div>
  );
}
