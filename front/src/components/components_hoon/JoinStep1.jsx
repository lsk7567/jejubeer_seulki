import React,{useState} from 'react'

/* 회원가입 동의 체크 로직*/
export default function JoinStep1({next,prev}) {
  const [agreeData, setAgreeData] = useState({
    agreeAll: false,
    agreeService: false,
    agreePersonal: false,
    agreeSMS: false,
    agreeEmail: false,
    agreeAge: false,
  })
  const handleAgreeAll = (e) => {
    const isChecked = e.target.checked;
    setAgreeData({
      ...agreeData,
      agreeAll: isChecked,
      agreeService: isChecked,
      agreePersonal: isChecked,
      agreeSMS: isChecked,
      agreeEmail: isChecked,
      agreeAge: isChecked,
    });
  };
  const handleAgree = (e) => {
    const { name, checked } = e.target;
    setAgreeData((prevAgreeData) => {
      const newAgreeData = { ...prevAgreeData, [name]: checked };
      const allAgreed = newAgreeData.agreeService && newAgreeData.agreePersonal && newAgreeData.agreeSMS && newAgreeData.agreeEmail && newAgreeData.agreeAge;
      return { ...newAgreeData, agreeAll: allAgreed };
    });
  };
  
  /* 회원가입 동의 유효성 체크 */
  const validationCheck = () => {
    if(!(agreeData.agreeService && agreeData.agreePersonal && agreeData.agreeAge)){
      alert('이용약관 및 개인정보 수집 및 이용의 (필수)항목에 동의해주세요!')
    } else next();
  }

  return (
    <div className='joinstep1-content-wrap'>
      <label>
        <input className='agree-checkbox'
          type="checkbox"
          name="agreeAll"
          checked={agreeData.agreeAll}
          onChange={handleAgreeAll}/>
        <span className='agree-title'> 이용약관, 개인정보 수집 및 이용에 모두 동의합니다.</span>
      </label>
      <div>
        <label>
          <input className='agree-checkbox'
            type="checkbox" 
            name="agreeService"
            checked={agreeData.agreeService}
            onChange={handleAgree}/>
          <span className='agree-title'> 이용약관 동의 <strong>(필수)</strong></span>
        </label>
        <div className='agreement'>
          제 1 조 (목적) <br/>
          이 약관은 제주맥주 주식회사 (전자상거래 사업자, 이하 "회사")가 운영하는 브랜드 사이트 및 온라인 몰 ("몰")에서 제공하는 관련 서비스 (이하 "서비스")를 이용함에 있어 고객의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          <br/><br/>
          제 2 조 (정의) <br/>
          • ① "몰"이란 회사가 재화 또는 용역(이하 "재화 등")의 판매 등 고객에 대한 서비스를 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장, 또는 몰을 운영하는 사업자을 말합니다.
          • ② "고객"이란 몰에 접속거나 방문하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
          • ③ "서비스"란 회사가 몰에서 제4조에서 정한 내용의 업무를 통하여 이용자에게 제공하는 유•무형의 행위 등을 말합니다.
          • ④ "회원"이라 함은 몰에 개인정보를 제공하여 회원등록을 한 자로서, 회사 및 몰의 정보를 지속적으로 제공받으며, 몰이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
          • ⑤ "비회원"이라 함은 몰에 회원등록을 하지 않고 몰이 제공하는 서비스를 이용하는 자를 말합니다.
          • ⑥ "포인트"라 함은 몰에서 활동 및 구매를 함으로써 몰에서 정한 일정 기준에 부합할 경우 적립, 사용 등이 가능합니다. “포인트”는 온라인 상에서 이 약관에 정해진 바에 따라 회원가입 절차를 거친 회원에게 제공합니다.
          <br/><br/>
          [부칙] 2020. 07. 23. <br/>
          제1조(시행일) 이 약관은 2020년 07월 23일부터 시행합니다.
        </div>
      </div>
      <div>
        <label>
          <input className='agree-checkbox'
            type="checkbox" 
            name="agreePersonal"
            checked={agreeData.agreePersonal}
            onChange={handleAgree}/>
          <span className='agree-title'> 개인정보 수집 및 이용 동의 <strong>(필수)</strong></span>
        </label>
        <div className='agreement'>
          제주맥주는 ‘개인정보 보호법’ 등 관련 법령에 근거하여 회원가입 신청하시는 고객님께 수집하는 개인정보의 항목, 수집 및 이용목적, 보유기간 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내드리오니 다음 내용을 자세히 읽어보신 후 동의 여부를 결정하여 주시기 바랍니다.
          <br/><br/><br/><br/>
          • 목적 : 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별ㆍ인증, 회원자격 유지ㆍ관리, 제한적 본인확인제 시행에 따른 본인확인 및 서비스 계약의 이행
          - 문의, 민원처리 시 응대
        </div>
      </div>
      <div className='marketing-agreement'>
        <p>마케팅 활용 동의 및 광고 수신 동의</p>
        <p>* 제주도 한달살기 당첨 기회와 특가 할인 등 가장 먼저 제주맥주 이벤트 소식을 받아보세요.</p>
        <div className='agreement-select'>
          경품, 사은품 배송, 신규 프로그램 및 신제품 등 프로모션 안내, 개인 맞춤형 광고/이벤트 및 마케팅 활용 및 제주맥주 고객 서비스 품질 향상을 위한 고객 분석 등 광고성 정보 수신과 부가 서비스 제공에 동의하시겠습니까?
          <br/><br/><br/>(제주맥주는 21시~08시에는 광고성 정보를 전송하지 않습니다.)
        </div>
        <div>
          <label>
            <input className='agree-checkbox'
              type="checkbox" 
              name="agreeSMS"
              checked={agreeData.agreeSMS}
              onChange={handleAgree}/>
            <span className='agree-title'> SMS 수신 동의 (선택)</span>
          </label>
        </div>
        <div>
          <label>
            <input className='agree-checkbox'
              type="checkbox"
              name="agreeEmail"
              checked={agreeData.agreeEmail}
              onChange={handleAgree} />
            <span className='agree-title'> E-Mail 수신 동의 (선택)</span>
          </label>
        </div>
        <div>
          <label>
            <input className='agree-checkbox'
              type="checkbox"
              name="agreeAge"
              checked={agreeData.agreeAge}
              onChange={handleAgree} />
            <span className='agree-title'> 만 14세 이상입니다 <strong>(필수)</strong></span>
          </label>
        </div>
      </div>
      <div className='joinstep1-btn-box'>
        <button className='joinstep1-btn-cancel' type='button'onClick={()=>prev()}>취소</button>
        <button className='joinstep1-btn-join' type='button'onClick={()=>validationCheck(next, agreeData)} >가입하기</button>
      </div>
    </div>
  )
}
