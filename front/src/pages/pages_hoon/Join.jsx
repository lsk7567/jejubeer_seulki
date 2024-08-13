import React, { useState } from "react";
import AboutusSubtitle from "../../components/components_hoon/AboutusSubtitle.jsx";
import JoinStep1 from "../../components/components_hoon/JoinStep1.jsx";
import JoinStep2 from "../../components/components_hoon/JoinStep2.jsx";
import JoinStep3 from "../../components/components_hoon/JoinStep3.jsx";

export default function Join() {

  /* 이전,회원가입 버튼이동관리 */
  const [step, setStep] = useState(0);
  const nextStep = () => {setStep(step + 1);};
  const prevStep = () => {setStep(step - 1);};
  
  /* 회원가입 정보 */
  const [formData, setFormData] = useState({
    userProfile: "",
    userId: "",
    userEmail: "",
    userPass: "",
    userPassCheck: "",
    userName: "",
    gender: "",
    phoneNumber: "",
    address: "",
    detailaddress: "",
    birthdayYear: "",
    birthdayMonth: "",
    birthdayDay: "",
  })
  /* input onChange를 위한 이벤트 */
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }
  const handleAddress =(e)=>{
    setFormData({...formData,
        address: e.address
    });
  }
  /* 카카오로 시작하지 */
  const Rest_api_key='3da3e056e02695bf2b6e4c7d63736125' //REST API KEY
    const redirect_uri = 'http://localhost:3000/kakao' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }

  return (
    <div className="join-content-wrap">
      <div className="join-content">
        <AboutusSubtitle title="JOIN" subtitle="안녕하세요. 제주맥주입니다." />
      </div>
      <div>
        {step === 0 && (
          <>
            <div className="join-btn-box">
              <button className="join-btn"
                type="button"
                onClick={() => nextStep()}>
                ID/PW 회원가입
              </button>
            </div>
            <div className="borderline">
              <div className="border-left"></div>
              <div>or</div>
              <div className="border-right"></div>
            </div>
            <div className="joinkakao-btn-box">
                <button className="joinkakao-btn" type="button" onClick={handleLogin}>
                  카카오로 시작하기
                </button>
            </div>
          </>
        )}
        {step === 1 && <JoinStep1 next={nextStep} prev={prevStep} />}
        {step === 2 && <JoinStep2 prev={prevStep} next={nextStep} formData={formData} handleChange={handleChange} handleAddress={handleAddress} setFormData={setFormData}/>}
        {step === 3 && <JoinStep3/>}
      </div>
    </div>
  );
}
