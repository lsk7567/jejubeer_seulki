import React from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniTwo } from "../../components/components_seulki/BreweryIntroNavMini.jsx";
import BreweryTourButton from "../../components/components_seulki/BreweryTourButton.jsx";

export default function BreweryTour1() {
  return (
    <div>
      <BreweryIntroNav num={1} />
      <BreweryIntroNavMiniTwo num={0} />
      <BreweryTourButton
        name={"양조장투어 예약"}
        path={"/brewery/tour/ticketing"}
      />
      <img src="/images/images_seulki/brewerytour1/1.jpg" alt="" />
      <div className="content brewerytour-1">
        <div className="brewerygroup-div1">
          <p className="brewerytour-div1-p1">국내 최초 체험형 투어공간</p>
          <p className="brewerytour-div1-p2">제주맥주 양조장 투어</p>
        </div>
        <div className="brewerytour-div2">
          <table className="brewerytour1-table">
            <colgroup>
              <col width="20%"></col>
              <col width="15%"></col>
              <col width="10%"></col>
              <col width="10%"></col>
              <col width="*"></col>
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>금액</th>
                <th>시간</th>
                <th>정원</th>
                <th>옵션 및 포함사항</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>양조장투어</td>
                <td>22,000</td>
                <td>40분</td>
                <td>5명</td>
                <td>제주맥주 1종</td>
              </tr>
            </tbody>
          </table>
          <div className="brewerytour-div2-p">
            <p>* 음주 불가 시, 논알콜 또는 음료로 대체 가능</p>
            <p>* 맥주, 논알콜 시음 시 신분증 필참</p>
          </div>
          <div className="brewerytour-div2-img">
            <span>
              <img src="/images/images_seulki/brewerytour1/2.png" alt="" />
              <span> 사전 예약 필수</span>
            </span>
            <span>
              <img src="/images/images_seulki/brewerytour1/3.png" alt="" />만
              <span> 7세 이상 참여가능</span>
            </span>
          </div>
        </div>
        <div className="brewerytour-div3">
          <p className="brewerygroup-div3-p1">제주맥주 양조장 투어란?</p>
          <p className="brewerytour-div3-p2">
            제주맥주 양조장에서는 <br />
            제주맥주의 양조가들이 전세계에서 공수한
            <br /> 최첨단 장비로 맥주를 양조하는 모습을 <br />
            직접 관람하실 수 있습니다.
            <br />
            <br /> 맥주에 관련된 다양한 교육과 체험 활동을 <br />
            경험하실 수 있습니다.
          </p>
          <div className="brewerytour-img-bg1">
            <img src="/images/images_seulki/brewerytour1/4.jpg" alt="" />
          </div>
          <p className="brewerytour-div3-p2" style={{ textAlign: "left" }}>
            제주맥주 양조장 투어는 맥주가 만들어지는 과정을
            <br /> 올레길을 걷듯, 오감으로 체험해보는
            <br /> 맥주 양조 여행입니다.
          </p>
          <img src="/images/images_seulki/brewerytour1/5.jpg" alt="" />
          <img src="/images/images_seulki/brewerytour1/6.jpg" alt="" />
          <div className="brewerytour-img-bg">
            <img src="/images/images_seulki/brewerytour1/7.jpg" alt="" />
          </div>
          <p className="brewerytour-div3-p2" style={{ textAlign: "left" }}>
            맥주의 다양한 원료들을
            <br /> 직접 맛보고 향을 맡아 보세요.
          </p>
          <div className="seulki-flex brewerytour-div4">
            <p className="brewerytour-div4-p" style={{ textAlign: "left" }}>
              비어 도슨트의 친절한 설명과 함께
              <br />
              맥주를 알아가는 재미에 푹 빠져보세요!
            </p>
            <img src="/images/images_seulki/brewerytour1/8.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
