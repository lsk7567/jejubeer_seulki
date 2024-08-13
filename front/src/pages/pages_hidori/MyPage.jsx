import React from "react";
import "../../css/css_hidori/mypage.css";
import { MenuMainTitle, MenuSubTitle } from "../../components/MenuTitle.jsx";
import MyPageMain from "../../components/components_hidori/mypage/MyPageMain.jsx";

export default function MyPage() {
  return (
    <div>
      <div className="menutitle-margin">
        <MenuMainTitle title="MY PAGE" />
        <MenuSubTitle subtitle="안녕하세요. 제주맥주입니다." />
      </div>
      <MyPageMain />
    </div>
  );
}
