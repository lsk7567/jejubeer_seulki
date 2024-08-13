import React from "react";
import "../../css/css_seulki/seulki.css";
import { Link } from "react-router-dom";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniTwo } from "../../components/components_seulki/BreweryIntroNavMini.jsx";

export default function BreweryTourMain() {
  return (
    <div>
      <BreweryIntroNav num={1} />
      <BreweryIntroNavMiniTwo num={0} />
      <video
        src="https://jbimweb.s3.ap-northeast-2.amazonaws.com/video/brewery_web.mp4"
        muted
        playsInline
        loop
        autoPlay
        className="brewerytour-video"
      ></video>
      <div className="content">
        <div className="brewerytourmain-text">
          <p>Brewery</p>
          <p style={{ fontSize: "45px" }}>
            <strong>제주맥주 양조장</strong>
          </p>
        </div>
      </div>
      <div className="breweryspace-img-div" style={{ height: "278px" }}>
        <div className="brewerytourmain-banner-text">
          좋은 맥주로, 맥주의 깊이를 알고, 제대로 맥주를 즐기는
          <br />
          맥주 미식 문화를 만들어 나가는 일<br />
          <br />
          지금, 제주에서
          <br />
          제주맥주 양조장에서부터 시작합니다.
        </div>
      </div>
      <div className="content brewerytourmain">
        <div className="seulki-flex brewerytourmain-hr-div">
          <div className="brewerytourmain-hr"></div>
          <div className="brewerytourmain-hr-text">PROGRAM</div>
          <div className="brewerytourmain-hr"></div>
        </div>
        <p className="brewerytourmain-p">
          우리나라에 없던 새로운 문화, 제주맥주 양조장에서 경험해보세요.
        </p>
        <ul className="seulki-flex brewerytourmain-ul">
          <Link className="brewerytourmain-link" to="/brewery/tour/one">
            <li>
              <img
                className="brewerytourmain-image"
                src="/images/images_seulki/brewerytourmain/1.png"
                alt=""
              />
              <p className="brewerytourmain-image-p">양조장 투어</p>
            </li>
          </Link>
          <Link to="/brewery/tour/two">
            <li>
              <img
                className="brewerytourmain-image"
                src="/images/images_seulki/brewerytourmain/2.jpg"
                alt=""
              />
              <p className="brewerytourmain-image-p">
                나만의 전용잔 만들기<strong>(DIY)</strong>
              </p>
            </li>
          </Link>
          <Link to="/brewery/group">
            <li>
              <img
                className="brewerytourmain-image"
                src="/images/images_seulki/brewerytourmain/3.jpg"
                alt=""
              />
              <p className="brewerytourmain-image-p">단체 문의</p>
            </li>
          </Link>
        </ul>
      </div>
      <div className="brewerytourmain-img-div">
        <img src="/images/images_seulki/brewerytourmain/4.PNG" alt="" />
      </div>
    </div>
  );
}
