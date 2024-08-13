import React from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniOne } from "../../components/components_seulki/BreweryIntroNavMini.jsx";

export default function BreweryIntro() {
  return (
    <div>
      <BreweryIntroNav num={0} />
      <BreweryIntroNavMiniOne num={0} />

      <div className="content breweryintro">
        <div className="breweryintro-block"></div>
        <h4 className="breweryintro-text-point">JEJU BEER BREWERY</h4>
        <div className="breweryintro-text">
          새로운 양조문화를 빚는 곳,
          <br />
          제주맥주 양조장입니다.
        </div>
        <img
          className="brewery-image"
          src="/images/images_seulki/breweryintro/1.jpg"
          alt=""
        />
        <div className="breweryintro-text breweryintro-text-2">
          제주맥주 양조장에서는
          <br />
          우리나라에 없던 새로운 맥주 문화를 만들어가는 사람들,
          <br />
          크래프트 맥주 컬쳐 크리에이터들이 모여
          <br />
          제주맥주의 신선한 브랜드 경험을 전하고 있습니다.
        </div>
        <div className="breweryintro-text">
          제주맥주 양조장에서는 전국에서 가장 신선한
          <br />갓 만든 제주맥주를 시음하실 수 있습니다.
        </div>
        <img
          className="brewery-image"
          src="/images/images_seulki/breweryintro/2.jpg"
          alt=""
        />
        <div className="breweryintro-text" style={{ marginBottom: "40px" }}>
          도슨트와 함께 양조장 투어를 하다보면 <br />
          맥주가 만들어지는 과정을 오감으로 체험하게 되고, <br />
          맥주에 대해 알게 된 만큼, <br />
          맥주를 더 맛있고 더 제대로 즐기는 법을 깨닫게 됩니다.
        </div>
        <img
          className="brewery-image"
          src="/images/images_seulki/breweryintro/3.jpg"
          alt=""
        />
        <div className="breweryintro-text breweryintro-text-2">
          양조장에 다녀가시면,
          <br /> 맥주와 함께하는 라이프스타일에 변화가 생깁니다.
          <br /> 편의점에서 무심코 집어들던 맥주를, 스타일과 원재료를 따져보며
          세심하게 고르게 되고, <br />
          마시기 전, 맥주와 잘 어울리는 요리를 준비하게 됩니다.
        </div>
        <div className="breweryintro-text">
          단순히 맥주를 마시는 것이 아니라 <br />
          맥주를 마심으로써, <br />
          생활 곳곳을 흥미롭고 풍요롭게 만들 수 있다는 <br />
          가능성을 알게 되었으니까요.
        </div>
        <img
          className="brewery-image"
          src="/images/images_seulki/breweryintro/4.jpg"
          alt=""
        />
        <div>
          <div className="breweryintro-text">
            맥주로 특별해지는 일상, <br />
            이제 여기
            <h3
              className="breweryintro-text-point"
              style={{ marginTop: "-2px" }}
            >
              제주맥주 양조장에서 시작해보세요.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
