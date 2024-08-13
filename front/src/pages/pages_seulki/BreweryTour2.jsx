import React from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniTwo } from "../../components/components_seulki/BreweryIntroNavMini.jsx";
import BreweryTourButton from "../../components/components_seulki/BreweryTourButton.jsx";

export default function BreweryTour2() {
  return (
    <div>
      <BreweryIntroNav num={1} />
      <BreweryIntroNavMiniTwo num={0} />
      <BreweryTourButton name={"예약"} path={"/brewery/glass/ticketing"} />
      <img src="/images/images_seulki/brewerytour2/1.jpg" alt="" />
      <div className="content brewerytour-1">
        <div className="brewerygroup-div1">
          <p className="brewerytour-div1-p1">
            많고 많은 맥주잔 중, 내 맥주잔 하나는 있어야죠!
          </p>
          <p className="brewerytour-div1-p2">나만의 전용잔 만들기</p>
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
                <th>포함사항</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>전용잔 만들기</td>
                <td>15,000</td>
                <td>45분</td>
                <td>5명</td>
                <td>제주맥주 전용잔, 시음</td>
              </tr>
            </tbody>
          </table>
          <div className="brewerytour-div2-p">
            <p>* 맥주 시음 희망시 신분증 필참</p>
            <p>* 맥주, 논알콜 시음 시 신분증 필참</p>
          </div>
          <div className="brewerytour-div2-img">
            <span>
              <img src="/images/images_seulki/brewerytour2/2.png" alt="" />
              <span> 사전 예약 필수</span>
            </span>
            <span>
              <img src="/images/images_seulki/brewerytour2/3.png" alt="" />
              <p className="brewerytour2-span-p1">
                전 연령 참여가능
                <p className="brewerytour2-span-p2">
                  (단, 만 12세 이하의 경우 보호자 동반 필수)
                </p>
              </p>
            </span>
          </div>
        </div>
        <div className="brewerytour-div3">
          <p className="brewerygroup-div3-p1">나만의 전용잔 만들기란?</p>
          <p className="brewerytour-div3-p2">
            제주맥주 전용잔에 원하는 문구를 <br />
            직접 각인해보는 체험입니다.
          </p>
          <div className="brewerytour-img-bg1">
            <img src="/images/images_seulki/brewerytour2/4.jpg" alt="" />
          </div>

          <div className="brewerytour2-img-div">
            <img src="/images/images_seulki/brewerytour2/5.jpg" alt="" />
            <img src="/images/images_seulki/brewerytour2/6.jpg" alt="" />
          </div>
          <img src="/images/images_seulki/brewerytour2/7.jpg" alt="" />

          <div className="brewerytour-img-bg">
            <img src="/images/images_seulki/brewerytour2/8.jpg" alt="" />
          </div>
          <p className="brewerytour-div3-p2" style={{ textAlign: "left" }}>
            누구나 손쉽게 나만의 전용잔을 만들 수 있어요!
          </p>
          <img src="/images/images_seulki/brewerytour2/9.jpg" alt="" />
          <p className="brewerytour-div3-p2" style={{ textAlign: "left" }}>
            커플이나 친구들끼리 양조장에서
            <br /> 특별한 추억을 만들고 싶으신 분께 추천드려요.
          </p>
        </div>
      </div>
    </div>
  );
}
