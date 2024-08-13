import React, { useRef } from 'react';
import PolicyTitle from '../../../components/components_mimi/policy/PolicyTitle';
import "../../../css/css_mimi/policy.css";

export default function PrivacyPolicy() {
  const privacyPolicy1 = useRef(null);
  const privacyPolicy2 = useRef(null);

  const topolicylist = (list) => {
    if(list.current){
      list.current.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <div className='content privacy-content'>
      <PolicyTitle ptitle="개인정보처리방침" />
      <p className='policy-text'>
        제주맥주 주식회사&#40;이하 “회사”&#41;는 「개인정보 보호법」 등 관련 법령에 따라 개인정보를 보호하고 
        이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 
        수립&#183;공개합니다. 본 개인정보처리방침은 회사가 제공하는 웹/모바일웹 서비스에 적용되며 다음과 같은 내용을 포함하고 있습니다.
      </p>
      <table border="1" className='policy-table privacy-policy-1st-table policy-table-text'>
        <tbody>
          <tr>
            <td>
              <p className='policy-click' onClick={() => topolicylist(privacyPolicy1)}><span className='policy-emphasis privacy-policy-list1'>
                1.</span> 개인정보의 수집항목 및 이용 목적
              </p>
            </td>
            <td>
              <p className='policy-click' onClick={() => topolicylist(privacyPolicy2)}><span className='policy-emphasis policy-click privacy-policy-list2'>
                2.</span> 개인정보의 처리 및 보유 기간
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className='policy-click'><span className='policy-emphasis policy-click'>
                3.</span> 개인정보의 제3자 제공
              </p>
            </td>
            <td>
              <p className='policy-click'><span className='policy-emphasis policy-click'>
                4.</span> 개인정보처리 위탁
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className='policy-click'><span className='policy-emphasis policy-click'>
                5.</span> 정보주체와 법정대리인의 권리·의무 및 그 행사방법
              </p>
            </td>
            <td>
              <p className='policy-click'><span className='policy-emphasis policy-click'>
                6.</span> 개인정보의 파기
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className='policy-click'><span className='policy-emphasis policy-click'>
                7.</span> 개인정보의 안전성 확보 조치
              </p>
            </td>
            <td>
              <p className='policy-click'><span className='policy-emphasis policy-click'>
                8.</span> 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className='policy-click'><span className='policy-emphasis policy-click'>
                9.</span> 개인정보 보호책임자 및 권익침해 구제방법
              </p>
            </td>
            <td>
              <p className='policy-click'><span className='policy-emphasis policy-click'>
                10.</span> 개인정보 처리방침 변경 및 고지의무
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <span className='privacy-policy-subtitle' ref={privacyPolicy1}>1. 개인정보의 수집항목 및 이용 목적</span>
      <p className='policy-text policy-inner-text'>
        1. 회사는 회원가입, 상품 주문, 프로그램 예약 등 서비스 제공에 필요한 최소한의 개인정보를 ‘필수 항목’, 
        그 외 개인정보는 ‘선택 항목’으로 구분하여 개별적으로 동의할 수 있는 절차를 마련하여 동의를 받아 처리하고 
        있습니다. 또한 만 14세 미만 아동 정보나 이용자의 기본 인권 침해 우려가 있는 민감한 개인정보(인종, 사상, 
        출신지, 정치적 성향 등), 고유식별정보는 수집하지 않습니다.
      </p>
      <p className='policy-text policy-inner-text'>
        2. 이용자가 필요한 최소한의 개인정보 이외의 개인정보를 제공하지 아니한다는 이유로 해당 서비스 제공을 
        거부하지 않으며, 수집한 모든 개인정보는 고지한 목적 범위 내에서만 이용됩니다. 이용 목적이 변경되는 
        경우에는 「개인정보 보호법」에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
      </p>
      <table border="1" className='policy-table privacy-policy-2nd-table policy-table-text'>
        <tbody>
          <tr>
            <td>구분</td>
            <td className='privacy-policy-2nd-table-data2'>수집/이용 항목</td>
            <td className='privacy-policy-2nd-table-data3'>수집/이용 목적</td>
          </tr>
          <tr>
            <th>회원가입</th>
            <td className='privacy-policy-2nd-table-data2'>[필수] 이름, 핸드폰번호, 이메일(ID), 생년월일, 성별, 본인인증정보 (CI(연계정보), DI(중복정보))</td>
            <td className='privacy-policy-2nd-table-data3'>회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별ㆍ인증, 회원자격 유지ㆍ관리, 제한적 본인확인제 시행에 따른 본인확인 및 서비스 계약의 이행</td>
          </tr>
          <tr>
            <th rowSpan={2}>카카오톡 간편가입</th>
            <td className='privacy-policy-2nd-table-data2'>[필수] 프로필 정보(닉네임/프로필 사진), 카카오계정(이메일, 핸드폰번호), 본인확인정보(이름, 성별, 생년월일)</td>
            <td className='privacy-policy-2nd-table-data3'>제주맥주 서비스 내 이용자 식별, 회원관리 및 서비스 제공</td>
          </tr>
          <tr>
            {/* <th></th> */}
            <td className='privacy-policy-2nd-table-data2'>[필수] CI(연계정보)</td>
            <td className='privacy-policy-2nd-table-data3'>회원비교식별</td>
          </tr>
          <tr>
            <th rowSpan={3}>고객 및 회원 관리</th>
            <td className='privacy-policy-2nd-table-data2'>[필수] 상담내용</td>
            <td className='privacy-policy-2nd-table-data3'>문의, 민원처리 시 응대</td>
          </tr>
          <tr>
            {/* <th></th> */}
            <td className='privacy-policy-2nd-table-data2'>[선택] 주소, 핸드폰번호, 이메일</td>
            <td className='privacy-policy-2nd-table-data3'>고객 서비스 품질 향상을 위한 고객 분석, 신규 프로그램 및 신제품 등 프로모션 안내, 개인 맞춤형 광고/이벤트 및 마케팅 활용, 경품.사은품 배송 등 부가 서비스 제공</td>
          </tr>
          <tr>
            {/* <th></th> */}
            <td className='privacy-policy-2nd-table-data2'>[자동수집정보] 서비스이용기록, 이용정지/해지기록, IP주소, 접속로그, 쿠키</td>
            <td className='privacy-policy-2nd-table-data3'>부정 이용 방지, 비인가 사용 방지</td>
          </tr>
          <tr>  
            <th rowSpan={2}>BREWERY 프로그램 이용</th>
            <td className='privacy-policy-2nd-table-data2'>[필수] 신청자 정보(이름, 핸드폰번호, 이메일), CI(연계정보), 결제정보(신용카드 결제 시: 카드사명, 카드번호 등 정산을 위한 정보, 계좌이체 시: 계좌정보(계좌번호, 계좌명), 입금자 이름)</td>
            <td className='privacy-policy-2nd-table-data3'>BREWERY 프로그램 예약 및 예약 사항에 대한 안내, 예약 확인/취소 및 기타 계약사항에 대한 서비스 제공</td>
          </tr>
          <tr>
            {/* <th></th> */}
            <td className='privacy-policy-2nd-table-data2'>[선택] 신청자 정보(성별, 생년월일)</td>
            <td className='privacy-policy-2nd-table-data3'>제주맥주 고객 서비스 품질 향상을 위한 고객 분석 및 맞춤형 서비스 제공</td>
          </tr>
          <tr>
            <th>상품 주문 (회원)</th>
            <td className='privacy-policy-2nd-table-data2'>
              [필수] 주문자 정보(이름, 핸드폰번호, 이메일), 배송 정보(수령인이름, 전화번호, 주소), 
              결제정보(카드사명, 카드번호 등 정산을 위한 정보)
            </td>
            <td className='privacy-policy-2nd-table-data3'>
              재화 또는 서비스 계약의 이행 (계약서·청구서 발송, 요금 결제·정산, 채권추심, 상품배송, 고지사항 전달 등)
            </td>
          </tr>
          <tr>
            <th>상품 주문 (비회원)</th>
            <td className='privacy-policy-2nd-table-data2'>
              [필수] 주문자 정보(이름, 핸드폰번호, 이메일), 배송 정보(수령인이름, 전화번호, 주소), 
              결제정보(카드사명, 카드번호 등 정산을 위한 정보)
              </td>
            <td className='privacy-policy-2nd-table-data3'>
              재화 또는 서비스 계약의 이행 (계약서·청구서 발송, 요금 결제·정산, 채권추심, 상품배송, 고지사항 전달 등)
              </td>
          </tr>
        </tbody>
      </table>
      <span className='privacy-policy-subtitle' ref={privacyPolicy2}>2. 개인정보의 처리 및 보유 기간</span>
      <p>
        <p className='policy-text policy-inner-text'>
          <span className='policy-emphasis'>1.</span> 회사는 법령에 따른 개인정보 보유·이용기간 또는 이용자에게 고지 후 
          동의 받은 보유·이용기간 내에서 개인정보를 처리·보유합니다. 개인정보의 수집 및 이용목적 달성, 보유기간 만료, 
          회원의 수집 및 이용 동의 철회 시 수집된 개인정보는 열람하거나 이용할 수 없도록 파기 처리합니다.
        </p>
        <p className='policy-text policy-inner-text'>
          <span className='policy-emphasis'>2.</span> 제주맥주는 상법 및 전자상거래 등에서 소비자 보호에 관한 법률 등 
          관련 법령의 규졍에 따라 다음과 같이 거래 관련 권리 의무 관계를 확인하기 위하여 개인정보를 일정기간 보유할 수 있으며, 
          법령에 근거한 사유 외 개인정보를 열람 및 처리하지 않습니다. &#40;이용약관에 의해 탈퇴하지 않은 회원의 경우 
          개인정보 보관 기간은 보유 의무기간 이상 보유할 수 있으며, 이 경우 고객의 동의 철회 요청 시 파기합니다.&#401;
            <p className='policy-sub-inner-text'>- 소비자의 불만 또는 분쟁처리에 관한 기록: 5년</p>
            <p className='policy-sub-inner-text'>- 대금결제 및 재화 등의 공급에 관한 기록: 5년</p>
            <p className='policy-sub-inner-text'>- 계약 또는 청약철회 등에 관한 기록: 5년</p>
        </p>
        <p className='policy-text policy-inner-text'>
          <span className='policy-emphasis'>3.</span> 이용자의 동의를 얻어 보유하고 있는 거래정보를 열람하고자 요구하는 경우, 
          바로 열람할 수 있도록 조치하고 있습니다.<br/>
        </p>
        <p className='policy-text policy-inner-text'>
          <span className='policy-emphasis'>4.</span> 특정 금융거래정보의 보고 및 이용 등에 관한 법률에 따라 부정거래행위자로 
          확인되어 탈퇴 처리가 된 경우 CI&#40;연계정보&#41;는 개인정보의 보유 기간을 달리할 수 있습니다.<br/>
          </p>
        <p className='policy-text policy-inner-text'>
          <span className='policy-emphasis'>5.</span> 회원이 1년 간 서비스 이용기록이 없는 경우, 「개인정보 보호법」에 근거하여 
          회원에게 사전 통지하고 별도로 분리하여 저장합니다. 이 때 전화번호 또는 이메일 등의 정보가 정확하지 않을 경우 
          해당 정보를 수신할 수 없으므로, 회원님 정보의 정확성, 최신성을 유지하여 주시기 바랍니다. 
          단, 2&#41;에 기재한 관계 법령의 규정에 의하여 보유 필요 시 관계법령에서 규정한 기간 동안 보관합니다.
        </p>
      </p>
      <p className='policy-text policy-last-text1'>
        최초 개인정보 처리방침 시행일 : <span className='policy-emphasis'>2020</span>년 <span className='policy-emphasis'>7</span>월 <span className='policy-emphasis'>23</span>일
      </p>
    </div>
  );
}