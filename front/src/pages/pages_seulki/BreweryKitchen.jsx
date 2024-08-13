import React from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";

export default function BreweryKitchen() {
  return (
    <div>
      <BreweryIntroNav num={2} />

      <div className="content brewery-kitchen">
        <video
          src="https://jbimweb.s3.ap-northeast-2.amazonaws.com/video/jb_brewers_kitchen_kv_pc.mp4"
          muted
          playsInline
          loop
          autoPlay
          width={"100%"}
        ></video>
        <div className="kitchen-div-1">
          <p>
            스몰배치를 통해 탄생한 제주맥주 브루어들의 흥미진진한 맥주실험&nbsp;
            {"<"}용감한 주방{">"}
          </p>
        </div>
        <div className="kitchen1">
          <div className="kitchen2"></div>
        </div>
        <div className="kitchen-div-2">
          <p className="kitchen-div-2-p">
            <strong>이곳이 바로 용감한 주방의 심장인 '스몰배치' 에요.</strong>
            <br />
            용감한 주방의 맥주들는 양조장 2층에 위치한 스몰배치 탱크에서
            양조합니다.
            <br />
            <br />
            "보글보글...우당탕탕..." 들리시나요?
            <br /> 다양하고 특별한 맥주개발을 위해 끝없는 레시피 개발과 실험이
            진행되는 <br />
            <strong>브루어가 요리하는 용감한 주방으로 놀러오세요!</strong>
          </p>
        </div>
        <div>
          <img
            className="brewery-kitchen-img2"
            src="/images/images_seulki/kitchen/2.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="brewery-kitchen-img2"
            src="/images/images_seulki/kitchen/3.png"
            alt=""
            style={{ marginTop: "-15px" }}
          />
        </div>
        <div className="kitchen-div-3"></div>
      </div>
    </div>
  );
}
