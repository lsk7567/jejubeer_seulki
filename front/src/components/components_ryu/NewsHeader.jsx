import React from "react";
import NoticeNavBar from "../components_mimi/NoticeNavBar";
import { MenuMainTitle, MenuSubTitle } from "../MenuTitle";
import { useNavigate } from "react-router-dom";

export default function NewsHeader() {
  const navigate = useNavigate();

  const gotoSignup = () => {
    navigate("/join");
  };
  return (
    <div>
      <NoticeNavBar num={0} />
      <div className="news-banner-img-box">
        <img
          src="https://cdn.imweb.me/thumbnail/20200723/bb117a2c79fa9.jpeg"
          alt="to-signup-banner"
          className="news-banner-img"
          onClick={gotoSignup}
        />
      </div>
      <MenuMainTitle title="NEWS" />
      <MenuSubTitle subtitle="제주맥주의 소식을 알려드립니다." />
    </div>
  );
}
