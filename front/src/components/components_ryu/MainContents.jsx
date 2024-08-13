import React from "react";
import MainProductList from "../components_ryu/MainProductList";
import "../../css/css_ryu/mainContents.css";
import { Link } from "react-router-dom";

export default function MainContents() {
  return (
    <div className="main">
      <MainProductList />
      <div className="MainContents-sns-outer">
        <div className="content MainContents-sns">
          <div className="MainContents-sns-text">
            <p>@jejubeerofficial</p>
            <p>제주맥주 공식 인스타그램 계정에서</p>
            <p>제주맥주의 신제품, 이벤트 소식을 받아보실 수 있습니다.</p>
            <a href="https://www.instagram.com/jejubeerofficial/">바로가기</a>
          </div>
          <div className="MainContents-sns-img">
            <a href="https://www.instagram.com/reel/C8lQFPevV8J/">
              <div className="MainContents-sns-img-div"></div>
              <img src="/images/images_ryu/insta_Img_01.jpg" alt="instaImg1" />
            </a>

            <a href="https://www.instagram.com/reel/C8TrxeiRbpo/">
              <div className="MainContents-sns-img-div"></div>
              <img src="/images/images_ryu/insta_Img_02.jpg" alt="instaImg2" />
            </a>
            <a href="https://www.instagram.com/p/C8JmplFRCJf/">
              <div className="MainContents-sns-img-div"></div>
              <img src="/images/images_ryu/insta_Img_03.jpg" alt="instaImg3" />
            </a>
          </div>
        </div>
        <div className="MainContents-brewery">
          <div className="MainContents-brewery-div"></div>
          <img
            src="https://cdn.imweb.me/thumbnail/20240612/e2ffeb0ff6f22.jpg"
            alt=""
          />
          <div className="MainContents-brewery-text">
            <p>새로운 양조문화를 빚는 곳,</p>
            <p>제주맥주 양조장입니다.</p>
            <Link to="/brewery/intro">
              <button type="button">JEJU BEER BREWERY</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
