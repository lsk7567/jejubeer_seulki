import React, { useEffect, useRef, useState } from "react";
import "../../css/css_ryu/bulkPurchace.css";
import { Link } from "react-router-dom";

export default function BulkPurchace() {
  const textarea =
    "회사명(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.\n\n제1조 (개인정보의 처리목적)\n 회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.\n\n1. 홈페이지 회원 가입 및 관리\n회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.\n\n2. 재화 또는 서비스 제공\n물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등을 목적으로 개인정보를 처리합니다.\n\n3. 고충 처리\n민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다.\n\n제2조 (개인정보의 처리 및 보유기간)\n① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.\n② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.\n\n1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지\n다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지\n1) 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사, 조사 종료 시까지\n2) 홈페이지 이용에 따른 채권 및 채무관계 잔존 시에는 해당 채권, 채무 관계 정산 시까지";
  const splitText = textarea.split("\n").join("\n");
  const [askFormData, setAskFormData] = useState({
    name: "",
    company: "",
    tel1: "",
    tel2: "",
    tel3: "",
    ea1: false,
    ea2: false,
    region: "",
    email: "",
    check1: false,
    check2: false,
    agree: false,
  });
  const isChecked1 = askFormData.ea1;
  const isChecked2 = askFormData.ea2;
  const nameRef = useRef("");
  const companyRef = useRef("");
  const telRef = useRef("");

  /*
   * 폼데이터 저장 */
  const saveData = (e) => {
    const { name, value } = e.target;
    setAskFormData({ ...askFormData, [name]: value });
  };
  const handleCheck = (name, isChecked) => {
    setAskFormData({ ...askFormData, [name]: isChecked });
  };

  // console.log("formData =>", askFormData);

  const validationCheck = () => {
    if (!askFormData.name) {
      alert("성함을 입력해주세요.");
      nameRef.current.focus();
    } else if (!askFormData.company) {
      alert("상호명/사업자등록번호를 입력해주세요.");
      companyRef.current.focus();
    } else if (!askFormData.tel1 || !askFormData.tel2 || !askFormData.tel3) {
      alert("연락처를 입력해주세요.");
      telRef.current.focus();
    } else if (!askFormData.ea1 && !askFormData.ea2) {
      alert("발주수량을 선택해주세요.");
      document.getElementsByClassName("ea1")[0].style.outline =
        "3px solid #1ecad3";
      document.getElementsByClassName("ea2")[0].style.outline =
        "3px solid #1ecad3";
    } else if (askFormData.ea1 && askFormData.ea2) {
      alert("발주수량을 정확히 선택해주세요.");
      document.getElementsByClassName("ea1")[0].style.outline =
        "3px solid #1ecad3";
      document.getElementsByClassName("ea2")[0].style.outline =
        "3px solid #1ecad3";
      setAskFormData({ ...askFormData, ea1: false, ea2: false });
    } else if (
      (!askFormData.check1 && !askFormData.check2) ||
      !askFormData.check1
    ) {
      alert("주의사항을 확인해주세요.");
      document.getElementsByClassName("check1")[0].style.outline =
        "3px solid #1ecad3";
    } else if (!askFormData.check2) {
      alert("주의사항을 모두 확인해주세요.");
      document.getElementsByClassName("check2")[0].style.outline =
        "3px solid #1ecad3";
    } else if (!askFormData.agree) {
      alert("개인정보 수집 및 이용 동의에 동의해주세요.");
      // document.getElementById("agree").style.outline =
      //   "3px solid #1ecad3";
      document.getElementsByClassName("agree")[0].style.outline =
        "3px solid #1ecad3";
    } else {
      alert("문의 접수가 완료되었습니다.");
      window.location.reload();
    }
  };

  const handleFocus = (type) => {
    if (type === "ea1") {
      document.getElementsByClassName("ea1")[0].style.outline = "none";
    } else if (type === "ea2") {
      document.getElementsByClassName("ea2")[0].style.outline = "none";
    } else if (type === "check1") {
      document.getElementsByClassName("check1")[0].style.outline = "none";
    } else if (type === "check2") {
      document.getElementsByClassName("check2")[0].style.outline = "none";
    } else if (type === "agree") {
      document.getElementsByClassName("agree")[0].style.outline = "none";
    }
  };

  // useEffect(() => {
  //   console.log(askFormData);
  // }, [askFormData]);

  return (
    <div className="BulkPurchace">
      <div className="BulkPurchace-header-outer">
        <div className="content">
          <div className="BulkPurchace-header">
            <h1>업장 및 대량 문의</h1>
          </div>
        </div>
      </div>
      <div className="content BulkPurchace-container">
        <form>
          <div>
            <p>
              1. 성함 <span className="BulkPurchace-star">*</span>
            </p>
            <input
              type="text"
              className="BulkPurchace-divInput BulkPurchace-autofill"
              id="name"
              ref={nameRef}
              name="name"
              value={askFormData.name}
              onChange={saveData}
            />
          </div>
          <div>
            <p>
              2. 상호명 / 사업자등록증번호{" "}
              <span className="BulkPurchace-star">*</span>
            </p>
            <input
              type="text"
              className="BulkPurchace-divInput BulkPurchace-autofill"
              id="company"
              ref={companyRef}
              name="company"
              value={askFormData.company}
              onChange={saveData}
            />
          </div>
          <div className="BulkPurchace-q3 BulkPurchace-divInput">
            <p>
              3. 연락처 <span className="BulkPurchace-star">*</span>
            </p>
            <div>
              <input
                type="text"
                className="BulkPurchace-autofill"
                name="tel1"
                onChange={saveData}
                ref={telRef}
                value={askFormData.tel1}
              />
              <span> - </span>
              <input
                type="text"
                className="BulkPurchace-autofill"
                name="tel2"
                onChange={saveData}
                value={askFormData.tel2}
              />
              <span> - </span>
              <input
                type="text"
                className="BulkPurchace-autofill"
                name="tel3"
                onChange={saveData}
                value={askFormData.tel3}
              />
            </div>
          </div>
          <div className="BulkPurchace-q4 BulkPurchace-divInput">
            <p>
              4. 발주수량 <span className="BulkPurchace-star">*</span>
            </p>
            <p>
              <input
                type="checkbox"
                id="ea1"
                name="ea1"
                checked={isChecked1}
                onChange={(e) => handleCheck("ea1", e.target.checked)}
                onClick={() => handleFocus("ea1")}
              />
              <label htmlFor="ea1" className="ea1"></label>
              <label htmlFor="ea1">
                <span> 4-1.</span> 50박스 미만 (문자로 안내)
              </label>
            </p>
            <p>
              <input
                type="checkbox"
                id="ea2"
                className="BulkPurchace-divInput"
                name="ea2"
                checked={isChecked2}
                onChange={(e) => handleCheck("ea2", e.target.checked)}
                onClick={() => handleFocus("ea2")}
              />
              <label htmlFor="ea2" className="ea2"></label>
              <label htmlFor="ea2">
                <span> 4-2.</span> 50박스 이상 (프렌차이즈의 경우 지점별 발송
                불가, 지점별 별도 주문 필요)
              </label>
            </p>
          </div>
          <div>
            <p>(4-2 선택한 경우 작성 필수) 물류센터 지역</p>
            <input
              type="text"
              className="BulkPurchace-divInput BulkPurchace-autofill"
              name="region"
              onChange={saveData}
            />
            <p>(4-2 선택한 경우 작성 필수) 이메일 주소</p>
            <input
              type="text"
              className="BulkPurchace-divInput BulkPurchace-autofill"
              name="email"
              onChange={saveData}
            />
          </div>
          <div className="BulkPurchace-divInput">
            <p>
              7. 아래 주의사항을 반드시 확인해주세요.{" "}
              <span className="BulkPurchace-star">*</span>
            </p>
            <p>
              <input
                type="checkbox"
                id="check1"
                name="check1"
                checked={askFormData.check1}
                onChange={(e) => handleCheck("check1", e.target.checked)}
                onClick={() => handleFocus("check1")}
              />
              <label htmlFor="check1" className="check1"></label>
              <label htmlFor="check1">
                <span>입력폼 제출 후 회신까지 1~2일 소요됩니다.</span>
              </label>
            </p>
            <p>
              <input
                type="checkbox"
                id="check2"
                className="BulkPurchace-divInput"
                name="check2"
                checked={askFormData.check2}
                onChange={(e) => handleCheck("check2", e.target.checked)}
                onClick={() => handleFocus("check2")}
              />
              <label htmlFor="check2" className="check2"></label>
              <label htmlFor="check2">
                <span>대표전화(02.2235.5559)로 문자/전화드립니다.</span>
              </label>
            </p>
          </div>
          <div>
            <p>
              개인정보 수집 및 이용 동의{" "}
              <span className="BulkPurchace-star">*</span>
            </p>
            <textarea value={splitText} readOnly />
            <p>
              <input
                type="checkbox"
                id="agree"
                className="BulkPurchace-divInput"
                name="agree"
                checked={askFormData.agree}
                onChange={(e) => handleCheck("agree", e.target.checked)}
                onClick={() => handleFocus("agree")}
              />
              <label htmlFor="agree" className="agree"></label>
              <label htmlFor="agree">
                <span>개인정보 수집 및 이용에 동의합니다.</span>
              </label>
            </p>
          </div>
          <div className="BulkPurchace-btn">
            <button type="button" onClick={validationCheck}>
              작성
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
