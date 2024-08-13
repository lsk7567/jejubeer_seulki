import React from "react";
import "../../css/css_seulki/seulki.css";
import { BreweryButton1 } from "../../components/components_seulki/BreweryButtons.jsx";

export default function BreweryGroup() {
  return (
    <div>
      <img src="/images/images_seulki/brewerygroup/1.jpg" alt="" />
      <div className="content brewerygroup">
        <div className="brewerygroup-div1">
          <p className="brewerygroup-div1-p1">
            우리끼리 즐기는 프라이빗한 체험
          </p>
          <p className="brewerygroup-div1-p2">제주맥주 양조장 단체 투어</p>
        </div>

        <div className="seulki-flex brewerygroup-div2">
          <div className="brewerygroup-img-div">
            <img
              className="brewerygroup-img-div-1"
              src="/images/images_seulki/brewerygroup/2.jpg"
              alt=""
            />
          </div>
          <div className="brewerygroup-img-div">
            <img
              className="brewerygroup-img-div-1"
              src="/images/images_seulki/brewerygroup/3.png"
              alt=""
            />
          </div>
          <div className="brewerygroup-img-div">
            <img
              className="brewerygroup-img-div-1"
              src="/images/images_seulki/brewerygroup/4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="brewerygroup-div3">
          <div className="brewerygroup-div3-text1">
            <p className="brewerygroup-div3-p1">투어 운영 시간</p>
            <p className="brewerygroup-div3-p2">13:00 - 18:00</p>
            <p>*양조장 운영 시간 : 12:30 - 19:30 (매주 월, 화 정기휴무)</p>
            <p>
              설날<strong>&</strong>추석 전 날 및 당일 휴무
            </p>
          </div>
          <div className="brewerygroup-div3-text2">
            <p className="brewerygroup-div3-p1">소요시간</p>
            <p className="brewerygroup-div3-p2">1시간 10분 (권장)</p>
            <p>
              *양조장 투어 약 <strong>30</strong>분 + 시음 이용 시간
              <strong>40</strong>분
            </p>
          </div>
        </div>

        <div className="brewerygroup-div4">
          <p className="brewerygroup-div3-p1">예약 방법</p>
          <img
            className="brewerygroup-div4-img"
            src="/images/images_seulki/brewerygroup/5.png"
            alt=""
          />
          <p style={{ fontSize: "13px", marginBottom: "20px" }}>
            *단체 예약은 작성해 주신 내용을 바탕으로, 유선 상담 후, 예약 안내해
            드립니다.
          </p>
          <BreweryButton1 name={"문의글 남기기"} path={"/brewery/group-form"} />
        </div>
      </div>
    </div>
  );
}
