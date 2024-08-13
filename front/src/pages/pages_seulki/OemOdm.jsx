import React from "react";
import "../../css/css_seulki/seulki.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons/faAnglesDown";
import { BreweryButton1 } from "../../components/components_seulki/BreweryButtons.jsx";
import OemOdmSlide from "../../components/components_seulki/OemOdmSlide.jsx";

export default function OemOdm() {
  return (
    <div>
      <video
        src="https://jbimweb.s3.ap-northeast-2.amazonaws.com/video/240529_oemodm_web.mp4"
        muted
        playsInline
        loop
        autoPlay
        className="oemodm-video"
      ></video>
      <div className="content oemodm">
        <div className="seulki-flex oemodm-hr-div">
          <div className="oemodm-hr"></div>
          <div className="oemodm-hr-text">OEM/ODM 문의</div>
          <div className="oemodm-hr"></div>
        </div>
        <div className="oemodm-text">
          제작 희망하시는 종류(맥주/논알콜)와 수량, 납품 희망 일정 등 구체적으로
          작성해 주실수록 원활한 상담이 가능합니다.
          <br /> 메일 확인 후, 순차적으로 연락드리겠습니다.
          <br />
          <img
            className="oemodm-img"
            src="/images/images_seulki/oemodm/1.png"
            alt=""
          />
          <br />
          생산 : 주류(맥주, 기타주류), 탄산음료(논알콜) <br />
        </div>
        <div>
          <FontAwesomeIcon icon={faAnglesDown} className="oemodm-icon" />
          <h3 className="breweryintro-text-point">test@test.co.kr</h3>
        </div>
        <div className="seulki-flex oemodm-btn">
          <div className="oemodm-button">
            <BreweryButton1 name={"CONTACT"} path={"/contact"} />
          </div>
          <div className="oemodm-button">
            <BreweryButton1 name={"업장 및 대량 문의"} path={"/bulkPurchace"} />
          </div>
        </div>
        <OemOdmSlide />
      </div>
    </div>
  );
}
